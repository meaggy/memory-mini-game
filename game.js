let buttons = ["red", "blue", "green", "yellow"];
let initalize = true;


// Begin game
$(document).keydown((event) => {
    if (initalize === true ){    
        gamePattern = [];
        userPattern = [];
        level = 0;
        initalize = true;    
        $("#level-title").text("Level 0");
        nextSequence();
        initalize = false;
    };
});

// Helpers -------------------------------------------------------------
function animatePress(color){
    $(`#${color}`).addClass("pressed");
    setTimeout( () => {$(`#${color}`).removeClass("pressed")}, 100);   
};

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play(); 
};
///---------------------------------------------------------------------
function checkAnswer(index){
    if (userPattern[index] === gamePattern[index]){
        return true;
    }
    else {
        return false;
    };
};

function nextSequence() {
    $("#level-title").text(`Level ${level}`);    
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttons[randomNumber];
    animatePress(randomColor);
    playSound(randomColor);
    gamePattern.push(randomColor);
    level++;
};

// Main functionality
$(".btn").click((event) => {
    let clickedColor = event.target.id;
    animatePress(clickedColor);
    playSound(clickedColor);
    userPattern.push(clickedColor);
    let checkHelper = userPattern.length -1;
    if (checkAnswer(checkHelper)) { 
        if (userPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
            userPattern = []; // reset      
        } 
    } else {
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout( () => {$("body").removeClass("game-over")}, 200);
            $("#level-title").text("Game Over! Press any key to restart");
            initalize = true;
        };     
    }
);
