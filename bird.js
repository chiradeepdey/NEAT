function mutat(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else
    return x;

}
function Bird(brain) {
  this.y=height/2;
  this.x=64;
  this.score=0;
  this.fitness=0;
  this.rad=24
  this.gravity=.5;
  this.velocity=0;
  this.upforce=5;
  this.airresistance=0;

  if (brain){
    this.brain=brain.copy();
    this.brain.mutate(mutat);
    }

  else
  this.brain=new NeuralNetwork(5,2,1);

  this.show= function () {
    fill('red');
    ellipse(this.x,this.y,this.rad,this.rad);
  }

  this.update=function () {
    /*if (this.y>=height-12){
      this.y=height-12;
      this.velocity=0;
    }*/
    /*if (this.y<=12){
      this.y=12;
      this.velocity=0;
    }*/
    this.velocity+=this.gravity;
    this.y+=this.velocity;

    this.airresistance=-0.01*(this.velocity);
    this.velocity+=this.airresistance;

    this.score++;
  }
  this.up=function (){
    this.velocity=-this.upforce;
    //this.y+=this.velocity;
  }


  }
