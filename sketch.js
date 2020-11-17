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
 // levelicon = loadImage("backImages/rect2t.png")
  level_backIMG = loadImage("backImages/checkerboard_green.png")
}
function setup(){
  createCanvas(1030,600);
  play_icon = createSprite(730,300,80,80)
  play_icon.addImage("play",play_IMG)
  play_icon.scale = 0.9
  rotatingCoin = createSprite(900,20)
  rotatingCoin.addAnimation("rotate",rotate_coin)
  rotatingCoin.scale = 0.09
  diamondSprite = createSprite(17,18)
  diamondSprite.addImage("img",diamondIMG)
  diamondSprite.scale = 0.1

  this.startButton1 = createButton("ENTER LEVEL 1")
this.startButton1.mousePressed(()=>{
  this.startButton1.hide();
})

this.startButton2 = createButton("ENTER LEVEL 2")
this.startButton2.mousePressed(()=>{
  this.startButton2.hide();
})
this.startButton2.hide();
  
this.startButton3 = createButton("ENTER LEVEL 3")
this.startButton3.mousePressed(()=>{
  this.startButton3.hide();
})

this.startButton4 = createButton("ENTER LEVEL 4")
this.startButton4.mousePressed(()=>{
  this.startButton4.hide();
})

this.startButton5 = createButton("ENTER LEVEL 5")
this.startButton5.mousePressed(()=>{
  this.startButton5.hide();
})

this.startButton6 = createButton("ENTER LEVEL 6")
this.startButton6.mousePressed(()=>{
  this.startButton6.hide();
})

this.startButton7= createButton("ENTER LEVEL 7")
this.startButton7.mousePressed(()=>{
  this.startButton7.hide();
})

this.startButton8 = createButton("ENTER LEVEL 8")
this.startButton8.mousePressed(()=>{
  this.startButton8.hide();
})

this.startButton9 = createButton("ENTER LEVEL 9")
this.startButton9.mousePressed(()=>{
  this.startButton9.hide();
})

this.startButton10 = createButton("ENTER LEVEL 10")
this.startButton10.mousePressed(()=>{
  this.startButton10.hide();
})


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
    gameState = "LEVEL1"
    play_icon.visible = false
  }
  }
  if (gameState=== "LEVEL_CHOOSE"){
    background(back_IMG);  


/*if(mousePressedOver(level1icon)){
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
*/
    
  }

  if(gameState==="LEVEL1"){
    background(level_backIMG)
    this.startButton1.position(400,300)
    this.startButton1.style('width', '200px')
    this.startButton1.style('height', '30')
    this.startButton1.style('background', 'skyblue');
    this.startButton1.style('color', 'darkblue');
    this.startButton1.style('font', 'Courier New');

  }

  if(gameState==="LEVEL2"){
    background(level_backIMG)
    this.startButton2.position(400,300)
    this.startButton2.style('width', '200px')
    this.startButton2.style('height', '30')
    this.startButton2.style('background', 'skyblue');
    this.startButton2.style('color', 'darkblue');
    this.startButton2.style('font', 'Courier New');

  }

  if(gameState==="LEVEL3"){
    background(level_backIMG)
    this.startButton3.position(400,300)
    this.startButton3.style('width', '200px')
    this.startButton3.style('height', '30')
    this.startButton3.style('background', 'skyblue');
    this.startButton3.style('color', 'darkblue');
    this.startButton3.style('font', 'Courier New');

  }

  if(gameState==="LEVEL4"){
    background(level_backIMG)
    this.startButton4.position(400,300)
    this.startButton4.style('width', '200px')
    this.startButton4.style('height', '30')
    this.startButton4.style('background', 'skyblue');
    this.startButton4.style('color', 'darkblue');
    this.startButton4.style('font', 'Courier New');

  }

  if(gameState==="LEVEL5"){
    background(level_backIMG)
    this.startButton5.position(400,300)
    this.startButton5.style('width', '200px')
    this.startButton5.style('height', '30')
    this.startButton5.style('background', 'skyblue');
    this.startButton5.style('color', 'darkblue');
    this.startButton5.style('font', 'Courier New');

  }

  if(gameState==="LEVEL6"){
    background(level_backIMG)
    this.startButton6.position(400,300)
    this.startButton6.style('width', '200px')
    this.startButton6.style('height', '30')
    this.startButton6.style('background', 'skyblue');
    this.startButton6.style('color', 'darkblue');
    this.startButton6.style('font', 'Courier New');

  }

  if(gameState==="LEVEL7"){
    background(level_backIMG)
    this.startButton7.position(400,300)
    this.startButton7.style('width', '200px')
    this.startButton7.style('height', '30')
    this.startButton7.style('background', 'skyblue');
    this.startButton7.style('color', 'darkblue');
    this.startButton7.style('font', 'Courier New');

  }

  if(gameState==="LEVEL8"){
    background(level_backIMG)
    this.startButton8.position(400,300)
    this.startButton8.style('width', '200px')
    this.startButton8.style('height', '30')
    this.startButton8.style('background', 'skyblue');
    this.startButton8.style('color', 'darkblue');
    this.startButton8.style('font', 'Courier New');

  }

  if(gameState==="LEVEL9"){
    background(level_backIMG)
    this.startButton9.position(400,300)
    this.startButton9.style('width', '200px')
    this.startButton9.style('height', '30')
    this.startButton9.style('background', 'skyblue');
    this.startButton9.style('color', 'darkblue');
    this.startButton9.style('font', 'Courier New');

  }

  if(gameState==="LEVEL10"){
    background(level_backIMG)
    this.startButton10.position(400,300)
    this.startButton10.style('width', '200px')
    this.startButton10.style('height', '30')
    this.startButton10.style('background', 'skyblue');
    this.startButton10.style('color', 'darkblue');
    this.startButton10.style('font', 'Courier New');

  }

  fill("")
  rect(880,0,150,40)
  textSize(21)
  fill("gold")
  text("  "+coins,920,27)
  fill("grey")
  rect(0,0,140,40)
  fill("#7DF9FF")
  text("   "+diamonds,20,27)
  noFill();
  drawSprites();
}

function hide(){
  this.startButton.hide();
}