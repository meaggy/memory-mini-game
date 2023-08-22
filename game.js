let gamePattern = [];
let buttons = ["red", "blue", "green", "yellow"];
let initalize = true;
let level = 0;

// Main functionality
$(document).keydown((event) => {
    if (initalize === true ){        
        $("h1").text("Level 0");
        nextSequence();
        initialize = false;
    }
    else {
      
        nextSequence();   
    }

});

// Helpers
function animatePress(color){
    console.log(color);
    $(`#${color}`).addClass("pressed");
    setTimeout( () => {$(`#${color}`).removeClass("pressed")}, 100);   
};

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play(); 
};

function nextSequence() {
    level++;
    $("h1").text(`Level ${level}`);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttons[randomNumber];
    gamePattern.push(randomColor);
    // ---------- use event listener, select button and press -----------
    animatePress(randomColor);
    playSound(randomColor);
};

$(".btn").click((event) => {
    let currentColor = event.target.id
    animatePress(currentColor);
    playSound(currentColor);
    console.log("hello", event.target.id);
}
);
