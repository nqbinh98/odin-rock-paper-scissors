// set variable for save human and computer scores
let humanScore = 0;
let computerScore = 0;
let gameOver = false;
const btnSection = document.querySelectorAll(".btnSection");
const score = document.querySelector(".score")
const para = document.querySelector(".announce")
const reset = document.querySelector(".resetBtn")

for (let i = 0; i < btnSection.length; i++) {
    btnSection[i].addEventListener('click', function(e) {
        if (!gameOver) {
            playRound(e.target.id)
        }
    })
}

reset.addEventListener('click', resetGame)

function getComputerChoice() {
    
    // Get a random number between 0 to 2
    const numb = Math.floor(Math.random() * 3)

    // Use SWITCH, case 0 = Rock, case 1 = Paper, case 2 = Scissors
    // check the random number and give the answer 
    switch (numb) {
        case 0:
            return 'ROCK';
                   
        case 1:
            return 'PAPER';
            
        case 2:
            return 'SCISSORS';
            
    }
}


function playRound(humanChoice) {
    let humanSelection = humanChoice.toUpperCase();
    let computerSelection = getComputerChoice();
    
    if (humanScore >= 5) {
        resetGame()
    } else if (computerScore >= 5) {
        resetGame()
    }
    console.log(humanSelection)
    // humanChoice === computerChoice mean draw
    // get humanChoice is the main to check

    if (humanSelection === computerSelection) {
        console.log("Draw!")
    } else if (humanSelection === "ROCK") {
        switch (computerSelection) {
            case "PAPER":
                console.log("You lose. Paper beats Rock!")
                ++computerScore;
                break;
            case "SCISSORS":
                console.log("You win. Rock beats Scissors!");
                ++humanScore;
                break;
        }  

    } else if (humanSelection === "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                console.log("You win. Paper beats Rock!");
                ++humanScore;                
                break;
                case "SCISSORS":
                console.log("You lose. Scissors beats Paper!");
                ++computerScore;
                break;
        }  
    } else if (humanSelection === "SCISSORS") {
        switch (computerSelection) {
            case "ROCK":
                console.log("You lose. Rock beats Scissors!");
                ++computerScore;
                break;
            case "PAPER":
                console.log("You win. Scissors beats Paper!");
                ++humanScore;
                break;
        }
    }

    score.textContent = `${humanScore} - ${computerScore}`

    // if (humanScore === 5) {
    //     para.textContent = "Human won";
    //     // resetGame()
    // } else if (computerScore === 5) {
    //     para.textContent = "Computer won"
    //     // resetGame()
    // }

    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;
        para.textContent = humanScore === 5 ? "Human won!" : "Computer won!"

    }
}

function resetGame () {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    score.textContent = `${humanScore} - ${computerScore}`
    para.textContent = "First to 5 wins"
    
}

