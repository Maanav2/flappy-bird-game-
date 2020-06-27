var bird,birdImg
var score,lostImg;
var pipeGroup ,pipe2Group,barGroup,pipeImg,pipe2Img;
var gameState,PLAY,END;
var scs,flys;
var bg,bgImg;
var lost;


function preload(){
  birdImg = loadImage("bird.png");
  pipeImg = loadImage("pipeNorth.png");
  pipe2Img = loadImage("pipeSouth.png");
 bgImg = loadImage("bg.png");
 lostImg = loadImage("gameOver.png");
 

}

function setup() {
  createCanvas(800,400);
 
  pipeGroup = new Group();
  pipe2Group = new Group();
  barGroup = new Group();
  
  
  bg = createSprite(350,100,800,400);
  bg.addImage("bg",bgImg);
  bg.scale = 2;
  bird = createSprite(200,200,30,30);
  bird.addImage("bird",birdImg);
  score=0;
  PLAY=1;
  END=0;
  gameState=PLAY;
  lost = createSprite(400,200,30,30);
  lost.addImage("lost",lostImg);
  lost.visible=false;
  
 
 
  
}

function draw() {
  background(0);  
  drawSprites();
 
  
 
  if(gameState === PLAY){
    spawn();
    if(keyDown(32)){
      bird.velocityY = -6;
    }
    bird.velocityY = bird.velocityY+0.8;
    textSize(40);
    textStyle(BOLD);
    text("score:"+score,650,50);
  

    if(pipeGroup.isTouching(bird)){
      gameState=END;
    }
    if(pipe2Group.isTouching(bird)){
      gameState=END;
    }
    scorep();
    if(bird.y>400){
      gameState=END; 
      textSize(25);
              
    }
    spawn();  
  }

  if(gameState === END){
    pipeGroup.setVelocityXEach(0);
    pipe2Group.setVelocityXEach(0);
    textSize(25);
    text("Press Enter to Reset the game",200,100);
    lost.visible=true;
    pipeGroup.setLifetimeEach(-1);
    pipe2Group.setLifetimeEach(-1);
 
  }
  if(keyDown(13)){
    reset();
  }

 
  
  
  
}

function spawn(){
 
  
    if(frameCount%60 === 0){
      var bar = createSprite(500,200,30,200);
      bar.velocityX=-2;
      bar.visible = false;
      barGroup.add(bar);
      var pipe = createSprite(500,random(-100,50),30,30);
      pipe.velocityX=-2;
      pipe.lifetime=250;
      pipe.addImage(pipeImg);
      pipe.debug = true;
      pipeGroup.add(pipe);
  
      var pipe2 = createSprite(500,random(550,450),30,30);
      pipe2.velocityX=-2;
      pipe2.lifetime=250;
      pipe2.addImage(pipe2Img);
      pipe2.debug = true;
      pipe2Group.add(pipe2);

     
     
    }
 






    }

   /* function isTouching(pipe,pipe2){
      if(pipe2.width/2+pipe.width/2>pipe.x-pipe2.x && 
        pipe2.width/2+pipe.width/2>pipe2.x-pipe.x &&
        pipe2.height/2+pipe.height/2>pipe.y-pipe2.y &&
          pipe2.height/2+pipe.height/2>pipe2.y-pipe.y){
         return true;
        }
        else{
         return false;
        }
    }*/

    function reset(){
      bird.x=200;
      bird.y=200;

      gameState = PLAY;
      lost.visible=false;
      pipeGroup.destroyEach();
      pipe2Group.destroyEach();

    }

    function scorep(){
      for(var i=0;i<barGroup.length;i=i+1){
        var br = barGroup.get(i);
        if(br.x===bird.x){
          score=score+0.5
          console.log("abcd");       
         }
      }
      
     
    }