class CannonBall {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.r = 40;
//   2. Crie o corpo circular com os parâmetros.
      this.body = Bodies.circle(x, y, this.r, options);
// 3. Adicione a imagem das balas de canhão seguindo o mesmo processo usado na aula passada para adicionar a imagem da torre. 
      this.image = loadImage("./assets/cannonball.png");
      World.add(world, this.body);
    }
//6. Adicione a função para setVelocity() e defina a velocidade x e y de acordo com os parâmetros. E após isso, teste o projeto   
    shoot() {
        // 8. Use a função predefinida para definir a velocidade e multiplicar o ângulo
      var velocity = p5.Vector.fromAngle(cannon.angle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
    //   3
      image(this.image, 0, 0, this.r, this.r);
      pop();
  
      }
    }
  
  