class Cirlce {
    constructor(x, y, radius) {
      var options = {
        'restitution':0,
        'friction':20,
        'density':12
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("blue")
      fill("pink");
      ellipse(0, 0, this.radius);
      pop();
    }
  };