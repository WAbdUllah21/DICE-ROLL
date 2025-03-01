// PLAYER 1
var randomnumber1 = Math.floor(Math.random()*6) +1;

var player1 = "images/" + randomnumber1 + ".PNG";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",player1);

// PLAYER 2
var randomnumber2 = Math.floor(Math.random()*6)+1;

var player2 = "images/" + randomnumber2 + ".PNG";

var images2 = document.querySelectorAll("img")[1];

images2.setAttribute("src", player2);


// CONDITIONS

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS 🚩";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="🚩 PLAYER 2 WINS";
}
else {
    document.querySelector("h1").innerHTML="DRAW😒";
}