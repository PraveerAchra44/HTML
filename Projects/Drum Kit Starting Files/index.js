
var target = document.querySelectorAll(".drum").length;

for (var i = 0; i < target; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        make_sound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

}

document.addEventListener("keypress", function (event) {
    make_sound(event.key);
    buttonAnimation(event.key);

})


function make_sound(key) {
    switch (key) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;

        default:
            break;
    }
}


function buttonAnimation(currentkey){
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}