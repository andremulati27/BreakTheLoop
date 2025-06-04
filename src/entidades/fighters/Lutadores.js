import { Sprite } from "../Sprite.js";

export class lutadores extends Sprite {
    constructor({nome, position, imageSrc, scale = 1, framesMax = 1, offset = { x: 0, y: 0 }, velocidade = 100}){
        super({ position, imageSrc, scale, framesMax, offset})

        this.nome = nome;
        this.velocidade = velocidade;
    }
    update(secondsPassed, context){
        this.position.x += this.velocidade * secondsPassed;

        if(this.position.x > context.canvas.width - this.image.width || this.position.x < 0){
            this.velocidade = -this.velocidade;
        }
    }

    draw(context){
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}