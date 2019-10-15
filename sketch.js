let LEFT = -1;
let RIGHT = 1;
let UP = -1;
let DOWN = 1;
let GRAVITY = 0.5;

let end = false;
let mousePosition = false;
let cubes = [];
let score = 0;
let bestScore = 0;
let nbCubes = 1;
let startSpeed = 20;
let speedUp = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fl = new Floor();
  trex = new Trex();
  counter = new Counter();

  initCubes(nbCubes);
}

function draw() {
  background(255);
  fl.render();
  trex.render();
  counter.render();

  if(!end){
    counter.update();
    trex.update();
    for (var i = cubes.length - 1; i >= 0; i--) {
      if(trex.hits(cubes[i])){
        end = true
      }

      cubes[i].render();
      cubes[i].update();
      if(cubes[i].offscreen()){
        cubes.splice(i, 1);
        initCubes(nbCubes);
      }
    }

  }else{
    showEnd();
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    if(!trex.jump){
      trex.vel.y = UP*trex.speed;
    }
  }
}

function showEnd(){
  for (var i = 0; i < cubes.length; i++) {
    cubes[i].render();
  }

  score = counter.count;
  if(score > bestScore){
    bestScore = score;
  }
  var recth = 100;
  var rectw = 300;
  var rectx = windowWidth/2;
  var recty = windowHeight/2;

  push();
  stroke(0);
  strokeWeight(1);
  fill(200);
  rectMode(CENTER);
  if(mouseX > rectx - rectw/2 && mouseX < rectx + rectw/2){
    if(mouseY > recty - recth/2  && mouseY < recty + recth/2){
      stroke(0);
      strokeWeight(2);
      fill(155);
      mousePosition = true;
    }else{
      mousePosition = false;
    }

  }
  rect(rectx,recty,rectw,recth);

  stroke(0);
  strokeWeight(0);
  fill(0);
  textSize(32);
  textAlign(CENTER);
  text("Restart", windowWidth/2, windowHeight/2);
  textSize(16);
  text("Your score:", windowWidth/2 - 0.3*rectw, windowHeight/2 + 0.35*recth);
  text(score, windowWidth/2 - 0.1*rectw, windowHeight/2 + 0.35*recth);
  text("Best score:", windowWidth/2 + 0.2*rectw, windowHeight/2 + 0.35*recth);
  text(bestScore, windowWidth/2 + 0.4*rectw, windowHeight/2 + 0.35*recth);
  pop();
}

function mouseClicked() {
  if (mousePosition) {
    end = false;
    counter.count = 0;
    initCubes(nbCubes);
  }
}

function initCubes(nb){
  cubes.splice(0, cubes.length);
  for (var i = 0; i < nb; i++) {
    if(i == 0){
      cubes.push(new Cube(0, startSpeed + (counter.level * speedUp)));
    }else{
      cubes.push(new Cube(cubes[i-1].pos.x, startSpeed + (counter.level * speedUp)));
    }
  }
}


