const eventsSection = document.querySelector('#events');
eventsSection.appendChild(makePlayButton(false));


let playerSelection, computerSelection;
let playerScore, computerScore;
let round;

document.querySelector('#player .options').addEventListener('click', event => {

    const target = event.target;

    if (target.tagName !== 'IMG' && target.tagName !== 'BUTTON')
        return;

    playerSelection = event.target.className;
    computerSelection = getComputerSelection();
    setSelectionImages(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        setRoundOutcome(true);
        setOutcomeDetail('')
    } else if (getNemesis(playerSelection) === computerSelection) {
        setRoundOutcome(false, false);
        setOutcomeDetail(computerSelection, playerSelection);
        --playerScore;
        setPlayerScore(playerScore);
    } else {
        setRoundOutcome(false, true);
        setOutcomeDetail(playerSelection, computerSelection);
        --computerScore;
        setComputerScore(computerScore);
    }

    ++round;
    setRoundCounter(round);

    if (!playerScore || !computerScore) {
        disableOptionsButtons();
        destroyGame();
        eventsSection.appendChild(getGameOutcome(playerScore, computerScore));
        eventsSection.appendChild(makePlayButton(eventsSection, true));
    }

});

function getComputerSelection() {
    return ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)];
}

function setSelectionImages(playerSelection, computerSelection) {
    document.querySelector('#player .selection img').src = playerSelection && `./img/${playerSelection}.png`;
    document.querySelector('#computer .selection img').src = computerSelection && `./img/${computerSelection}.png`;
}

function getNemesis(selection) {
    return { 'rock': 'paper', 'paper': 'scissor', 'scissor': 'rock' }[selection];
}

function setPlayerScore(playerScore) {
    document.querySelector('#player .score').textContent = playerScore;
}

function setComputerScore(computerScore) {
    document.querySelector('#computer .score').textContent = computerScore;
}

function enableOptionsButtons() {
    document.querySelectorAll('#player .options button').forEach(button => button.disabled = false);
}

function disableOptionsButtons() {
    document.querySelectorAll('#player .options button').forEach(button => button.disabled = true);
}

function makePlayButton(restarting) {
    const playButton = document.createElement('button');

    playButton.className = 'play';
    playButton.textContent = restarting ? 'Restart' : 'Start';

    playButton.addEventListener('click', () => {
        enableOptionsButtons();
        initializeGame();
        if (restarting) eventsSection.removeChild(document.querySelector('#game-outcome'));
        eventsSection.removeChild(playButton);
    });

    return playButton;
}

function initializeGame() {
    playerScore = 5;
    computerScore = 5;
    round = 0;
    setPlayerScore(playerScore);
    setComputerScore(computerScore);
    setSelectionImages('', '');
    eventsSection.appendChild(makeDiv('round-counter'));
    eventsSection.appendChild(makeDiv('round-outcome'));
    eventsSection.appendChild(makeDiv('outcome-detail'));
}

function destroyGame() {
    eventsSection.removeChild(document.querySelector('#round-counter'));
    eventsSection.removeChild(document.querySelector('#round-outcome'));
    eventsSection.removeChild(document.querySelector('#outcome-detail'));
}

function makeDiv(id, textContent) {
    const div = document.createElement('div');
    div.id = id || '';
    textContent = textContent || '';
    return div;
}

function setRoundCounter(round) {
    document.querySelector('#round-counter').textContent = `Round ${round}`;
}

function setRoundOutcome(roundDraw, playerWon) {
    document.querySelector('#round-outcome').textContent = roundDraw ? `Draw` :
        `You ${playerWon ? 'Won' : 'Lost'} the Round`;
}

function setOutcomeDetail(winnerSelection, loserSelection) {
    document.querySelector('#outcome-detail').textContent = winnerSelection &&
        `${capitalize(winnerSelection)} beats ${capitalize(loserSelection)}`
}

function getGameOutcome(playerScore, computerScore) {
    const div = makeDiv('game-outcome');
    div.textContent = !playerScore ? `Computer Won by ${computerScore} Points` :
        `Player Won by ${playerScore} Points`;
    return div;
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
