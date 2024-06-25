console.log("Hello World!");

let computerChoice;
let computerChoiceString;
let choice = prompt("Rock, Paper or Scissor?")
let humanChoice

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        computerChoiceString = 'Rock'
    } else if (computerChoice === 1) {
        computerChoiceString = 'Paper'
    } else {
        computerChoiceString = 'Scissor'
    }

    console.log("Computer chose: " + computerChoiceString)
    return computerChoiceString;
    
};

function getHumanChoice(choice) {
    while (choice != 'Rock' && choice != "Paper" && choice != "Scissor") {
        console.log("Invalid option")
        choice = prompt("Rock, Paper or Scissor?")
    }

    humanChoice = choice
    console.log("You chose: " + humanChoice)
    return humanChoice
}

getHumanChoice(choice);
getComputerChoice();

