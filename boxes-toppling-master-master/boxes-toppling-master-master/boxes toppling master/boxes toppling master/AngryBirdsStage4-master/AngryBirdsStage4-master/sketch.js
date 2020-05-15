const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hitter, catapult;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(200,225,130,20)
    
    log1 = new Toppling(810,210,300, PI/2);
    log2 =  new Toppling(810,100,300, PI/2);
    log3 = new Toppling(810,75,250,PI/2);
    log4 = new Toppling(810,45,170,PI/2);
    log5 = new Toppling(810,10,100,PI/2);
    

    hitter = new Hitter(100,100);
     catapult= new Catapult(hitter.body,{x:200, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    hitter.display();
    catapult.display(); 
    ground2.display();   
}

function mouseDragged(){
    Matter.Body.setPosition(hitter.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult.fly();
}