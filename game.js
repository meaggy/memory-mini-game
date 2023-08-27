let gamePattern = [];
let userPattern = [];
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
    if (userPattern[currentLevel] === gamePattern[currentLevel]){
        // console.log("correct!");
        return true;
    }
    else {
        console.log("wrong!"); 

        return false;
    };

};

function nextSequence() {
    $("#level-title").text(`Level ${level}`);    
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttons[randomNumber];
    animatePress(randomColor);
    playSound(randomColor);
    console.log("Game pattern color ===>", randomColor);
    gamePattern.push(randomColor);

};

// function resetTrackers(){
//     // checkAnswer = false; // reset
//     userPattern = null; // reset    
// };
// levels are wrong! checkig the wrong index

// Main functionality
$(".btn").click((event) => {
    let clickedColor = event.target.id;
    animatePress(clickedColor);
    playSound(clickedColor);
    userPattern.push(clickedColor);
    //if check answer and pattern length
    if (checkAnswer(level)) {
        // debugger;
        
        if (userPattern.length === gamePattern.length){
             console.log("correct, next sequence ");

             setTimeout(nextSequence, 1000);

             userPattern = []; // reset
        };
       
        
    };
    // else {console.log("game over!")}
   }
);
