let gamePattern = [];
let userPattern = null;
let buttons = ["red", "blue", "green", "yellow"];
let initalize = true;
let level = 0;
// let clickCount = 0;

// Begin game
$(document).keydown((event) => {
    if (initalize === true ){        
        // $("h1").text("Level 0");
        nextSequence();
        initalize = false;
    };

});

// Helpers 
function animatePress(color){
    // console.log(color);
    $(`#${color}`).addClass("pressed");
    setTimeout( () => {$(`#${color}`).removeClass("pressed")}, 100);   
};

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play(); 
};
//

function checkAnswer(currentLevel) {
    console.log("checking", currentLevel);
    console.log(userPattern, "==>", gamePattern);
    if (userPattern === gamePattern[currentLevel]){
        // console.log("correct!");
        return true;
    }
    else {
        console.log("wrong!"); 

        return false;
    };
};

function nextSequence() {
    $("h1").text(`Level ${level}`);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttons[randomNumber];
    animatePress(randomColor);
    playSound(randomColor);
    console.log("Game pattern color ===>", randomColor);
    gamePattern.push(randomColor);
};

function resetTrackers(){
    // checkAnswer = false; // reset
    userPattern = null; // reset    
};
// levels are wrong! checkig the wrong index

// Main functionality
$(".btn").click((event) => {
    let currentColor = event.target.id;
    animatePress(currentColor);
    playSound(currentColor);
    userPattern = currentColor;
    if (checkAnswer(level)) {
        // debugger;
        console.log("correct, next sequence ");
        setTimeout(nextSequence, 1000);
        level++;
        resetTrackers();
    }
    // else {console.log("game over!")}
   }
);
