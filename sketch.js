const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var board;
var arrow;
var angle=30;


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  archerimage = loadImage("./assets/playerArcher.png");
  boardimage = loadImage("./assets/board.png");
  arrowimage = loadImage("./assets/arrow.png");

}
 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options={
    isStatic:true
  };

  //create player base body

  playerBase=Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase);

  //create player body

  player=Bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
  World.add(world,player)

  //for player archer

  playerArcher=Bodies.rectangle(260,playerBase.position.y - 160,100,180,options);
  World.add(world,playerArcher)

  //for board

  board=Bodies.rectangle(1400,160,100,190,options);
  World.add(world,board)

  //for arrow
  //arrow=Bodies.rectangle(400,160,100,10,options);
  //World.add(world,arrow)



}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  //show the player image using image() function
  image(playerimage,player.position.x,player.position.y,50,180);


  //show the playerbase image using image() function
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);

  //image of player archer
  push();
  ellipseMode(CENTER)
  image(archerimage,playerArcher.position.x,playerArcher.position.y,100,180);
  pop();

  //image of board
  image(boardimage,board.position.x,board.position.y,100,190);

  //image of arrow
  // image(arrowimage,arrow.position.x,arrow.position.y,100,190);
 

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100); 
}
