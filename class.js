class pixelstar {
  constructor(_x,_y,_size){
    this.x = _x;
    this.y = _y;
    this.size = _size;
  }
  display(){
    fill(65,58,66);
    
    push();
    translate(this.x, this.y);
    //scale(this.size)
    fill(89,96,112);
    rect(56,17,30,15);
    rect(86,2,30,15);
    rect(116,17,15);
    rect(131,31,15);
    rect(56,45,75,15);
    rect(41,31,15);
    //inside color
    fill(150,162,179);
    rect(56,30,75,15);
    rect(86,17,30,15);
  }
  
  move(){
    if (this.y <= 80){
      this.y ++;
    } else {
      this.y = -90 ; 
    }
    
  }
}

  

// function pixelstars(x,y,size){
//   fill(34,35,35);
//   rect(56,17,15);
//   rect(71,31,15);
//   rect(56,45,15);
//   rect(41,31,15);
// }
