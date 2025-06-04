import { principalCharacter } from "./entidades/fighters/principalCharacter.js";
import { Cenario } from "./entidades/cenario.js";

let canvas, context;
let entidades = [];
let previousTime = 0;
let jogoIniciado = false;

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const startScreen = document.getElementById("start-screen");

  canvas = document.querySelector("canvas");
  context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Simula uma tela de loading por 5 segundos
  setTimeout(() => {
    loadingScreen.style.display = "none";
    startScreen.style.display = "flex";
  }, 5000);

  // Aguarda qualquer tecla para iniciar
  window.addEventListener("keydown", iniciarJogo);
});

function iniciarJogo() {
  if (jogoIniciado) return; // impede múltiplos inícios

  jogoIniciado = true;
  document.getElementById("start-screen").style.display = "none";

  // Remover o event listener para evitar chamadas duplicadas
  window.removeEventListener("keydown", iniciarJogo);

  // Criação dos objetos só ocorre agora
  const player = new principalCharacter({
    position: { x: 200, y: 350 }
  });

  entidades = [
    new Cenario(),
    player
  ];

  previousTime = performance.now();
  requestAnimationFrame(frame);
}

function frame(currentTime) {
  const secondsPassed = (currentTime - previousTime) / 1000;
  previousTime = currentTime;

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (const entidade of entidades) {
    entidade.update(secondsPassed, context);
  }

  for (const entidade of entidades) {
    entidade.draw(context);
  }

  requestAnimationFrame(frame);
}