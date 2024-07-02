console.log("Welcome to Battle of the Elements: Rock, Paper, Scissor Showdown");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    let computerChoice = Math.floor(Math.random() * 3);
    let computerChoiceString = choices[computerChoice];
    computerChoice = Math.floor(Math.random() * 3)

    console.log("Computer chose: " + computerChoiceString);
    return computerChoiceString;
    
};

function getHumanChoice() {
    let choice 
    do {
        choice = prompt("Rock, Paper or Scissor?")
        if (choice) {
            choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase()
        }
        if (choice !== undefined && !['Rock','Paper','Scissor'].includes(choice)) {
            console.log("Invalid option. Please try again.")
        }
    } while (!choice || !['Rock', 'Paper', 'Scissor'].includes(choice));

    console.log("You chose: " + choice)
    return choice
    }


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`You both chose ${humanChoice}. It's a tie!`);
        } else if (
            (humanChoice === 'Scissor' && computerChoice === 'Rock') ||
            (humanChoice === 'Rock' && computerChoice === 'Paper')   ||
            (humanChoice === 'Paper' && computerChoice === 'Scissor')
        ) {
            console.log(`${computerChoice} beats ${humanChoice}: You lose!`) 
            computerScore += 1;
        } else {
            console.log(`${humanChoice} beats ${computerChoice}: You win!`)
            humanScore += 1;
        }
    }

    while (roundCount < 5 || humanScore == computerScore) {
        roundCount += 1
        console.log(`Round ${roundCount}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer's score: ${computerScore}`);
    }

    if (computerScore > humanScore) {
        console.log("You lose! The computer has a higher score.")
    }
    else {
        console.log("You win! You have the highest score!")
    }
}

playGame();