import { principalCharacter } from "./entidades/fighters/principalCharacter.js";
import { Cenario } from "./entidades/cenario.js";
import { Vilao2 } from "./entidades/fighters/vilao2.js"; // ✅ Importação do vilão

window.addEventListener('load', function () {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const player = new principalCharacter({
        position: { x: 200, y: 450 }
    });

    const vilao2 = new Vilao2({ // ✅ Instância do vilão
        position: { x: canvas.width -500, y: 450 },
        velocidade: -100
    });

    const entidades = [
        new Cenario(),
        player,
        vilao2 // ✅ Adicionado ao array de entidades
    ];

    let previousTime = 0;

    function frame(currentTime) {
        window.requestAnimationFrame(frame);

        const secondsPassed = (currentTime - previousTime) / 1000;
        previousTime = currentTime;

        context.clearRect(0, 0, canvas.width, canvas.height);

        for (const entidade of entidades) {
            entidade.update(secondsPassed, context);
        }

        for (const entidade of entidades) {
            entidade.draw(context);
        }
    }

    window.requestAnimationFrame(frame);
});