class Sprite {
    constructor({ position, imageSrc, scale = 1, framesMax = 1 }){
        this.position = position;
        this.width = 50;
        this.height = 150;
        this.image = new image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.framesMax = framesMax;
        this.frameCurrent = 0;

        }
    draw(context){
        context.drawImage(
            this.image,
            this.frameCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height, 
            this.position.x,
            this.position.y,
            this.image.width * this.scale,
            this.image.height * this.scale
        )
    }
    update(){
        this.draw()
    }
}