function Trex(){
  this.height = 120;
  this.width = 50;
  this.pos = createVector(0.1*windowWidth, 0.9*windowHeight - this.height);
  this.vel = createVector(0, 0);
  this.speed = 10;
  this.sneak = false;
  this.jump = false;

  this.update = function(){
    this.pos.add(this.vel);
  	if(this.pos.y < 0.9*windowHeight - this.height){
  		this.vel.y += GRAVITY;
      this.jump = true;
  	}else{
  		this.vel.y = 0;
      this.jump = false;
  	}
  }

  this.render = function(){
  	push();
  	stroke(0);
  	fill(155);
    if(keyIsDown(DOWN_ARROW)){
      if(this.pos.y < 0.9*windowHeight - this.height){
        this.sneak = false;
      }else{
        this.sneak = true;
      }
    }else{
      this.sneak = false;
    }
    if(this.sneak){
      rect(this.pos.x, this.pos.y + this.height/2, this.width, this.height/2);
    }else{
      rect(this.pos.x, this.pos.y, this.width, this.height);
    }
  	pop();
  }

  this.hits = function(cube){
    if(this.sneak){
      if(cube.pos.x < this.pos.x + this.width && cube.pos.x + cube.width > this.pos.x){
        if(this.pos.y + this.height/2 < cube.pos.y + cube.height){
          return true;
        }
      } else {
        return false;
      }
    }else{
      if(cube.pos.x < this.pos.x + this.width && cube.pos.x + cube.width > this.pos.x){
        if(this.pos.y + this.height > cube.pos.y){
          return true;
        }
      } else {
        return false;
      }
    }
  }
}

