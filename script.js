function getComputerChoice() {

    switch (Math.floor(Math.random() * 3)) {

        case 0:
            return 'rock';

        case 1:
            return 'paper';

        case 2:
            return 'scissor';
    }
}

function playerSelection() {

    let selection = prompt('Do you choose rock, paper, or scissor?');
    return selection.toLowerCase();
}