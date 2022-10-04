//Global Scope Variables
let w = 150 
let mic;
let miclevel;
let rectanglefill;
let colorchange = 240;
let colorchange2 = 246;
let colorchange3 = 240;
let star1;
let star2;


//Setup Function
function setup() {
  createCanvas(400, 400);
  star1 = new pixelstar(106,300);
  
  
  //mic = new p5.AudioIn()
  //mic.start();
}

//Draw Function
function draw() {
  background(240,246,240);
  // mouseaxislocation();
  cube();
  insidecube();
  detailsr();
  detailsl();
  mousehover1();
  mousehover2();
  tophole();
  
  star1.display();
  star1.move();
  
  
  
  
  
 
  
  
  


}

//Created Functions

function tophole(){
  fill(34,35,35)
  rect(147,110,105,15)
  rect(162,125,75,15)
  rect(162,95,75,15)
  
  
}

function pixelstars(x,y){
  push();
  translate( x, y);
  fill(34,35,35);
  rect(56,17,30,15);
  rect(86,2,30,15);
  rect(116,17,15);
  rect(131,31,15);
  rect(56,45,75,15);
  rect(41,31,15);
  //inside color
  fill(89,96,112);
  rect(56,30,75,15);
  rect(86,17,30,15);
  
  
}
function mouseaxislocation(){
  console.log("x = " + mouseX);
  console.log("y = " +mouseY);
}
function fillinsidetop(){
  
  //Loop to reset color once it gets to a certain number
  if(colorchange < 30){
    colorchange = 240;
  }
  if (colorchange2 < 36){
    colorchange2 = 246
  }
  if(colorchange3 < 30){
    colorchange3 = 240
  }
  
  fill(colorchange,colorchange2,colorchange3);
  colorchange -= 1;
  colorchange2 -= 1;
  colorchange3 -= 1;
  
  //Fill Shape for top of cube
  rect(87,110,226,15);
  rect(147,80,106,75);
  rect(117,95,166,45);
  rect(177,65,46,105);
  
}
function mousehover1(){
  
  //Fill Shape For Left Side of Cube
  function insidecolorb1(){
  fill(34,35,35);
  rect(117,200,46);
  rect(117,185,17);
  rect(147,245,16);
}

function insidecolorw1(){
  fill(240,246,240);
  rect(117,200,46);
  rect(117,185,15);
  rect(147,245,16);
}
  
  //Loop to Change color back to white when mouse is away from selected points
  if (mouseX > 117 && mouseX < 161 && mouseY > 200 && mouseY < 244){
    insidecolorb1(); 
  }else {
    insidecolorw1();
  }
}
function mousehover2(){
  
  //Fill Shape For Right Side of Cube
  function insidecolorb2(){
  fill(34,35,35);
  rect(237,200,46);
  rect(267,185,17);
  rect(237,245,16);
}
  //Loop to Change color back to white when mouse is away from selected points
  if (mouseX > 237 && mouseX < 282 && mouseY > 200 && mouseY < 244){
    insidecolorb2(); 
  
}
}
function cube(){
  //Fill Color
  fill(34,35,35)
  //No Stroke
  noStroke();
  
  //Aligntment Center Top
  let c = width/2-22.5;
  let c2 = height/2-w;
  
  //Alignment Left Side Top
  let l = width/2-22.5-30;
  let l2 = height/2-w+15;
  
  let l3 = width/2-22.5-60;
  let l4 = height/2-w+30;
  
  let l5 = width/2-22.5-90;
  let l6 = height/2-w+45;
  
  let l7 = width/2-22.5-105;
  let l8 = height/2-w+60;

  //Alignment Right Side Top
  let r = width/2-22.5+45;
  let r2 = height/2-w+15;
  
  let r3 = width/2-22.5+75;
  let r4 = height/2-w+30;
  
  let r5 = width/2-22.5+105;
  let r6 = height/2-w+45;
  
  let r7 = width/2-22.5+135;
  let r8 = height/2-w+60;
  
  //Aligntment Center Bottom
  let bc3 = width/2-22.5;
  let bc4 = height/2+w-30;
  
  //Alignment Left Side Bottom
  let bl = width/2-22.5-30;
  let bl2 = height/2-w+270+15-30;
  
  let bl3 = width/2-22.5-60;
  let bl4 = height/2-w+270-30;
  
  let bl5 = width/2-22.5-90;
  let bl6 = height/2-w+270-30-15;
  
  //Alignment Right Side Bottom
  let br = width/2-22.5+45;
  let br2 = height/2-w+270+15-30;
  
  let br3 = width/2-22.5+75;
  let br4 = height/2-w+270-30;
  
  let br5 = width/2-22.5+105;
  let br6 = height/2-w+270-30-15;
  
  //Top section
  rect(c,c2,45,15);
  
  //Top Left section
  rect(l,l2,30,15);
  rect(l3,l4,30,15);
  rect(l5,l6,30,15);
  rect(l7,l8,15,165);
  
  //Top Right section
  rect(r,r2,30,15);
  rect(r3,r4,30,15);
  rect(r5,r6,30,15);
  rect(r7,r8,15,165);
  
  //Bottom Mid Section
  rect(bc3,bc4,45,15);
  
  //Bottom Left Section
  rect(bl,bl2,30,15);
  rect(bl3,bl4,30,15);
  rect(bl5,bl6,30,15);
  
  //Bottom Right Section
  rect(br,br2,30,15);
  rect(br3,br4,30,15);
  rect(br5,br6,30,15);
}  
function insidecube(){
  //Fill Color
  fill(34,35,35)
  //No Stroke
  noStroke();
  
  //Inside Alignment left of Cube 
  let il = width/2-22.5-30;
  let il2 = height/2-w+105;
  
  let il3 = width/2-22.5-60;
  let il4 = height/2-w+90;
  
  let il5 = width/2-23-90;
  let il6 = height/2-w+75;
  
  //Insidle Alignment Right of Cube
  let ir = width/2-22.5+45;
  let ir2 = height/2-w+105;
  
  let ir3 = width/2-22.5+75;
  let ir4 = height/2-w+90;
  
  let ir5 = width/2-23+106;
  let ir6 = height/2-w+75;
  
  //Aligntment Inside Center Top
  let ic = width/2-22.5;
  let ic2 = height/2-w+120;
  
  //Inside Alignment Line
  let inl = width/2-22.5+15;
  let inl2 = height/2-w+15*9;
  
  //Inside Left of Cube
  rect(il,il2,30,15);
  rect(il3,il4,30,15);
  rect(il5,il6,30,15);
  
  //Inside Right of Cube
  rect(ir,ir2,30,15);
  rect(ir3,ir4,30,15);
  rect(ir5,ir6,30,15);
  
  //Inside Center
  rect(ic,ic2,45,15);
  
  //Inside Line
  rect(inl,inl2,15,15 *9);
}
function detailsl(){
  
  //let w = map(mic.getLevel(), 0, .1, 150, 144);
  
  //Inside left Detail Alignment
  let dl = width/2-22.5-44;
  let dl2 = height/2-w+135;
  
  let dl3 = width/2-22.5-75;
  let dl4 = height/2-w+120;
  
  let dl5 = width/2-22.5-15*2;
  let dl6 = height/2-w+15*14;
  
  let dl7 = width/2-22.5-15*4;
  let dl8 = height/2-w+15*13;
  
  let dl9 = width/2-22.5-15*1;
  let dl10 = height/2-w+15*10;
  
  let dl11 = width/2-22.5-15*5;
  let dl12 = height/2-w+15*9;
  
  //Inside Detail Left
  
  rect(dl,dl2,30,15);
  rect(dl3,dl4,30,15);
  rect(dl5,dl6,30,15);
  rect(dl7,dl8,30,15);
  rect(dl9,dl10,15,15*4);
  rect(dl11,dl12,15,15*4);
}
function detailsr(){
  
  //let w = map(mic.getLevel(), .3, 0, 167, 150);
  
  //Inside Right Detail Alignment
  let dr = width/2-22.5+60;
  let dr2 = height/2-w+135;
  
  let dr3 = width/2-22.5+90;
  let dr4 = height/2-w+120;
  
  let dr5 = width/2-22.5+45;
  let dr6 = height/2-w+15*14;
  
  let dr7 = width/2-22.5+75;
  let dr8 = height/2-w+15*13;
  
  let dr9 = width/2-22.5+15*7;
  let dr10 = height/2-w+15*9;
  
  let dr11 = width/2-22.5+15*3;
  let dr12 = height/2-w+15*10;
  
  //Inside Detail Right
  rect(dr,dr2,30,15);
  rect(dr3,dr4,30,15);
  rect(dr5,dr6,30,15);
  rect(dr7,dr8,30,15);
  rect(dr9,dr10,15,15*4);
  rect(dr11,dr12,15,15*4);
  
}