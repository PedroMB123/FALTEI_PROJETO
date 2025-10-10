const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const mysql = require("mysql2/promise");

// Conexão MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Porta serial do Arduino
const port = new SerialPort({ path: "COM3", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

parser.on("data", async (data) => {
  const uid = data.trim();
  console.log("UID recebido:", uid);

  try {
    // 1️⃣ Busca aluno
    const [alunos] = await db.query("SELECT * FROM alunos WHERE rfid_tag = ?", [uid]);

    console.log(alunos.length)
    if (alunos.length === 0) {
      console.log("UID não cadastrado no banco.");
      port.write("Nao cadastrado!\n");
      return;
    }
    const aluno = alunos[0];

    const agora = new Date();
    const diaSemana = capitalize(
      agora.toLocaleString("pt-BR", { weekday: "long" })
    );

    // Formata horário atual sem segundos: "HH:MM"
    const horaAtual = agora.toTimeString().split(":").slice(0, 2).join(":");

    // 2️⃣ Busca aula correspondente
    const [aulas] = await db.query(
      `SELECT * FROM aulas
       WHERE dia_semana = ?
         AND TIME_FORMAT(hora_inicio, '%H:%i') <= ?
         AND TIME_FORMAT(hora_fim, '%H:%i') >= ?`,
      [diaSemana, horaAtual, horaAtual]
    );

    if (aulas.length === 0) {
      console.log("Nenhuma aula neste horário.");
      port.write("Fora de horario\n");
      return;
    }

    const aula = aulas[0];

    // 3️⃣ Verifica se já existe presença
    const [presencas] = await db.query(
      `SELECT * FROM presencas
       WHERE aluno_id = ? AND aula_id = ? AND data = ?`,
      [aluno.id, aula.id, agora.toISOString().split("T")[0]]
    );

    if (presencas.length === 0) {
      // Calcula atraso
      const toleranciaMinutos = 10;
      const atrasoLimite = addMinutes(aula.hora_inicio, toleranciaMinutos);

      let status = "Presente";
      if (horaAtual > atrasoLimite) status = "Atraso";

      await db.query(
        `INSERT INTO presencas (aluno_id, aula_id, data, hora_entrada, status)
         VALUES (?, ?, ?, ?, ?)`,
        [aluno.id, aula.id, agora.toISOString().split("T")[0], horaAtual, status]
      );

      console.log(`Entrada registrada: ${aluno.nome} - ${status}`);
      port.write(`Entrada registrada: ${aluno.nome} - ${status}\n`);
      return;
    }

    // Se já existe, tenta saída
    const presenca = presencas[0];
    if (presenca.hora_saida) {
      console.log(`Saída já registrada para ${aluno.nome}.`);
      port.write("Saida ja registrada\n");
      return;
    }

    // Verifica tempo mínimo de 1 minuto desde a entrada
    const entradaTime = new Date(`${presenca.data}T${presenca.hora_entrada}:00`);
    const diffMs = agora - entradaTime;
    if (diffMs < 60000) { // 1 minuto = 60000 ms
      console.log(`Ainda não passou 1 minuto desde a entrada. Saída não permitida.`);
      port.write("Saida negada: aguarde 1 min\n");
      return;
    }

    // Se saída antecipada ou no horário
    let status = presenca.status;
    if (horaAtual < aula.hora_fim) {
      status =
        status === "Atraso" ? "Atraso e Saida Antecipada" : "Presente e Saida Antecipada";
    } else {
      status =
        status === "Atraso" ? "Atraso e Saida no Horario" : "Presente e Saida no Horario";
    }

    await db.query(
      `UPDATE presencas
       SET hora_saida = ?, status = ?
       WHERE id = ?`,
      [horaAtual, status, presenca.id]
    );

    console.log(`Saída registrada: ${aluno.nome} - ${status}`);
    port.write(`${aluno.nome} Saida: ${status}\n`);
  } catch (err) {
    console.error("Erro no banco:", err);
    port.write("Erro!\n");
  }
});

port.on("open", () => console.log("Conexão com Arduino OK."));
port.on("error", (err) => console.error("Erro serial:", err.message));

// 🔹 Funções auxiliares
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


