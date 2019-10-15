function Counter(){
  this.height = 0.1*windowHeight;
  this.width = windowWidth;
  this.counterPos = createVector(0.02*windowWidth, 0.1*windowHeight);
  this.levelPos = createVector(0.95*windowWidth, 0.1*windowHeight);
  this.count = 1;
  this.step = 1;
  this.level = 1;
  this.nextLevel = 0;

  this.update = function(){
  	this.count += this.step;
  	if(this.count % 500 == 0){
  		this.level += 1;
  	}
  }

  this.render = function(){
	push();
	stroke(0);
	fill(0);
	textSize(32);
	text(this.count, this.counterPos.x, this.counterPos.y);
	text(this.level, this.levelPos.x, this.levelPos.y);
	pop();
	push();
	stroke(0);
	fill(0);
	textSize(35);
	textAlign(CENTER, BASELINE);
	text("T-REX GAME", windowWidth/2, 50);
	pop();
  }
}

