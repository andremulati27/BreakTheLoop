import { lutadores } from "./Lutadores.js";

export class principalCharacter extends lutadores {
    constructor(x,y,velocidade){
        super('Bred',x,y,velocidade);

        this.image = document.querySelector('img[alt="principal"]');
    }
}
