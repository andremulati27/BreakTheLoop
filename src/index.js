const janelaDoJogo = {
    WIDTH: 384,
    HEIGHT: 224,
}
window.onload = function(){
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    canvas.width = janelaDoJogo.WIDTH;
    canvas.height = janelaDoJogo.HEIGHT;

    const [principal,background] = document.querySelectorAll('img');

    const position = {
        x:janelaDoJogo.WIDTH / 2 - principal.width / 2,
        y:110,
    };

    let velocidade = 1;

    function frame() {
        position.x += velocidade;

        if(position.x > janelaDoJogo.WIDTH - principal.width || position.x < 0){
            velocidade = -velocidade;
        }

        //context.clearRect(0,0,janelaDoJogo.WIDTH, janelaDoJogo.HEIGHT);
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        //context.strokeStyle = 'yellow';
        //context.moveTo(0,0);
        //context.lineTo(janelaDoJogo.WIDTH, janelaDoJogo.HEIGHT);
        //context.moveTo(janelaDoJogo.WIDTH, 0);
        //context.lineTo(0, janelaDoJogo.HEIGHT);
        //context.stroke();

        context.drawImage(principal, position.x, position.y);
        console.log(principal.width, principal.height)

        window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
    
}

