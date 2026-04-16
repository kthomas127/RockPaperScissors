var humanScore = 0;
var computerScore = 0;
function getComputerChoice() {
    // Generate a random number between 0 and 2 inclusive
    let com_rand = Math.floor(Math.random() * 3);
    return com_rand;
}

function getHumanChoice() {
    //Initialize 0, 1, 2 for user choice
    let convertUserChoice;
    //ask prompt and take user choice
    let u_choice = (prompt("What is your choice?")).toLowerCase();
    if (u_choice === "rock") {convertUserChoice = 0;}
    else if (u_choice === "paper") {convertUserChoice = 1;}
    else if (u_choice === "scissors") {convertUserChoice = 2;}
    else return -1;
    return convertUserChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === -1) {console.alert("Invalid choice, choose either Rock, Paper, or Scissors"); return;}
    else {
        if (humanChoice === computerChoice) {
            alert("Tie!");
        } else if (humanChoice === 0) {
            if (computerChoice === 1) {
                alert("You Lost! Paper beats Rock!");
                computerScore += 1;
            } else{
                alert("You Won! Rock beats Scissors!");
                humanScore += 1;
            }
        } else if (humanChoice === 1) {
            if (computerChoice === 2) {
                alert("You Lost! Scissors beats Paper!");
                computerScore += 1;
            } else{
                alert("You Won! Paper beats Rock!");
                humanScore += 1;
            }
        }else {
            if (computerChoice === 2) {
                alert("You Lost! Rock beats Scissors!");
                computerScore += 1;
            } else{
                alert("You Won! Scissors beats Paper!");
                humanScore += 1;
            }
        }
    }
    alert("Your Score: " + humanScore + "\nComputer Score: " + computerScore);
}
console.log("Let's play Rock, Paper, Scissors!");
for (let i=1; i <= 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice  = getComputerChoice();
    playRound(humanChoice, computerChoice);
}