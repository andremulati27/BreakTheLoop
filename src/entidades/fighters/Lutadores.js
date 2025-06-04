export class lutadores {
    constructor(nome,x,y,velocidade){
        this.nome = nome;
        this.image = new Image();
        this.posicao = {x, y};
        this.velocidade = velocidade;
    }
    update(secondsPassed, context){
        this.posicao.x += this.velocidade * secondsPassed;

        if(this.posicao.x > context.canvas.width - this.image.width || this.posicao.x < 0){
            this.velocidade = -this.velocidade;
        }
    }

    draw(context){
        context.drawImage(this.image, this.posicao.x, this.posicao.y);
    }
}