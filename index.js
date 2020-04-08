var variablenumber1=  Math.floor(Math.random()*6)+1;
var variablediename1="dice"+variablenumber1+".png";
var variablesourcepath1="images/"+variablediename1;
var sourcepath=document.querySelectorAll("img")[0];
sourcepath.setAttribute("src",variablesourcepath1);

var variablenumber2= Math.floor(Math.random()*6)+1;
var variablesourcepath2="images/dice"+variablenumber2+".png";
var sourcepath2=document.querySelectorAll("img")[1];
sourcepath2.setAttribute("src",variablesourcepath2);

if(variablenumber1>variablenumber2){
  document.querySelector("h1").innerHTML=" 🚩 Player 1 Win ";
}else if(variablenumber2>variablenumber1){
  document.querySelector("h1").innerHTML="  Player 2 Win 🚩";
}else{
    document.querySelector("h1").innerHTML="Draw! ";
}
