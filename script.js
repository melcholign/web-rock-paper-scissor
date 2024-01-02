function getComputerSelection() {

    switch (Math.floor(Math.random() * 3)) {

        case 0:
            return 'Rock';

        case 1:
            return 'Paper';

        case 2:
            return 'Scissor';
    }
}

function getPlayerSelection() {

    let selection;

    while (true) {

        selection = prompt('Do you choose Rock, Paper, or Scissor?');

        if (selection === null) {
            return null;
        }

        selection.trim();

        if (selection === '') {
            return null;
        }

        selection = selection[0].toUpperCase() + selection.substring(1).toLowerCase();

        if (selection === 'Rock' || selection === 'Paper' || selection === 'Scissor') {
            return selection;
        }

        console.warn('Invalid choice. Try again.');
    }
}

function playRound(playerSelection, computerSelection) {

        if (playerSelection === null) {
            return `CANCEL. Round is forfeited`;
        }

        if (playerSelection === computerSelection) {
            return `TIE. ${playerSelection} cannot beat ${computerSelection}`;
        }

        if (getStrongerSelection(playerSelection) === computerSelection) {

            return `LOSE. ${computerSelection} beats ${playerSelection}`;
        }

        return `WIN. ${playerSelection} beats ${computerSelection}`;
    
}

function getStrongerSelection(selection) {

    switch (selection) {

        case 'Rock':
            return 'Paper';

        case 'Paper':
            return 'Scissor';

        case 'Scissor':
            return 'Rock';

        default:
            return undefined;
    }
}

function game(rounds = 5) {

    let playerScore = 0
        , computerScore = 0
        , roundResult;

    for (let i = 1; i <= rounds; ++i) {

        roundResult = playRound(getPlayerSelection(), getComputerSelection());
        if (roundResult === 'CANCELLED') {
            return 'The game is cancelled.';
        } 

        console.info(roundResult);
        
        if (roundResult[0] === 'W') {
            ++playerScore;
        } else {
            ++computerScore;
        }

        if(i === rounds && playerScore === computerScore) {
            console.log('Tiebreaker round');
            --i;
        }
    }

    return (playerScore > computerScore) ? 
        `Player won by ${playerScore - computerScore} points`:
        `Computer won by ${computerScore - playerScore} points`;
}

console.log(game());