function getComputerSelection() {

    switch (Math.floor(Math.random() * 3)) {

        case 0:
            return 'rock';

        case 1:
            return 'paper';

        case 2:
            return 'scissor';
    }
}

function getPlayerSelection() {

    let selection, status;

    while (true) {

        selection = prompt('Do you choose rock, paper, or scissor?');

        if (selection === null) {
            return null;
        }

        selection.trim();

        if (selection === '') {
            return null;
        }

        selection = selection.toLowerCase();

        if (selection === 'rock' || selection === 'paper' || selection === 'scissor') {
            return selection;
        }

        alert('Invalid choice. Try again.');
    }
}

function playRound(playerSelection, computerSelection) {

    while (true) {

        if (playerSelection === null) {

            return 'Game is Cancelled.';
        }

        if (playerSelection === 'rock' && computerSelection === 'scissor') {

            return 'You Win! Rock beats Scissor.';
        }

        if (playerSelection === 'rock' && computerSelection === 'paper') {

            return 'You Lose! Paper beats Rock.';
        }

        if (playerSelection === 'scissor' && computerSelection === 'paper') {

            return 'You Win! Scissor beats Paper.';
        }

        if (playerSelection === 'scissor' && computerSelection === 'rock') {

            return 'You Lose! Rock beats Scissor.';
        }

        if (playerSelection === 'paper' && computerSelection === 'rock') {

            return 'You Win! Paper beats Rock.';

        }

        if (playerSelection === 'paper' && computerSelection === 'scissor') {

            return 'You Lose! Scissor beats Paper.';
        }

        alert('It\'s a tie. Make a choice to play again or cancel.');

        computerSelection = getComputerSelection();
        playerSelection = getPlayerSelection();
    }
}

console.log(playRound(getPlayerSelection(), getComputerSelection()));