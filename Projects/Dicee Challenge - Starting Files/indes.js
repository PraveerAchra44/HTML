//  for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var change1 = "dice" + randomNumber1 + ".png";
var source1 = "images/" + change1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", source1);

//for dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var change2 = "dice" + randomNumber2 + ".png";
var source2 = "images/" + change2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", source2);

//winning condition

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "DRAW";
}