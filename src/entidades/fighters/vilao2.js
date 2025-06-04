import { lutadores } from "./Lutadores.js";

export class Vilao2 extends lutadores {
    constructor({ position, velocidade }) {
        super({
            nome: "Vilao2",
            position,
            imageSrc: "../../../images/Homeless_2/Attack_2.png", 
            scale: 3,
            framesMax: 4,
            offset: { x: 0, y: 0 },
            velocidade
        });
        this.flip = velocidade < 0;
    }

    update(secondsPassed, context) {
        super.update(secondsPassed, context);
    }
}
