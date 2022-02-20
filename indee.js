//Detecting mouse clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(i) {
        playsoun(this.innerHTML);
    })
}
//detecting keyboard press
document.addEventListener("keydown", function(event) {
        playsoun(event.key);
    })
    //Playing the actual sounds
function playsoun(alphab) {
    if (alphab == "w") {
        var mus = new Audio('sounds/tom1.mp3');
    } else if (alphab == "a") {
        var mus = new Audio('sounds/tom2.mp3');
    } else if (alphab == "s") {
        var mus = new Audio('sounds/tom3.mp3');
    } else if (alphab == "d") {
        var mus = new Audio('sounds/tom4.mp3');
    } else if (alphab == "j") {
        var mus = new Audio('sounds/snare.mp3');
    } else if (alphab == "k") {
        var mus = new Audio('sounds/crash.mp3');
    } else if (alphab == "l") {
        var mus = new Audio('sounds/kick.mp3');
    }
    mus.play();
    var activecl = document.querySelector("." + alphab);
    activecl.classList.add("pressed");
    setTimeout(function() {
        activecl.classList.remove("pressed");
    }, 100);
}