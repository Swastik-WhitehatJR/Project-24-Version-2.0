const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variables for engine and world
var engine, world;

//variables for glass objects
var glass1, glass2, glass3, glass4;

//variables for iron objects
var iron1, iron2, iron3, iron4, iron5, iron6, iron7, iron8;

//variables for stone objects
var stone1, stone2, stone3;

//variables for rubber objects
var rubber1, rubber2, rubber3, rubber4, rubber5, rubber6;

//variables for hammer objects
var hammer1, hammerImg, hammerSprite;

//variables for images
var bgImg;

//variables for walls
var left_wall, top_wall, right_wall;

var c1, c2, c3, c4, c5;



function preload() {
    bgImg = loadImage("bgImg.png");
}



function setup() {
    createCanvas(1800, 900);

    engine = Engine.create();
    world = engine.world;



    iron1 = new Iron(500, 50, 40, 30);
    iron2 = new Iron(490, 100, 40, 30);
    iron3 = new Iron(350, 179, 40, 30);
    iron4 = new Iron(600, 256, 40, 30);
    iron5 = new Iron(100, 397, 40, 30);
    iron6 = new Iron(450, 85, 40, 30);
    iron7 = new Iron(900, 560, 40, 30);
    iron8 = new Iron(400, 500, 40, 30);


    stone1 = new Stone(625, 100, 50, 70);
    stone2 = new Stone(430, 100, 50, 70);
    stone3 = new Stone(130, 100, 50, 70);


    glass1 = new Glass(140, 20, 80, 100);
    glass2 = new Glass(240, 269, 80, 100);
    glass3 = new Glass(440, 82, 80, 100);
    glass4 = new Glass(600, 82, 80, 100);


    rubber1 = new Rubber(840, -50, 30);
    rubber2 = new Rubber(740, -100, 30);
    rubber3 = new Rubber(640, -60, 30);
    rubber4 = new Rubber(540, -10, 30);
    rubber5 = new Rubber(440, -7, 30);
    rubber6 = new Rubber(340, -25, 30);


    hammer1 = new Hammer(200, 0, 120, 20);


    box1 = new Box(1700, 320, 70, 70);
    box2 = new Box(1600, 320, 70, 70);
    box3 = new Box(1500, 240, 70, 70);
    box4 = new Box(1400, 240, 70, 70);

    pig1 = new Pig(1300, 350);
    log1 = new Log(1200, 260, 300, PI / 2);


    pig3 = new Pig(1250, 220);

    box5 = new Box(200, 160, 70, 70);


    ground = new Ground(width / 2, 900, width, 15);

    c1 = new Cirlce(700, 600, 50);
    c2 = new Cirlce(500, 500, 50);
    c3 = new Cirlce(100, 300, 50);
    c4 = new Cirlce(200, 200, 50);
    c5 = new Cirlce(600, 600, 50);


    var no_gravity = {
        isStatic: true
    }


    left_wall = Bodies.rectangle(1, 900, 30, 3200, no_gravity);
    World.add(world, left_wall);

    top_wall = Bodies.rectangle(1, 1, 3200, 30, no_gravity);
    World.add(world, top_wall);

    right_wall = Bodies.rectangle(1800, 900, 30, 3200, no_gravity);
    World.add(world, right_wall);

}

function draw() {
    background('lightblue');

    background(bgImg);

    Engine.update(engine);

    ground.display();

    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    iron5.display();
    iron6.display();
    iron7.display();
    iron8.display();

    c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display()

    stone1.display();
    stone2.display();
    stone3.display();

    glass1.display();
    glass2.display();
    glass3.display();
    glass4.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();

    hammer1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig3.display();
}