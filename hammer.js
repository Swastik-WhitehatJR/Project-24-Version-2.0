class Hammer {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false, 
          'restitution':0.3,
          'friction':1,
          'density':10
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("blue")
        fill("pink");
        rect(0, 0, this.width, this.height);
        pop();
    }
};