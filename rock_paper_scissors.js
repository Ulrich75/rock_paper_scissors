function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(random_int) {
    if (random_int === 0) return "rock";
    if (random_int === 1) return "paper";
    return "scissors";
}

function getHumanChoice() {
    let humain_choice = prompt("Veuillez faire un choix : [0] : Rock, [1] : Paper, [2] : Scissors ");
    if (!humain_choice) return "invalid";
    humain_choice = humain_choice.toLowerCase();
    if (humain_choice === "0" || humain_choice === "rock") return "rock";
    if (humain_choice === "1" || humain_choice === "paper") return "paper";
    if (humain_choice === "2" || humain_choice === "scissors") return "scissors";
    return "invalid";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors")
        return { text: "You win! Rock beats Scissors", score : {humanScore: 1, computerScore : 0}};
    if (humanChoice === "scissors" && computerChoice === "rock")
        return { text: "You lose! Rock beats Scissors",score :{ humanScore: 0, computerScore : 1}};
    if (humanChoice === "paper" && computerChoice === "rock")
        return { text: "You win! Paper beats Rock", score : {humanScore: 1, computerScore : 0}};
    if (humanChoice === "rock" && computerChoice === "paper")
        return { text: "You lose! Paper beats Rock", score : {humanScore: 0, computerScore : 1}};
    if (humanChoice === "scissors" && computerChoice === "paper")
        return { text: "You win! Scissors beats Paper", score : {humanScore: 1, computerScore : 0} };
    if (humanChoice === "paper" && computerChoice === "scissors")
        return { text: "You lose! Scissors beats Paper", score : {humanScore: 0, computerScore : 1}};
    return { text: `It's a draw! You both chose ${computerChoice}` ,score : {humanScore: 0, computerScore : 0}};
}

function playGame(event){
    const computerSelection = getComputerChoice(getRandomInt(3));
    const humanSelection = event.target.id;
    let result = playRound(humanSelection, computerSelection);
    const resultat = document.querySelector("#result")
    const scores = document.querySelector("#scores");

    const div = document.querySelector("#container")
    const div1 = document.querySelector("#container1")

    resultat.textContent = result.text
    scores.textContent = `Human: ${result.score.humanScore} | Computer: ${result.score.computerScore}`;
    div.appendChild(resultat)
    div1.appendChild(scores)
   
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click",playGame)
  });


















/* function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const gameInfo = document.getElementById("game-info");
    gameInfo.innerHTML = "</br></br></br></br></br></br></br><center>Game is playing in the console</center>";
    gameInfo.style.color = "gray";
    gameInfo.style.fontFamily = "Courier New, sans-serif";
    gameInfo.style.textAlign = "center";

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        if (humanSelection === "invalid") {
            console.log("Choix invalide. Vous avez perdu votre tour !");
            continue;
        }
        const computerSelection = getComputerChoice(getRandomInt(3));
        let result = playRound(humanSelection, computerSelection);

        console.log(`Humain : ${humanSelection}, Ordinateur : ${computerSelection}`);
        console.log(result.text);

        if (result.humanScore) humanScore += result.humanScore;
        if (result.computerScore) computerScore += result.computerScore;
    }

    console.log(`Scores finaux : Humain - ${humanScore}, Ordinateur - ${computerScore}`);
} */
