let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");
let resultado = document.querySelector("#result");
let userScore = document.querySelector("#userScore");
let pcScore = document.querySelector("#pcScore");
let player = document.querySelectorAll(".op p");

let computerResponse;
let userScoreValue = 0;
let pcScoreValue = 0;

// Options to be chosen
let options = ["rock", "paper", "scissors"];

// Events
rock.addEventListener("click", getResult);
paper.addEventListener("click", getResult);
scissor.addEventListener("click", getResult);

function getResult(e) {
  removeClass(rock, paper, scissor);
  removePlayerName();
  let userValue = e.target.id;
  let pcValue = randomNum();
  let getDrawResultUser;
  let getDrawResultPc;
  let result;

  //   If draw
  if (userValue === pcValue.option) {
    getDrawResultUser = checkDraw(userValue);
    getDrawResultPc = checkDraw(pcValue.option);
    addClass(getDrawResultUser, getDrawResultPc);
    addPlayerName(pcValue.number, pcValue.number);
    result = "Draw";
    resultado.innerHTML = `<h1>${result}</h1>`;
  }
  //   If rock and paper
  else if (userValue === "rock" && pcValue.option === "paper") {
    addClass(rock, paper);
    addPlayerName(0, pcValue.number);
    pcScoreValue += 1;
    pcScore.innerHTML = pcScoreValue;
    result = "Defeat";
    resultado.innerHTML = `<h1>${result}</h1>`;
  }
  //   If rock and scissors
  else if (userValue === "rock" && pcValue.option === "scissors") {
    addClass(scissor, rock);
    addPlayerName(0, pcValue.number);
    userScoreValue += 1;
    userScore.innerHTML = userScoreValue;
    result = "Win";
    resultado.innerHTML = `<h1>${result}</h1>`;
  }
  //   If paper and rock
  else if (userValue === "paper" && pcValue.option === "rock") {
    addClass(paper, rock);
    addPlayerName(1, pcValue.number);
    userScoreValue += 1;
    userScore.innerHTML = userScoreValue;
    result = "Win";
    resultado.innerHTML = `<h1>${result}</h1>`;
  }
  //   If paper and scissors
  else if (userValue === "paper" && pcValue.option === "scissors") {
    addClass(paper, scissor);
    addPlayerName(1, pcValue.number);
    pcScoreValue += 1;
    pcScore.innerHTML = pcScoreValue;
    result = "Defeat";
    resultado.innerHTML = `<h1>${result}</h1>`;
  }
  //   If scissors and paper
  else if (userValue === "scissors" && pcValue.option === "paper") {
    addClass(scissor, paper);
    addPlayerName(2, pcValue.number);
    userScoreValue += 1;
    userScore.innerHTML = userScoreValue;
    result = "Win";
    resultado.innerHTML = `<h1>${result}</h1>`;
  }
  //   If scissors and rock
  else if (userValue === "scissors" && pcValue.option === "rock") {
    addClass(scissor, rock);
    addPlayerName(2, pcValue.number);
    pcScoreValue += 1;
    pcScore.innerHTML = pcScoreValue;
    result = "Defeat";
    resultado.innerHTML = `<h1>${result}</h1>`;
  }

  //   Check scores
  winner(userScoreValue, pcScoreValue);
}

// return a random number and the option got in array options
function randomNum() {
  let num = Math.floor(Math.random() * (2 - 0 + 1));
  computerResponse = options[num];
  return {
    number: num,
    option: computerResponse,
  };
}

// Add class to elements
function addClass(elemento1, elemento2) {
  elemento1.classList.add("active-choose");
  elemento2.classList.add("active-choose");
}

// Remove class from all elements
function removeClass(elemento1, elemento2, elemento3) {
  elemento1.classList.remove("active-choose");
  elemento2.classList.remove("active-choose");
  elemento3.classList.remove("active-choose");
}

// Add the player name to chosen option
function addPlayerName(youIndex, pcIndex) {
  player[pcIndex].innerHTML = "Computer";
  player[youIndex].innerHTML = "You";
}

// Remove all players name
function removePlayerName() {
  for (let i = 0; i < player.length; i++) {
    player[i].innerHTML = "";
  }
}

// return the element chosen when is the same for both players
function checkDraw(value) {
  if (value === "rock") {
    return rock;
  } else if (value === "paper") {
    return paper;
  } else {
    return scissor;
  }
}

// return the winner when scores achive 10
function winner(scoreUser, scorePc) {
  // If win
  if (scoreUser === 10) {
    alert(`YOU WIN!!! \n\n You: ${scoreUser} \n  Computer: ${scorePc}`);
    userScoreValue = 0;
    pcScoreValue = 0;
    pcScore.innerHTML = 0;
    userScore.innerHTML = 0;
    removeClass(rock, paper, scissor);
    removePlayerName();
    resultado.innerHTML = "";
  }
  //   If lose
  else if (scorePc === 10) {
    alert(`YOU LOST!!! \n\n You: ${scoreUser} \n Computer: ${scorePc}`);
    userScoreValue = 0;
    pcScoreValue = 0;
    pcScore.innerHTML = 0;
    userScore.innerHTML = 0;
    removeClass(rock, paper, scissor);
    removePlayerName();
    resultado.innerHTML = "";
  }
}
