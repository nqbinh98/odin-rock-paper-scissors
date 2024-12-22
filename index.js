// set variable for save human and computer scores
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    // Get the user answer
    
    
    while (true) {
        let getChoice = prompt("Rock or Paper of Scissors?")

        if (getChoice) {
            let upperAnswer = getChoice.toUpperCase()
        
            switch (upperAnswer) {
                case "ROCK":
                    return "ROCK";
                    
                case "PAPER":
                    return "PAPER";
                    
                case "SCISSORS":
                    return "SCISSORS";
                    
                default:
                    alert("Error answer");
                    
            }

        } else {
            alert("Error answer");

        }
    }
    
}

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


function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
   

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
    
    console.log(`HumanScore: ${humanScore}`)
    console.log(`ComputerScore: ${computerScore}`)
    return humanScore, computerScore;

}

function playGame () {
    let round = 1;
    while (round <= 5) {
        playRound();
        console.log(`Round: ${round}`)
        ++round;
    }
    if (round = 5) {
        if (humanScore > computerScore) {
            console.log("You win!")
        } else if (humanScore < computerScore) {
            console.log("You lose!") 
        } else {
            console.log("You draw!") 
    
        }
    }
    
    


}

// console.log(`Human: ${humanSelection}`)
// console.log(`Computer: ${computerSelection}`)

playGame()
  