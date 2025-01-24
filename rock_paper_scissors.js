function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(random_int){
    if (random_int === 0) {
        return "rock"
    }else if (random_int ===1) {
        return "paper"
    }
    else if (random_int ===2) {
        return "scissors"
    }
}

function getHumanChoice(){
    let humain_choice = prompt("Veuillez faire un choix  : [0] : Rock, [1] : Paper, [2] : Scissors ").toLowerCase()
    if (humain_choice === "0" || humain_choice === "rock") {
        return "rock"
    } else if (humain_choice === "1" || humain_choice === "paper"){
        return "paper"
    } else if (humain_choice === "2" || humain_choice === "scissors") {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice=== "rock" && computerChoice === "scissors"){
        return "You win! Rock beats Scissors"
    } else if (humanChoice=== "scissors" && computerChoice === "rock"){
        return "You lose! Rock beats Scissors"
    } else if (humanChoice=== "paper" && computerChoice === "rock"){
        return "You win! Paper beats Rock"
    } 
    else if (humanChoice=== "rock" && computerChoice === "paper"){
        return "You lose! Paper beats Rock"
    } 
    else if (humanChoice=== "scissors" && computerChoice === "paper"){
        return "You win! Scissors beats Paper"
    } 
    else if (humanChoice=== "paper" && computerChoice === "scissors"){
        return "You lose! Scissors beats Paper"
    } 
    else if (humanChoice === computerChoice){
        return `It's a draw! You both chose ${computerChoice}`
    } 
  }
const gameInfo = document.getElementById("game-info");
gameInfo.innerHTML = "<center>Bienvenue dans Pierre-Papier-Ciseaux</center>";
gameInfo.style.color = "blue";
gameInfo.style.fontFamily = "Arial, sans-serif";
gameInfo.style.textAlign = "center";

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(getRandomInt(3));
  
console.log(`Humain choice : ${humanSelection}`);
console.log(`Computer choice : ${computerSelection }`);
console.log(playRound(humanSelection, computerSelection))
