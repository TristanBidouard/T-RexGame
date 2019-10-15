function Cube(prevx, speed){
  this.height = 50;
  this.width = 50;
  this.space = random(100, 500);

  /*if(prevx = 0){
    this.pos = createVector(windowWidth, 0.9*windowHeight - this.height);

  }else{

    this.pos = createVector(prevx + this.width + this.space, 0.9*windowHeight - this.height);
    console.log(this);
  }*/
  this.down = randBool();
  if(this.down){
    this.pos = createVector(windowWidth + prevx, 0.9*windowHeight - this.height);
  }else{
    this.pos = createVector(windowWidth + prevx, 0.9*windowHeight - 3*this.height);
  }
  this.speed = speed;
  this.vel = createVector(LEFT*this.speed, 0);


  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function(){
    push();
    stroke(0);
    fill(0);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    pop();
  }

  this.offscreen = function(){
    if(this.pos.x + this.width < 0){
      return true
    }else{
      return false
    }
  }
}

function randBool(){
  return random(1) > .5;
}

