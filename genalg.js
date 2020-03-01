var matingPool;
var sum;
function nextGen(){
  calcFitness();
  for (var i=0;i<popsize;i++)
    birds[i]=pickbird();

  savedBirds=[];


}

  function calcFitness(){
    let sum=0;
    let maxscore=savedBirds[0].score;
    let maxbird=savedBirds[0];
    matingPool=[];


    for (let i=0;i<savedBirds.length;i++){
    sum+=savedBirds[i].score;
    if (savedBirds[i].score>maxscore){
      maxscore=savedBirds[i].score;
      maxbird=savedBirds[i];}
    }

    for(let i=0;i<savedBirds.length;i++){
    savedBirds[i].fitness=savedBirds[i].score/maxscore;
    var n= savedBirds[i].fitness*100;
    for (var j=0;j<n;j++)
    matingPool.push(savedBirds[i]);
  }
   console.log(sum);

   //console.log(maxbird);
   //for (let bird of savedBirds)
   //console.log(bird.fitness);
  }

  function pickbird(){
    let bird=random(matingPool);
    let child= new Bird(bird.brain);

    return child;
  }
