import { drawPrincipal, updatePrincipal} from "./bred.js";
import { drawBackground } from "./cenario.js";

const janelaDoJogo = {
    WIDTH: 1536,
    HEIGHT: 1024,
}
window.onload = function(){
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    canvas.width = janelaDoJogo.WIDTH;
    canvas.height = janelaDoJogo.HEIGHT;
    function frame() {
        updatePrincipal(context);
        
        drawBackground(context);
        drawPrincipal(context);

        window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
}

