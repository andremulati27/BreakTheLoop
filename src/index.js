import { principalCharacter } from "./entidades/fighters/principalCharacter.js";
import { Cenario } from "./entidades/cenario.js";
import { Vilao2 } from "./entidades/fighters/vilao2.js"; 
import { Movimentos } from "./constantes/movimento.js";

window.addEventListener('load', function () {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
    let previousTime = 0;

    function frame(currentTime) {
        window.requestAnimationFrame(frame);

        const secondsPassed = (currentTime - previousTime) / 1000;
        previousTime = currentTime;

        context.clearRect(0, 0, canvas.width, canvas.height);

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

