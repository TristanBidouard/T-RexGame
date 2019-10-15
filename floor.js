function Floor(){
  this.height = 0.1*windowHeight;
  this.width = windowWidth;
  this.pos = createVector(0, 0.9*windowHeight);

  this.render = function(){
	push();
	stroke(0);
	fill(0);
	rect(this.pos.x, this.pos.y, this.width, this.height);
	pop();
  }
}

