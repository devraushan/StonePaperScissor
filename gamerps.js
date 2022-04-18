function gamerps(userIn){
function computerInput(){
  let output;
  do {
let i=Math.floor(Math.random()*10);
  if (i%3 == 0){output = 1}
  else if (i%3 == 1){output = 2}
  else{output=3}
  } while (output == userIn);
  
  return output;
} 
computerIn = computerInput();
function umpire(comp, user){
  if(comp==1 && user==2 || comp==2 && user==3 || comp ==3&&user==1){userwin=true}
  else{userwin=false} 
  return userwin;
} 
let decision = umpire(computerIn, userIn);
let verdict = decision ? "You Won" : "You lost";
function assignvalue(inpt){
if(inpt==1){resultant = "Stone"} 
else if(inpt==2){resultant="Paper"}
else if(inpt==3){resultant="Scissor"}
return resultant;
}  
stringInComp = assignvalue(computerIn);
stringInUser = assignvalue(userIn);
let systemOutPrint = `You Choose ${stringInUser} and Computer Choose ${stringInComp} \n ${verdict} `
document.getElementById('result').innerText= systemOutPrint;
} 

