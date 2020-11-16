var back_IMG;
var play_icon;
var coins =500
var diamonds = 10
var gameState = "HOME_SCREEN"


function preload(){
  back_IMG = loadImage("backImages/tower.JPG")
  play_IMG = loadImage("playicon.png")
  rotate_coin = loadAnimation("coinsImages/coin1.png","coinsImages/coin2.png","coinsImages/coin3.png","coinsImages/coin4.png","coinsImages/coin5.png","coinsImages/coin6.png")
  diamondIMG = loadImage("coinsImages/blueDiamond.png")
  levelicon = loadImage("backImages/rect2t.png")
  level_backIMG = loadImage("backImages/checkerboard_green.png")
}
function setup() {
  createCanvas(1030,600);
  play_icon = createSprite(730,300,80,80)
  play_icon.addImage("play",play_IMG)
  play_icon.scale = 0.9
  rotatingCoin = createSprite(700,45)
  rotatingCoin.addAnimation("rotate",rotate_coin)
  rotatingCoin.scale = 0.09
  diamondSprite = createSprite(37,50)
  diamondSprite.addImage("img",diamondIMG)
  diamondSprite.scale = 0.1

  level1icon = createSprite(250,130)
  level1icon.addImage("r",levelicon)
  level1icon.visible = false
  level1icon.scale=0.6

  level2icon = createSprite(250,230)
  level2icon.addImage("r",levelicon)
  level2icon.visible = false
  level2icon.scale=0.6

  level3icon = createSprite(250,330)
  level3icon.addImage("r",levelicon)
  level3icon.visible = false
  level3icon.scale=0.6

  level4icon = createSprite(250,430)
  level4icon.addImage("r",levelicon)
  level4icon.visible = false
  level4icon.scale=0.6

  level5icon = createSprite(250,530)
  level5icon.addImage("r",levelicon)
  level5icon.visible = false
  level5icon.scale=0.6

  level6icon = createSprite(800,130)
  level6icon.addImage("r",levelicon)
  level6icon.visible = false
  level6icon.scale=0.6

  level7icon = createSprite(800,230)
  level7icon.addImage("r",levelicon)
  level7icon.visible = false
  level7icon.scale=0.6

  level8icon = createSprite(800,330)
  level8icon.addImage("r",levelicon)
  level8icon.visible = false
  level8icon.scale=0.6

  level9icon = createSprite(800,430)
  level9icon.addImage("r",levelicon)
  level9icon.visible = false
  level9icon.scale=0.6

  level10icon = createSprite(800,530)
  level10icon.addImage("r",levelicon)
  level10icon.visible = false
  level10icon.scale=0.6
  
}
function draw() {
  
  if(gameState === "HOME_SCREEN"){
    background(back_IMG);  
  fill("orange")
  textSize(90)
  textFont()
  text("T.O.W.E.R.",290,160)
  
  play_icon.visible = true;
  if(mousePressedOver(play_icon)){
    gameState = "LEVEL_CHOOSE"
    play_icon.visible = false
  }
  }
  if (gameState=== "LEVEL_CHOOSE"){
    background(back_IMG);  
    level1icon.visible = true
    level2icon.visible = true
level3icon.visible = true
level4icon.visible = true
level5icon.visible = true
level6icon.visible = true
level7icon.visible = true
level8icon.visible = true
level9icon.visible = true
level10icon.visible = true

fill("black")
    textSize(30)
    text("LEVEL 1",150,130)

if(mousePressedOver(level1icon)){
  gameState = "LEVEL1"
}

if(mousePressedOver(level2icon)){
  gameState = "LEVEL2"
}

if(mousePressedOver(level3icon)){
  gameState = "LEVEL3"
}

if(mousePressedOver(level4icon)){
  gameState = "LEVEL4"
}

if(mousePressedOver(level5icon)){
  gameState = "LEVEL5"
}

if(mousePressedOver(level6icon)){
  gameState = "LEVEL6"
}

if(mousePressedOver(level7icon)){
  gameState = "LEVEL7"
}

if(mousePressedOver(level8icon)){
  gameState = "LEVEL8"
}

if(mousePressedOver(level9icon)){
  gameState = "LEVEL9"
}

if(mousePressedOver(level10icon)){
  gameState = "LEVEL10"
}
    
  }

  if(gameState==="LEVEL1"){
    background(level_backIMG)
    console.log("LEVEL 1")
  }
  fill("")
  rect(680,25,150,40)
  textSize(21)
  fill("gold")
  text("  "+coins,720,55)
  fill("grey")
  rect(20,30,140,40)
  fill("#7DF9FF")
  text("   "+diamonds,40,55)
  noFill();
  drawSprites();
}