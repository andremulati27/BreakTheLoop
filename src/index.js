import { principalCharacter } from "./entidades/fighters/principalCharacter.js";
//import { Lingui } from "./entidades/fighters/lingui.js"
import { Cenario } from "./entidades/cenario.js";

const janelaDoJogo = {
    WIDTH: 1536,
    HEIGHT: 1024,
}
window.addEventListener('load', function(){
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    canvas.width = janelaDoJogo.WIDTH;
    canvas.height = janelaDoJogo.HEIGHT;

    const entidades = [
        new Cenario(),
        new principalCharacter(190,600, 300),
        //new Lingui(80,600, -300),
    ];
    let previousTime = 0;
    let secondsPassed = 0;

    function frame (time) {

        window.requestAnimationFrame(frame);
        secondsPassed = (time - previousTime) / 1000;
        previousTime = time;
        
        for (const entidade of entidades){
            entidade.update(secondsPassed, context);
        }
        for (const entidade of entidades){
            entidade.draw(context);
        }
    }
    window.requestAnimationFrame(frame);
});

