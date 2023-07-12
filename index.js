console.log("Rock Paper Scissors Game");

function getComputerChoice() {
    let choices = ['rock','paper','scissors'];

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt('rock, paper, scissor: ');
    userChoice.toLowerCase();
    return userChoice;
}

function checkWinner(userChoice, computerChoice) {
    let losesTo = {
        'rock':'paper',
        'paper':'scissors',
        'scissors':'rock'
    } 

    if(userChoice === computerChoice) {
        console.log("Draw");
        return;
    }

    let x = losesTo[userChoice];
    if(x === computerChoice) {
        console.log("Computer Winner");
    }else {
        console.log("Human Winner");
    }


}

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();
console.log(userChoice);
console.log(computerChoice);
checkWinner(userChoice, computerChoice);