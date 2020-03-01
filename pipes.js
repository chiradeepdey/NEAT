function Pipe(){
  this.spacing=100;
  this.top=random(0,height-this.spacing-10);

  this.bottom=height-this.top-this.spacing;
  this.w=20;
  this.x=width;
  this.speed=-5;

  this.show=function(){
     fill('green');
     rect(this.x,0,this.w,this.top);
     rect(this.x,height-this.bottom,this.w,this.bottom);

   }
  this.update=function(){
    this.x+=this.speed;
  }
  this.offscreen=function(){
    {if(this.x<=-this.w){
    return true;}
    else{ return false;}
    }

  }
}
