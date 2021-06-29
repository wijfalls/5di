var dice = [];

var rolls = 0;
var rollbtn = false;
var boxstates = [0,0,0,0,0,0];
var diceSt = [false,false,false,false,false]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,200,0);
  drawScrCrd();
  drawScrCrd("right");
 
  rollButton(checkBox(140,280,50,20));
  doneButton(checkBox(210,280,50,20));
 
  
  draw_dice(dice,diceSt);

}






function checkBox(x,y,width,height){
if(mouseX >x && mouseX < x+width&& mouseY > y && mouseY<y+height ){
return true;
}else{
  return false;
}
}
function mouseClicked(){
  
 
if(checkBox(140,280,50,20)){

if(rolls === 0){
  dice = roll(5);
  console.log(dice);
  rolls = 1;
}else if(rolls > 0 ){
  
  console.log(diceSt);
  for(let i = diceSt.length;i >-1;i--){
    if(diceSt[i] === true){
      console.log(dice[i]);
    dice.splice(i,1);
    dice.push(roll(1)[0]);
    }  
  }

  diceSt = [false,false,false,false,false];
}
  //scores you could have
   boxstates = [0,0,0,0,0,0];
 for(let r = 0;  r < dice.length;r++){
 if(dice[r] === 1){
 boxstates[0]= boxstates[0] +1;
 }
 if(dice[r] === 2){
 boxstates[1]= boxstates[1] +1;
 }
 if(dice[r] === 3){
 boxstates[2]= boxstates[2] +1;
 }
 if(dice[r] === 4){
 boxstates[3]= boxstates[3] +1;
 }
 if(dice[r] === 5){
 boxstates[4]= boxstates[4] +1;
 }
 if(dice[r] === 6){
 boxstates[5]= boxstates[5] +1;
 }
 }
  

}
  if(checkBox(210,280,50,20)){
  
  
  }
  
  var x = 35,y = 180;
  var dS = 40;
  for(let i =0; i < diceSt.length;i++){
    x = x + 50;
  if(checkBox(x,y,dS,dS)){diceSt[i] = !(diceSt[i]);}
  }
  
  
}

function doneButton(state){
  
  push();
  noStroke();
  if(state){
  fill(200);
  }else{
  fill(0);
  }

  rect(210,280,50,20)
  fill(255);
  
  textSize(20);
  textAlign(CENTER);
  text("Done",212,280,50,20);
  
  pop();
}

function rollButton(state){
  
  push();
  noStroke();
  if(state){
  fill(200);
  }else{
  fill(0);
  }
  
  rect(140,280,50,20)
  fill(255);
  
  textSize(20);
  textAlign(CENTER);
  text("Roll",140,280,50,20);
  
  pop();
}

function roll(numOfDie){
  var dice_vals = [];
  
  for(let i = 0; i < numOfDie;i++){
  dice_vals.push(floor(random(6))+1);
}
  console.log(dice_vals);
  return dice_vals;
}

function drawScrCrd(side){
  var x = 0;
  var aces = 0
  var twos = 0,threes=0,fours=0,fives=0,sixes=0;
  var right_scores = [];
  var left_scores = [];
  
  
  if(side == "right"){
  x = 300;
  }
  fill(0);
  push();
  translate(x,12);
  text("Upper Section",2,-2);
  
  fill(255);
  rect(0,0,100,12);
  rect(0,12,100,12);
  rect(0,24,100,12);
  rect(0,36,100,12);
  rect(0,48,100,12);
  rect(0,60,100,12);
  
  
  
  
  fill(255);
  if(boxstates[0]>0){
    fill(255,255,0);
    
    aces = boxstates[0];

  }               
                    
  rect(43,0,57,12);


  fill(255);
  if(boxstates[1]>0){
    fill(255,255,0);
    twos = 2*boxstates[1];
  }
  rect(43,12,57,12);
 
  
  fill(255);
  if(boxstates[2]>0){
    fill(255,255,0);
    threes = 3*boxstates[2];
  }
  rect(43,24,57,12);
  
  
  fill(255);
  if(boxstates[3]>0){
    fill(255,255,0);
    fours = 4*boxstates[3];
  }
  rect(43,36,57,12);
   
  
  fill(255);
  if(boxstates[4]>0){
    fill(255,255,0);
    fives = 3*boxstates[4];
  }
  rect(43,48,57,12);
  
  
  fill(255);
  if(boxstates[5]>0){
    fill(255,255,0);
  sixes = 3*boxstates[5];}
  rect(43,60,57,12);
   
 
  
  fill(0);
  noStroke();
  text("Aces",2,10);
  text(aces,60,10); 
  
  text("Twos",2,22);
  text(twos,60,22);
       
  text("Threes",2,34);
  text(threes,60,34); 
  
  text("Fours",2,46);
  text(fours,60,46);
  
  text("Fives",2,58);
  text(fives,60,58); 
  
  text("Sixes",2,70);
  text(sixes,60,70);
  stroke(1);
  line(43,0,43,72);
  
  pop();
  
  push();
  translate(x,316);
  text("Lower Section",2,-2);
  
  fill(255);
  for(let i = 0;i<boxstates.length;i++){
  if(boxstates[i]>2){fill(255,255,0);}}
  rect(0,0,100,12);
  
  
  fill(255);
  for(let i = 0;i<boxstates.length;i++){
  if(boxstates[i]>3){fill(255,255,0);}}
  rect(0,12,100,12);
  
  
  fill(255);
  for(let i = 0;i<boxstates.length;i++){
    if(boxstates[i] ===3){
    for(let i = 0;i<boxstates.length;i++){
      if(boxstates[i] ===2){fill(255,255,0);}}}}
  rect(0,24,100,12);
  
  fill(255);
  //  for(let i = 0;i<boxstates.length;i++){
  //   if(boxstates[i]>3){fill(255,255,0);}
  // }
  rect(0,36,100,12);
  
   fill(255);
  // if(boxstates[3]>0){fill(255,255,0);}
  rect(0,48,100,12);
  
  fill(255);
   for(let i = 0;i<boxstates.length;i++){
    if(boxstates[i]>4){fill(255,255,0);}
  }
  rect(0,60,100,12);
  
  
  fill(255);
 for(let i = 0;i<boxstates.length;i++){
    if(boxstates[i]>0){fill(255,255,0);}
  }
  rect(0,72,100,12);
  
  fill(0);
  text("3 of a kind",2,10);
  text("4 of a kind",2,22);
  text("Full House",2,34);
  text("Sm Str8",2,46);
  text("Lg Str8",2,58);
  text("YAHTZEE",2,70);
  text("Chance",2,82);
  line(62,0,62,84);
  pop();
  
}

function draw_dice(arr,dicest){
  var x = 35,y = 180;
  var dS = 40;
  for(let i =0; i < arr.length;i++){
    x = x + 50;
    fill(255);
    if(diceSt[i]){
    fill(255,255,0);
    }else{
    fill(255);
    }
    rect(x,y,dS,dS);
    
  switch(arr[i]) {
  case 1: 
     fill(0);
    
     tempx = x+dS/2;
     tempy = y+dS/2;
     circle(tempx,tempy,8);
    break;
  case 2:   
      fill(0);
      
      tempx = x+dS/4;
      tempy = y+dS/4;
      circle(tempx,tempy,8);
      
      tempx = x+(3*dS)/4
      tempy = y+(3*dS)/4
      circle(tempx,tempy,8);
    break;
     case 3:
      fill(0);
      
      tempx = x+dS/4;
      tempy = y+dS/4;
      circle(tempx,tempy,8);
      
      tempx = x+dS/2;
      tempy = y+dS/2;
      circle(tempx,tempy,8);
      
      tempx = x+(3*dS)/4
      tempy = y+(3*dS)/4
      circle(tempx,tempy,8);  
    break;
  case 4:
      fill(0);
      
      tempx = x+dS/4;
      tempy = y+dS/4;
      circle(tempx,tempy,8);
      
      tempx = x+(3*dS)/4
      tempy = y+(3*dS)/4
      circle(tempx,tempy,8);
      
      tempx = x+dS/4;
      tempy = y+(3*dS)/4
      circle(tempx,tempy,8);
      
      tempx = x+(3*dS)/4
      tempy = y+dS/4;
      circle(tempx,tempy,8);
    break;
     case 5:
       fill(0);
      
      tempx = x+dS/4;
      tempy = y+dS/4;
      circle(tempx,tempy,8);
      
      tempx = x+(3*dS)/4
      tempy = y+(3*dS)/4
      circle(tempx,tempy,8);
      
      tempx = x+dS/2;
      tempy = y+dS/2;
      circle(tempx,tempy,8);
      
      tempx = x+dS/4;
      tempy = y+(3*dS)/4
      circle(tempx,tempy,8);
      
      tempx = x+(3*dS)/4
      tempy = y+dS/4;
      circle(tempx,tempy,8);
    break;
  case 6:
      fill(0);
      
      tempx = x+dS/4;
      tempy = y+dS/4;
      circle(tempx,tempy,8);
      
      tempx = x+(3*dS)/4
      tempy = y+(3*dS)/4
      circle(tempx,tempy,8);
      
      tempx = x+dS/4;
      tempy = y+dS/2;
      circle(tempx,tempy,8);
      
      tempx = x+(3*dS)/4
      tempy = y+dS/2;
      circle(tempx,tempy,8);
      
      tempx = x+dS/4;
      tempy = y+(3*dS)/4
      circle(tempx,tempy,8);
      
      tempx = x+(3*dS)/4
      tempy = y+dS/4;
      circle(tempx,tempy,8);
    break;
   
}
      }
}





