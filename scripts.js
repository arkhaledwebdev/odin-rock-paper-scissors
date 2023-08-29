let isGameStarted = false;

// score
let playerGamesWon = 0;
let computerGamesWon = 0;

let playerScore = 0;
let computerScore = 0;

const playerGamesWonText = document.querySelector('#score-history-value-p1');
const computerGamesWonText = document.querySelector('#score-history-value-p2')

const playerScoreValue = document.querySelector('#p1-score-value');
playerScoreValue.textContent = playerScore;
const computerScoreValue = document.querySelector('#p2-score-value');
computerScoreValue.textContent = computerScore;

const playButton = document.querySelector('.main');
const imageP1 = document.querySelector('.image.p1');
const imageP2 = document.querySelector('.image.p2');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const imageSources = {
    default: './images/default.png',
    rock: './images/rock.png',
    paper: './images/paper.png',
    scissors: './images/scissors.png'
}

playButton.addEventListener('click', () => {
    isGameStarted = !isGameStarted;
    resetScore();
    startGame();
});

rockButton.addEventListener('mouseover', () => changeImage(imageSources.rock));
rockButton.addEventListener('click', () => pickChoice('rock'));
paperButton.addEventListener('mouseover', () => changeImage(imageSources.paper));
paperButton.addEventListener('click', () => pickChoice('paper'));
scissorsButton.addEventListener('mouseover', () => changeImage(imageSources.scissors));
scissorsButton.addEventListener('click', () => pickChoice('scissors'));

function changeImage(newSrc) {
    imageP1.src = newSrc;
}

function pickChoice(choice) {
    let result = '';
    if (isGameStarted) {
        clearBorders();
        const computerChoice = getComputerChoice();
        changeComputerImage(computerChoice);
        result = playRound(choice, computerChoice);
        checkResult(result);
    }
}

function changeComputerImage(type) {
    if (type === 'rock') {
        imageP2.src = './images/rock.png';
    }
    else if (type === 'paper') {
        imageP2.src = './images/paper.png';
    }
    else if (type === 'scissors') {
        imageP2.src = './images/scissors.png';
    }
    else {
        imageP2.src = './images/default.png';
    }
}

function getComputerChoice() {

    const randomChoice = Math.floor(Math.random() * 3)

    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return 'draw';
            case "paper":
                return 'lose';
            case "scissors":
                return 'win';
        }
    }
    else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return 'win';
            case "paper":
                return 'draw';
            case "scissors":
                return 'lose';
        }
    }
    else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return 'lose';
            case "paper":
                return 'win';
            case "scissors":
                return 'draw';
        }
    }
    else {
        return "invalid command, try again"
    }

}


function clearBorders() {
    imageP1.style.border = '5px solid lightYellow';
    imageP2.style.border = '5px solid lightYellow';
}

function checkResult(result) {

    if (isGameStarted) {
        if (result === 'win') {
            imageP1.style.border = '5px solid mediumseagreen';
            playerScore++;
            console.log(`playerScore: ${playerScore}`)
            console.log(`computerScore: ${computerScore}`)
            playerScoreValue.textContent = playerScore;
            if (playerScore >= 5 && computerScore < 5) {
                console.log('game end')
                gameEnd('win');
            }
        }
        else if (result === 'lose') {
            imageP1.style.border = '5px solid red';
            computerScore++;
            console.log(`playerScore: ${playerScore}`)
            console.log(`computerScore: ${computerScore}`)
            computerScoreValue.textContent = computerScore;
            if (playerScore < 5 && computerScore >= 5) {
                console.log('game end')
                gameEnd('lose');
            }
        }
        else if (result === 'draw') {
            imageP1.style.border = '5px solid mediumseagreen';
            imageP2.style.border = '5px solid mediumseagreen';
            console.log(`playerScore: ${playerScore}`)
            console.log(`computerScore: ${computerScore}`)
            playerScoreValue.textContent = playerScore;
            computerScoreValue.textContent = computerScore;
            if (playerScore >= 5 && computerScore >= 5) {
                console.log('game end')
                gameEnd('draw');
            }
        }
        else {
            imageP1.style.border = '5px solid lightYellow';
            imageP2.style.border = '5px solid lightYellow';
        }
    }

}

function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    playerScoreValue.textContent = playerScore;
    computerScoreValue.textContent = computerScore;
}

function startGame() {
    console.log('game start');

    if (isGameStarted) {
        enableButtons();
        resetScore();
        playButton.textContent = 'RESET';
        playButton.style.backgroundColor = 'red';
        playButton.style.color = 'white';
    }
    else {
        resetGame();
    }
}

function resetGame() {
    isGameStarted = false;
    disableButtons();
    resetScore();
    imageP1.style.border = '5px solid lightYellow';
    imageP2.style.border = '5px solid lightYellow';
    playButton.textContent = 'PLAY';
    playButton.style.backgroundColor = 'mediumseagreen';
    playButton.style.color = 'white';
}

function gameEnd(result) {

    playerScoreValue.textContent = playerScore;
    computerScoreValue.textContent = computerScore;
    if (result === 'win') {
        playerGamesWon++;
        playerGamesWonText.textContent = playerGamesWon;
        console.log('win')
        alert(`Player have won the game.\n${playerScore} : ${computerScore}`)
        resetGame();
    }
    else if (result === 'lose') {
        computerGamesWon++;
        computerGamesWonText.textContent = computerGamesWon;
        console.log('lose')
        alert(`Computer have won the game.\n${playerScore} : ${computerScore}`)
        resetGame();
    }
    else if (result === 'draw') {
        playerGamesWonText.textContent = playerGamesWon;
        computerGamesWonText.textContent = computerGamesWon;
        console.log('draw')
        alert(`It is a draw.\n${playerScore} : ${computerScore}`)
        resetGame();
    }
}
