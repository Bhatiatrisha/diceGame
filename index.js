var random = Math.floor(Math.random()*(6))+1;
var string1= "images/"+"dice"+ random +".png";
document.querySelectorAll("img")[0].setAttribute("src",string1);

var random2=Math.floor(Math.random()*6)+1;
var string2="images/"+"dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",string2);

if(random>random2)
{
    document.querySelector("h1").innerHTML="Player 1 won!";
}
else if(random2>random)
{
    document.querySelector("h1").innerHTML="Player 2 won!";
}
else
{
    document.querySelector("h1").innerHTML="its a Tie!";
}