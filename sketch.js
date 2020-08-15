const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var engine,world  

var maxDrops = 100;

var drops=[]

function preload(){
    thunder1 = loadImage("batmanbegins/1.png")
    thunder2 = loadImage("batmanbegins/2.png")
    thunder3 = loadImage("batmanbegins/3.png")
    thunder4 = loadImage("batmanbegins/4.png")

}

function setup(){
   createCanvas(400,400)
   engine = Engine.create();
  world = engine.world;
   umbrella = new Umbrella(187,263)

   for(var i = 0; i<maxDrops; i++){
      drops.push(new Drops(random(0,400),random(0,400)))
   }
    
}

function draw(){
   background(0)
   Engine.update(engine);

   for(var i =0; i<maxDrops; i++){
   drops[i].display();
   drops[i].update();
   }
   umbrella.display();

   if(frameCount%100===0){
    thunder = createSprite(random(200,1000),random(200,300))
      var rand = Math.round(random(1,4));
      switch(rand){
          case 1: thunder.addImage("thunder1",thunder1);
          break;
          case 2: thunder.addImage("thunder2", thunder2);
          break;
          case 3: thunder.addImage("thunder3", thunder3);
          break;
          case 4: thunder.addImage("thunder4", thunder4);
          break;
         
      }
      thunder.lifetime = 6;
   }
    drawSprites();
}   

