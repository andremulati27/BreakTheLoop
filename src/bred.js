const principal = document.querySelector('img[alt="principal"]');
const position = {
    x:110,
    y:580,
};

let velocidade = 2;

export function updatePrincipal(context){
    position.x += velocidade;

    if(position.x > context.canvas.width - principal.width || position.x < 0){
        velocidade = -velocidade;
    }
}

export function drawPrincipal(context){
    context.drawImage(principal, position.x, position.y);
}
