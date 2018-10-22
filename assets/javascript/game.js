// onloaded generate a random number
// store it in a var random nunber
// oclick of each diamond generate random number
// add the number to a variable 
// continue adding the random numbers if the total is less than generated number
// if the total generated number is greater than the orig random number you loose
// increase the value of lose by 1
// if the total generated number is equal to the random generated number, you win
// increase the value of win by 1
// on refresh, reset the game

// randomly generated number
let randomNumber = Math.floor((Math.random() * 120) + 18);
let redGemStone = Math.floor((Math.random() * 12) + 1);
let blueGemStone = Math.floor((Math.random() * 12) + 1);
let purpleGemStone = Math.floor((Math.random() * 12) + 1);
let greenGemSone = Math.floor((Math.random() * 12) + 1);
let randomNumberDisplay = $(".section__game--randomnumberDisplay");
let totalScore = 0;
let win = 0;
let winDisplay = $(".section__game--outcomeWin");
let loose = 0;
let looseDisplay = $(".section__game--outcomeLoose");
let scoreKeeper = $(".section__score--displayKeeper");
let winloose = $("#winloose");

$(document).ready(function(){
    // red gem event handler
    randomNumberDisplay.text(randomNumber);
    $(".section__gems--red").on("click",function(){
        totalScore += redGemStone;
        gameChecker();
    });
     // blue gem event handler
    $(".section__gems--blue").on("click",function(){
        totalScore += blueGemStone;
        gameChecker();
    });
     // purple gem event handler
    $(".section__gems--purple").on("click",function(){
        totalScore += purpleGemStone;
        gameChecker();
    });
     // green gem event handler
    $(".section__gems--green").on("click",function(){
        totalScore += greenGemSone;
        gameChecker();
    });
});

let gameChecker = ()=>{
    scoreKeeper.text(totalScore);
        if(randomNumber===totalScore){
            win++; 
            winDisplay.text(win); 
            winloose.text("You win!!!");
            Math.floor((Math.random() * 120) + 18);
            randomNumber = Math.floor((Math.random() * 120) + 18);
            randomNumberDisplay.text(randomNumber);
            totalScore = 0;
            scoreKeeper.text(totalScore);
        }else if(totalScore > randomNumber){
            loose++;
            looseDisplay.text(loose);
            winloose.text("You loose!!!");
            Math.floor((Math.random() * 120) + 18);
            randomNumber = Math.floor((Math.random() * 120) + 18);
            randomNumberDisplay.text(randomNumber);
            totalScore = 0;
            scoreKeeper.text(totalScore);
        }
};

let randomNumberGen = ()=>{
    let gemRandomNum = Math.floor((Math.random() * 120) + 18);
    return gemRandomNum;
}


