// Minimal Rock Paper Scissor implementation playable between one player & PC via browser's console
// Pseudocode is in pseudocode.js file
/*
    Comments:
            C1: Get a random value between 0 & 2 inclusive
                Math.floor rounds off the number. Math.random returns a random number b/w 0 & 1 (floating point) 
                RPS_WINNERS.length/RPS_LOSERS.length returns the length of array i.e, 3 which means we have 3 elements. Rock, Paper & scissor
                Now, don't ask me why multiplying a floating point value with 3 works returns a no b/w 0 & 3. I am not good at maths.

            C2: We have two arrays. One containing elements & one containing their loser counterparts.
                In other words, both arrays have been hardcoded to co-relate with each other. (Using a hashmap could be better, however, choosing a random value from a hashmap is not as simple as array)
                As per MDN, indexOf() returns the index of an element if it exists inside of a given array.
                We use player's choice to access the index of their chosen element.
                    RPS_WINNERS.indexOf("ROCK") -> returns 0
                We use the returned value to access the loser of the chosen pair
                    RPS_LOSERS[RPS_WINNERS.indexOf("ROCK")] -> returns "Scissors"

                As you can see, rock beats Scissors. Thus, if the computer chose Scissors as their choice. They are losing the round
                Because, in this game, given a pair of elements can ONLY have one winner & one loser
*/

// Array containing winners of each pair
const RPS_WINNERS = ["Rock", "Paper", "Scissors"];

//  Array containing losers of each pair. Rock = 0; Beats Scissors. And so on.
const RPS_LOSERS = ["Scissors", "Rock", "Paper"];

// Maximum games allowed
const MAX_GAMES = 5;

// Select all the RPS cards from the DOM
const cards = document.querySelectorAll(".rps > *");

// Select the play-area from the DOM, we will append our new elements to it
const playArea = document.getElementById('play-area');

// Create a playBox container & add a class to it. We will append it to playa-area later
const playBox = document.createElement('div');
playBox.classList.add('play-box');

// Apply event listeners to each of the cards
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        let playerChoice = e.target.getAttribute('data-key');
        let computerChoice = getComputerChoice();

        // Ensure that user has not messed with data-key attributes value
        if (!isValid(playerChoice)) return;

        const newCards = createCards(playerChoice, computerChoice);
        const result = playRound(playerChoice, computerChoice);
        const newTags = createTags(result, 'VS');
    });
});

// Ensure that the passed value exists in our array, otherwise, return false.
function isValid(choice) {
    return (RPS_WINNERS.includes(choice)) ? true : false;
}

// Get computer choice
function getComputerChoice() {
    // See Comment C1
    let random = Math.floor(Math.random() * RPS_WINNERS.length);

    return RPS_WINNERS[random];
}

// Play a round between Pc & player
function playRound(playerChoice, computerChoice) {
    // See comment C2
    let playerChoiceLoser = RPS_LOSERS[RPS_WINNERS.indexOf(playerChoice)];

    if (playerChoice === computerChoice) {
        return "Game Tied!";
    } else if (playerChoiceLoser === computerChoice) {
        return `You won! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You lost! ${computerChoice} beats ${playerChoice}`;
    }
}

// Create cards in memory & return references to those cards
function createCards(...choices) {
    // Call the removeCards function
    removeCards();

    // Create a newCards array for containing new cards
    let newCards = [];

    // For each choice in choices...
    choices.forEach(choice => {
        // Create an img element
        const card = document.createElement('img');

        // Add attributes & classes to it
        card.src = `./img/${choice}.svg`;
        card.alt = `${choice} image`
        card.classList.add('card');

        // Append it to the newCards array
        newCards.push(card);
    })

    return newCards;
}

// Remove cards from the DOM if they exist
function removeCards() {
    // Query all img elements from the DOM which are inside the playBox container
    let playBoxCards = playBox.querySelectorAll("img");

    // If no cards exist on the DOM, return
    if (playBoxCards.length === 0) return;

    // Otherwise, remove each card from the playBox container
    [...playBoxCards].forEach(card => {
        playBox.removeChild(card);
    });
}

// Create p tags in memory & return references to them
function createTags(...tags) {
    // Call the removeTags function
    removeTags();

    // Create a new tags array for containing new tags
    let newTags = [];

    // For each tag in tags
    tags.forEach(tag => {
        // Create a new p Tag
        const pTag = document.createElement('p');

        // Add classes & textContent to each of the tags
        (tag === 'VS') ? (pTag.classList.add('vs'), pTag.textContent = tag) :
                         (pTag.classList.add('result'), pTag.textContent = tag);

        // Append it to newTags array
        newTags.push(pTag);
    });

    return newTags;
}

// Remove p tags from the DOM if they exist
function removeTags() {
    // Query all p elements from the DOM which are inside the playArea container
    let playAreaTags = playArea.querySelectorAll('p');

    // If no p tags exist on the DOM, return
    if (playAreaTags.length === 0) return;

    // Otherwise, remove each p tag from the playArea container
    [...playAreaTags].forEach(pTag => {
        pTag.remove();
    });
}

// Start the game
function playGame() {
    let gameCount = 0;
    let playerScore = 0, computerScore = 0;

    while (gameCount < MAX_GAMES) {
        let matchResult = playRound(playerChoice(), computerChoice())

        if (matchResult.includes("You won!")) {
            playerScore++;
        } else if (matchResult.includes("You lost!")) {
            computerScore++;
        }

        console.log(matchResult);
        console.log(`Current Scores: Player: ${playerScore} | Computer: ${computerScore}`);
        gameCount++;
    }

    declareResult(playerScore, computerScore);
}

// Function for declaring the winner
function declareResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("You won the game!")
    } else if (computerScore > playerScore) {
        console.log("You lost the game!")
    } else {
        console.log("Game has tied!")
    }
}

// playGame();