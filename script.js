let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
    let compDiff = Math.abs(targetNum - computerGuess);
    let humanDiff = Math.abs(targetNum - humanGuess);

    if (compDiff >= humanDiff) {
        return true;
    } else if (humanDiff > compDiff) {
        return false;
    }
}

const updateScore = winner => {
    if (compareGuesses() === true) {
        winner = 'human';
    }
    if (compareGuesses() === false) {
        winner = 'computer';
    }
    if (winner === 'human') {
        humanScore += 1;
    }
    if (winner === 'computer') {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}