const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const mysql = require("mysql2/promise");

// Inicia a conexão MySQL com o banco no servidor localhost
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "faltei",
});

// Inicia conexão com a porta serial do Arduino
const port = new SerialPort({ path: "COM3", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

parser.on("data", async (data) => {
  // Establece conexão e recebe os dados do Arduino através do "data"
  const uid = data.trim();
  console.log("UID recebido:", uid); // Armazena o valor UID

  try {
    // Vai esperar o banco buscar o aluno que tenha a mesma tag RFID inserida no sensor
    const [alunos] = await db.query("SELECT * FROM alunos WHERE rfid_tag = ?", [
      uid,
    ]);

    console.log(alunos.length); // Retorna a quantidade de alunos existem com essa UID cadastrada (Util para identificar erros de dados redundantes)

    // Se não encontrou alunos retorna a mensagm "UID não cadastrado no banco."
    if (alunos.length === 0) {
      console.log("UID não cadastrado no banco.");
      return;
    }
    const aluno = alunos[0]; // Armazena o primeiro nome do aluno devolvido pela requisição [alunos] e armazena na variavel "aluno" (É para o resultado sempre ser unico, pois o RFID é um identificador unico)

    const agora = new Date(); // Armazena o valor da data atual
    // Transforma a primeira letra em maiusculo (segunda-feira -> Segunda-feira) para um melhor tratamento dos dados
    const diaSemana = capitalize(
      agora.toLocaleString("pt-BR", { weekday: "long" }) // Retorna data na formatação em portgues
    );

    // Formata horário atual sem segundos: "HH:MM"
    const horaAtual = agora.toTimeString().split(":").slice(0, 2).join(":");

    // Faz uma requisição no banco de dados para as aulas que estão acontecendo nesse exato momento e armazena em [aulas]
    const [aulas] = await db.query(
      `SELECT * FROM aulas
       WHERE dia_semana = ?
         AND TIME_FORMAT(hora_inicio, '%H:%i') <= ?
         AND TIME_FORMAT(hora_fim, '%H:%i') >= ?`,
      [diaSemana, horaAtual, horaAtual]
    );

    // Se não estiver acontecendo nenhuma aula nesse momento
    if (aulas.length === 0) {
      console.log("Nenhuma aula neste horário."); // Retorna o valor no console "Nenhuma aula neste horário."
      port.write("Fora de horario\n"); // Retorna o valor no Arduino "Fora de horario"
      return;
    }

    const aula = aulas[0]; // Armazena a primeira aula devolvido pela requisição [aulas] e armazena na variavel "aula"

    // Faz uma requisição no banco de dados se já existe registro de presença e armazena em [presencas]
    const [presencas] = await db.query(
      `SELECT * FROM presencas
       WHERE aluno_id = ? AND aula_id = ? AND data = ?`,
      [aluno.id, aula.id, agora.toISOString().split("T")[0]] // Retorna o ID do aluno, ID da aula e a data atual no formto YYYY-MM-DD ignorando hora e minuto
    );

    if (presencas.length === 0) {
      // Se não tiver presença
      const toleranciaMinutos = 10; //  Determina a tolerancia em 10 minutos
      const atrasoLimite = addMinutes(aula.hora_inicio, toleranciaMinutos); // Calcula o horario de atraso limite (Aula começa as 7:00 o máximo para não receber falta são às 7:10)

      let status = "Presente"; // Se chegou antes dos 10 minutos de tolerãncia o status será de "Presente"
      if (horaAtual > atrasoLimite) status = "Atraso"; // Se chegar depois da tolerancia o status sera de "Atraso"

      // Para prosseguir o servidor terá que ter inserido os valores de ID do aluno, ID da aula, data, hora de entrada, hora de saida e o status no banco de dados
      await db.query(
        `INSERT INTO presencas (aluno_id, aula_id, data, hora_entrada, status)
         VALUES (?, ?, ?, ?, ?)`,
        [
          aluno.id,
          aula.id,
          agora.toISOString().split("T")[0],
          horaAtual,
          status,
        ]
      );

      console.log(`Entrada registrada: ${aluno.nome} - ${status}`); // Retorna o valor do nome do alunoe o status da entrada no console
      port.write(`Entrada registrada: ${aluno.nome} - ${status}\n`); // Retorna o valor do nome do aluno e o status da entrada no serial do Arduino
      return;
    }

    // Se já foi cadastrado o valor da entrada para o aluno, o servidor vai registrar o valor da saida
    const presenca = presencas[0];
    if (presenca.hora_saida) {
      console.log(`Saída já registrada para ${aluno.nome}.`); // Retorna o valor "Saída já registrada" caso o aluno ja tenha registrado a saida no console
      port.write("Saida ja registrada\n"); // Retorna o valor "Saída já registrada" caso o aluno ja tenha registrado a saida no serial do Arduino
      return;
    }

    let status = presenca.status; // Armazena o valor do status de presença

    // Determina o status de "Saida Antecipada"
    if (horaAtual < aula.hora_fim) {
      status =
        status === "Atraso"
          ? "Atraso e Saida Antecipada"
          : "Presente e Saida Antecipada";
      // Determina o status de "Saida no Horario"
    } else {
      status =
        status === "Atraso"
          ? "Atraso e Saida no Horario"
          : "Presente e Saida no Horario";
    }

    // Atualiza os valores de hora que o aluno foi embora e o status
    await db.query(
      `UPDATE presencas
       SET hora_saida = ?, status = ?
       WHERE id = ?`,
      [horaAtual, status, presenca.id]
    );

    console.log(`Saída registrada: ${aluno.nome} - ${status}`); // Retorna o valor do nome do aluno e o status da saida no console
    port.write(`${aluno.nome} Saida: ${status}\n`); // Retorna o valor do nome do aluno e o status da saida no serial do Arduino
  } catch (err) {
    console.error("Erro no banco:", err); // Captura o erro e devolve o erro no console
    port.write("Erro!\n"); // Devolve o valor "Erro" no serial do Arduino
  }
});

port.on("open", () => console.log("Conexão com Arduino OK."));
port.on("error", (err) => console.error("Erro serial:", err.message));

function addMinutes(horario, minutos) {
  const [h, m] = horario.split(":").map(Number);
  const data = new Date();
  data.setHours(h);
  data.setMinutes(m + minutos);
  data.setSeconds(0);
  return data.toTimeString().split(":").slice(0, 2).join(":");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
