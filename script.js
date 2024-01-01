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