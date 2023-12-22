// 3
class Cannon {
    // 3
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // 5
        this.angle = angle;

}
// 4
display( ){

    // 8. Mude o ângulo de cannon para cima quando a tecla de seta para a esquerda for 
    // pressionada e para baixo quando a tecla de seta para direita for pressionada
    if (keyIsDown(RIGHT_ARROW) && this.angle< 0.35){
       this.angle +=0.02;

    }
    
    if (keyIsDown(LEFT_ARROW)&& this.angle >  -1.45){
      this.angle -=0.02;
      
    }


    


    fill("#676e6a");
    // 6
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10, -20, this.width, this.height);
    pop();
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    noFill();
  }
}