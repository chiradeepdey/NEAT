var birds=[];
var savedBirds=[];
var pipes=[];
var popsize=500;
var gen=0;
var closestPipe;
var counter=0;
let slider;
var gen=0;

function setup (){
    createCanvas(1535,755);
    //frameRate(100);
    slider=createSlider(1,100,1);
    bg=loadImage('2041.jpg');
    for(var i=0;i<popsize;i++)
    birds.push(new Bird());

}

function draw () {

for(var n=0;n<slider.value();n++){
    if (counter % 100 ==0)
      pipes.push(new Pipe());

    counter++;

    if (pipes[0].x-32<0)
      closestPipe=pipes[1];
    else
      closestPipe=pipes[0];


    for (var i=pipes.length-1;i>=0;i--){
      pipes[i].update();


      if (pipes[i].offscreen())
       pipes.splice(i,1);


    }
    for (var j=0;j<birds.length;j++)
    if ((birds[j].y>=height-12)||(birds[j].y<=12)){
      savedBirds.push(birds.splice(j,1)[0]);
      //console.log('hit');
    }
    for (var j=0;j<birds.length;j++){
     if (closestPipe.x>=32 && closestPipe.x<=76){
       if ((birds[j].y<=closestPipe.top+12 || birds[j].y>=height-closestPipe.bottom-12)){
         savedBirds.push(birds.splice(j,1)[0]);
         //console.log('hit');
       }
       }
     }

    for (var i=0;i<birds.length;i++){
      var output=birds[i].brain.feedforward([birds[i].y,birds[i].velocity,closestPipe.top,height-closestPipe.bottom,closestPipe.x]);

      if (output[0]>0.5)
      birds[i].up();
      birds[i].update();



    }

    if (birds.length==0){
    counter=0;
    nextGen();
    gen++;
    //console.log(birds);
  //  for(let bird of birds)
  //  console.log(bird.brain);
    console.log(' gen=',gen,'population=',);
    pipes=[];}

}
     background(bg);
     for (let i of birds)
     i.show();
     for (let i of pipes)
     i.show();


}
