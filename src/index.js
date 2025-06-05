import { principalCharacter } from "./entidades/fighters/principalCharacter.js";
import { Cenario } from "./entidades/cenario.js";
import { Vilao2 } from "./entidades/fighters/vilao2.js"; 
import { Movimentos } from "./constantes/movimento.js";


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

    const keys = {
        a: {
            pressed:false
        },
        d: {
            pressed:false
        },
        space: {
            pressed:false
        },
        f:{
            pressed:false
        },
        e:{
            pressed:false
        }
    }

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
        position: { x: 200, y: 450 },
        velocidade: 0
    });

    const vilao2 = new Vilao2({ // ✅ Instância do vilão
        position: { x: canvas.width - 500, y: 450 },
        velocidade: 0
    });
    const entidades = [
        new Cenario(),
        player,
        vilao2 
    ];
    new Movimentos(player, keys);
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

        if(keys.a.pressed){
            player.switchSprite('run');
            player.flip = true;
            player.velocidade = -200;
        } else if (keys.d.pressed) {
            player.switchSprite('run');
            player.flip = false;
            player.velocidade = +200;
        } else if (keys.space.pressed){
            player.switchSprite('jump');
            player.position()
        } 
        else {
            player.velocidade = 0;
        }

        if (keys.a.pressed || keys.d.pressed){
            player.switchSprite('run');
        }else if(keys.f.pressed){
            player.switchSprite('attack');
        }else{
            player.switchSprite('idle');
        }

        for (const entidade of entidades) {
            entidade.update(secondsPassed, context);
        }

        for (const entidade of entidades) {
            entidade.draw(context);
        }
        
    }

    window.requestAnimationFrame(frame);
});


