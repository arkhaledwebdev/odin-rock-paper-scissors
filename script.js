function getComputerChoice() {

    const randomChoice = Math.floor(Math.random() * 3)

    switch (randomChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    const playerWon = `You win, ${playerSelection} beats ${computerSelection}`
    const playerLost = `You lose, ${computerSelection} beats ${playerSelection}`
    const draw = "it is a draw"

    if (playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case "rock":
                return draw;
                break;
            case "paper":
                return playerLost;
                break;
            case "scissors":
                return playerWon;
                break;
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "rock":
                return playerWon;
                break;
            case "paper":
                return draw;
                break;
            case "scissors":
                return playerLost;
                break;
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "rock":
                return playerLost;
                break;
            case "paper":
                return playerWon;
                break;
            case "scissors":
                return draw;
                break;
        }
    }
    else {
        return "invalid command, try again"
    }

}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {

        let computerChoice = getComputerChoice();
        
        console.log(`Computer choice: ${computerChoice}`);

        let playerChoice = prompt("Choose: Rock - Paper - Scissors");
        
        console.log(`Player choice: ${playerChoice}`);

        let result = playRound(playerChoice, computerChoice)

        console.log(result)

        if(result.includes("win")){
            playerScore++;
        }
        else if (result.includes("lose")){
            computerScore++;
        }
        else if (result.includes("draw")){
            playerScore++;
            computerScore++;
        }

        console.log(`Score: player (${playerScore}) - computer (${computerScore}))`)

        console.log("-----------------Round End--------------")
    }
    console.log("-----------------Gaame End--------------")

}

game();