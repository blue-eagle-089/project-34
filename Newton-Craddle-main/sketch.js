
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;



function setup() {

canvas=createCanvas(windowWidth/1,windowHeight/1)
engine = Engine.create();
world = engine.world;

let canvasmouse=Mouse.create(canvas.elt);
canvasmouse.pixelRatio=pixelDensity();

let options={
	mouse:canvasmouse
};

mConstraint=MouseConstraint.create(engine,options)
World.add(world,mConstraint)

//Create the Bodies Here.
bob1=new  Pendulum(300,500,"#fff")
bob2=new  Pendulum(350,500,"#fff")
bob3=new  Pendulum(400,500,"#fff")
bob4=new  Pendulum(450,500,"#fff")
bob5=new  Pendulum(500,500,"#fff")

sling1=new  Sling(bob1.body,{x:300,y:180})
sling2=new  Sling(bob2.body,{x:350,y:180})
sling3=new  Sling(bob3.body,{x:400,y:180})
sling4=new  Sling(bob4.body,{x:450,y:180})
sling5=new  Sling(bob5.body,{x:500,y:180})



  
}


function draw() {
 
  background(0)
  Engine.update(engine);
 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 sling1.display();
 sling2.display();
 sling3.display();
 sling4.display();
 sling5.display();

 
 drawSprites();


}



