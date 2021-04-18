class Rubber {
  constructor(x, y, r) {
    var options = {
        'restitution':1,
        'friction':4,
        'density':1
    }
    this.r = r;
    this.body = Bodies.circle(x, y, (this.r)/2, options);
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("white")
    fill("purple");
    ellipse(0, 0, this.r);
    pop();
  }
};

