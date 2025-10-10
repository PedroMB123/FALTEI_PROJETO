#include <Adafruit_GFX.h>
#include <MCUFRIEND_kbv.h>
#include <SPI.h>
#include <MFRC522.h>
#include <Wire.h>

MCUFRIEND_kbv tft;

// Define as cores de acordo com o código hexadecimal de cada uma
#define BLACK   0x0000 
#define GREEN   0x07E0
#define RED     0xF800
#define YELLOW  0xFFE0

// RFID
#define SS_PIN 53
#define RST_PIN 41
MFRC522 mfrc522(SS_PIN, RST_PIN);

String alunoAtual = ""; // Nome do aluno recebido do Node

void setup() {
  Serial.begin(9600);

  // Inicia a comunicação com sensor e portas arduino
  SPI.begin(); // Inicia a comunicação com fios especificos (MOSI, MISO, SCK e SS)
  mfrc522.PCD_Init(); // Inicia o sensor RFID mcfr522 (Limpa cache de registros antigos, inicia o chip do sensor)
  Serial.println("Sistema de Presença Iniciado");
  Serial.println("Aproxime o cartão...");

  // Inicia a tela
  uint16_t ID = tft.readID(); // Armazenao valor do ID do chip da tela na variavel "ID" um valor sem tipo de 16bits 
  if (ID == 0xD3D3) ID = 0x9486; // Caso ele atribua um valor inexistente (0xD3D3) ele reatribui outro valor (0x9486)
  tft.begin(ID); // Inicia a biblioteca da tela e informa o ID da tela

  // Configura a tela e o texto
  tft.setRotation(1); // Define a rotação da tela para horizontal
  tft.fillScreen(BLACK); // Define a cor da tela em preto
  tft.setTextColor(YELLOW, BLACK); // Texto em amarelo
  tft.setTextSize(2); // Tamanho do texto
  tft.setCursor(30, 5); // Posição do texto
  tft.print("Controle de Presenca"); // Imprime o texto "Controle de Presenca" na tela

  // Configura outro texto
  tft.setTextSize(2); // Tamanho do texto
  tft.setCursor(30, 40); // Posição do texto
  tft.setTextColor(GREEN, BLACK); // Texto em verde
  tft.print("Aproxime o cartao..."); // Imprime o texto "Aproxime o cartao..." na tela
}

void loop() {
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) { // Verifica se o cartão RFID está no sensor e se ele existe no banco de dados
    String uidString = ""; // Armazena o valor em string do UID
    // O laço "for" transforma os bytes do cartão RFID em hexadecimal para tratar no "Node.js"
    for (byte i = 0; i < mfrc522.uid.size; i++) {
      uidString += String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
      uidString += String(mfrc522.uid.uidByte[i], HEX);
      if (i < mfrc522.uid.size - 1) uidString += " ";
    }
    uidString.toUpperCase(); // Transforma a uidString em CAIXA ALTA

    Serial.println(uidString); // envia UID para Node.js

    // Mostra mensagem temporária no display
    tft.fillRect(0, 80, 300, 160, BLACK); // Enquadra o texto
    tft.setTextColor(YELLOW, BLACK); // Texto em Amarelo
    tft.setCursor(30, 80); // Posição do texto
    tft.print("Lendo cartão..."); // Imprime o texto "Lendo cartão..." na tela

    // Espera o Node.js enviar o nome do aluno
    unsigned long start = millis(); // Variavel chamada "start" que armazena uma função que conta os milisegundos a partir do momento que o cartão é lido
    alunoAtual = ""; // Limpa o valor do nome do aluno para reatribuir um novo valor
    // Função para atribuir valor na variavel que armazena o nome do aluno
    while (alunoAtual == "" && millis() - start < 5000) { // Espera o servidor devolver a requisição do nome em até 5 segundos 
      if (Serial.available()) {
        String temp = Serial.readStringUntil('\n'); // Variável temporária que armazena o nome do aluno
        temp.trim(); // Limpa espaços indesejaveis no nome do aluno
        alunoAtual = temp; // Atribui o valor da variavel temporaria na variavel global que armazena o nome do aluno atual
      }
    }

    // Mostra resultado no LCD
    tft.fillRect(0, 80, 300, 160, BLACK); // Enquadra texto
    tft.setTextColor(alunoAtual != "" ? GREEN : RED, BLACK); // Se o nome do aluno existe o texto vai ser verde, se não vai ser vermelho
    tft.setCursor(30, 80); // Posição do texto
    if (alunoAtual != "") { 
      tft.print(alunoAtual); // Imprime o nome do aluno caso ele exista
    } else {
      tft.print("Aluno nao cadastrado!"); // Se não existe imprime o texto "Aluno nao cadastrado!"
    }

    // Finaliza comunicação RFID
    mfrc522.PICC_HaltA();
    mfrc522.PCD_StopCrypto1();
  }

  delay(500);
}