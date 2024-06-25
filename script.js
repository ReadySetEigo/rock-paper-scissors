console.log("Hello World!");

let computerChoice;
let computerChoiceString;
let choice = prompt("Rock, Paper or Scissor?")
let humanChoice
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        computerChoiceString = 'Rock'
    } else if (computerChoice === 1) {
        computerChoiceString = 'Paper'
    } else {
        computerChoiceString = 'Scissor'
    }

    computerChoiceString = computerChoiceString.toLowerCase()

    console.log("Computer chose: " + computerChoiceString)
    return computerChoiceString;
    
};

function getHumanChoice(choice) {
    choice = choice.toLowerCase()
    while (choice != 'rock' && choice != "paper" && choice != "scissor") {
        console.log("Invalid option")
        choice = prompt("Rock, Paper or Scissor?")
    }

    humanChoice = choice
    console.log("You chose: " + humanChoice)
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You both chose " + humanChoice + ". It's a tie!")
    } else {
        console.log("Test case")
    }
}
 
getHumanChoice(choice);
getComputerChoice();

console.log(humanChoice)
console.log(computerChoiceString)
playRound(humanChoice, computerChoiceString);