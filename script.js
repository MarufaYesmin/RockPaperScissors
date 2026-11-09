
// Initial Scores
let userScore = 0;
let compScore = 0;


// Select HTML Elements
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");


// Generate Computer Choice
const getCompChoice = () => {

    const options = ["rock", "paper", "scissors"];

    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];

};


// Draw Game
const drawGame = () => {

    msg.innerText = "Game was Draw! Play Again";

    msg.style.backgroundColor = "black";

};


// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {

        userScore++;

        userScorePara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;

        msg.style.backgroundColor = "green";

    }

    else {

        compScore++;

        compScorePara.innerText = compScore;

        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;

        msg.style.backgroundColor = "red";

    }

};


// Play Game
const playGame = (userChoice) => {

    console.log("User Choice =", userChoice);

    // Generate Computer Choice
    const compChoice = getCompChoice();

    console.log("Computer Choice =", compChoice);


    // Check Draw
    if (userChoice === compChoice) {

        drawGame();

    }

    else {

        let userWin = true;

        if (userChoice === "rock") {

            // Rock beats Scissors
            userWin = compChoice === "scissors";

        }

        else if (userChoice === "paper") {

            // Paper beats Rock
            userWin = compChoice === "rock";

        }

        else {

            // Scissors beats Paper
            userWin = compChoice === "paper";

        }


        // Show Winner
        showWinner(userWin, userChoice, compChoice);

    }

};


// Add Click Events
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);

    });

});
