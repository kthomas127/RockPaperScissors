var humanScore = 0;
var computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll(".selection");
const div = document.querySelector("div");
const p = document.createElement("p");

function getComputerChoice() {
    return com_rand = Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === -1) {
        console.log("Invalid choice, choose either Rock, Paper, or Scissors"); 
        return "Invalid choice";
    }
    const result = (humanChoice - computerChoice + 3) % 3;

    if (result === 0){
        return (`Tie! Both chose ${choices[humanChoice]}`);
    } else if (result === 1){
        humanScore ++;
        return (`You Won! ${choices[humanChoice]} beats ${choices[computerChoice]}`);
    } else {
        computerScore ++;
        return (`You Lose! ${choices[computerChoice]} beats ${choices[humanChoice]}`);
    }
}
// console.log("Let's play Rock, Paper, Scissors!");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const humanChoice = parseInt(e.target.getAttribute("data-choice"));
        const computerChoice  = getComputerChoice();
        
        const result = playRound(humanChoice, computerChoice);

        p.textContent = `${result} Your score: ${humanScore} Computer Score: ${computerScore}`;
        div.append(p);
    });
});

