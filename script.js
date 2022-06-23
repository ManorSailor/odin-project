// Minimal Rock Paper Scissor implementation playable between one player & PC via browser's console
// Pseudocode is in pseudocode.js file
/*
    Comments:
            C1: Get a random value between 0 & 2 inclusive
                Math.floor rounds off the number. Math.random returns a random number b/w 0 & 1 (floating point) 
                RPS_WINNERS.length/RPS_LOSERS.length returns the length of array i.e, 3 which means we have 3 elements. Rock, paper & scissor
                Now, don't ask me why multiplying a floating point value with 3 works returns a no b/w 0 & 3. I am not good at maths.

            C2: We have two arrays. One containing elements & one containing their loser counterparts.
                In other words, both arrays have been hardcoded to co-relate with each other. (Using a hashmap could be better, however, choosing a random value from a hashmap is not as simple as array)
                As per MDN, indexOf() returns the index of an element if it exists inside of a given array.
                We use user's choice to access the index of their chosen element.
                    RPS_WINNERS.indexOf("ROCK") -> returns 0
                We use the returned value to access the loser of the chosen pair
                    RPS_LOSERS[RPS_WINNERS.indexOf("ROCK")] -> returns "SCISSORS"

                As you can see, rock beats scissors. Thus, if the computer chose scissors as their choice. They are losing the round
                Because, in this game, given a pair of elements can ONLY have one winner & one loser
*/                  

// Array containing winners of each pair
const RPS_WINNERS = ["ROCK", "PAPER", "SCISSORS"];

//  Array containing losers of each pair. Rock = 0; Beats Scissors. And so on.
const RPS_LOSERS = ["SCISSORS", "ROCK", "PAPER"];

// Maximum games allowed
const MAX_GAMES = 5;

// Get user input
function userChoice() {
    // Prompt the user & store their answer in a variable
    let choice = prompt("Rock, Paper or Scissors?").toUpperCase();

    // While the input is not valid, let the user know & keep asking them for a valid input
    while (!isValid(choice)) {
        alert(`${choice} is an invalid answer!`);
        choice = prompt("Rock, Paper or Scissors?").toUpperCase();
    }
    
    return choice;
}

// Function for validating user input
function isValid(choice) {
    return (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS") ? true : false;
}

// Get PC choice
function computerChoice() {
    // See Comment C1
    let random = Math.floor(Math.random() * RPS_WINNERS.length);

    return RPS_WINNERS[random];
}

// Play a round between Pc & User
function playRound(userChoice, computerChoice) {
    // See comment C2
    let userChoiceLoser = RPS_LOSERS[RPS_WINNERS.indexOf(userChoice)];

    if (userChoice === computerChoice) {
        return "Game Tied!";
    } else if (userChoiceLoser === computerChoice) {
        return `You won! ${userChoice} beats ${computerChoice}`;
    } else {
        return `You lost! ${computerChoice} beats ${userChoice}`;
    }
}

// Start the game
function playGame() {
    let gameCount = 0;
    let userScore = 0, computerScore = 0;

    while (gameCount < MAX_GAMES) {
        let matchResult = playRound(userChoice(), computerChoice())
                
        if (matchResult.includes("You won!")) {
            userScore++;
        } else if (matchResult.includes("You lost!")) {
            computerScore++;
        }

        console.log(matchResult);
        console.log(`Current Scores: Player: ${userScore} | Computer: ${computerScore}`);
        gameCount++;
    }

    declareResult(userScore, computerScore);
}

// Function for declaring the winner
function declareResult(userScore, computerScore) {
    if (userScore > computerScore) {
        console.log("You won the game!")
    } else if (computerScore > userScore) {
        console.log("You lost the game!")
    } else {
        console.log("Game has tied!")
    }
}

playGame();