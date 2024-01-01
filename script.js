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

    let selection;

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

        console.warn('Invalid choice. Try again.');
    }
}

function playRound(playerSelection, computerSelection) {

    while (true) {

        if (playerSelection === null) {

            return 'CANCELLED';
        }

        if (playerSelection === 'rock' && computerSelection === 'scissor') {

            return 'WIN -- ROCK beats SCISSOR';
        }

        if (playerSelection === 'rock' && computerSelection === 'paper') {

            return 'LOSE -- PAPER beats ROCK';
        }

        if (playerSelection === 'scissor' && computerSelection === 'paper') {

            return 'WIN -- SCISSOR beats PAPER';
        }

        if (playerSelection === 'scissor' && computerSelection === 'rock') {

            return 'LOSE -- ROCK beats SCISSOR';
        }

        if (playerSelection === 'paper' && computerSelection === 'rock') {

            return 'WIN -- PAPER beats ROCK.';
        }

        if (playerSelection === 'paper' && computerSelection === 'scissor') {

            return 'LOSE -- SCISSOR beats PAPER.';
        }

        console.info('The round is a tie. Make a choice to play again or cancel.');

        computerSelection = getComputerSelection();
        playerSelection = getPlayerSelection();
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