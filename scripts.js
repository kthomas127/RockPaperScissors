var humanScore = 0;
var computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll(".selection");

function getComputerChoice() {
    return com_rand = Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === -1) {
        console.log("Invalid choice, choose either Rock, Paper, or Scissors"); 
        return;
    }
    const result = (humanChoice - computerChoice + 3) % 3;

    if (result === 0){
        console.log(`Tie! Both chose ${choices[humanChoice]}`);
    } else if (result === 1){
        console.log(`You Won! ${choices[humanChoice]} beats ${choices[computerChoice]}`);
        humanScore ++;
    } else {
        console.log(`You Lose! ${choices[computerChoice]} beats ${choices[humanChoice]}`);
        computerScore ++;
    }
    console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);
}
console.log("Let's play Rock, Paper, Scissors!");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const humanChoice = parseInt(e.target.getAttribute("data-choice"));
        const computerChoice  = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});