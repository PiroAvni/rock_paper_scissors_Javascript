/** 
MVP

1. USER input
2. validates user input
3. Game logic 
4. determine and display winner


Pseudocode

Prompt for user input
User Inputs
    validate user input
    store user input 
Random CPU choice 
    switch statement to store random value to game logic
    rock = 0, paper = 1, scissors = 2
function to declare  the winner
    if user choice  === CPU choice  = tie
    if user choice > cpu choice  = user wins
    if user choice < cpu choice = cpu wins
display user choice and cpu choice
determine the winner
display winner
*/

const prompt = require("prompt-sync")();
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  // validates user input
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    //console.log(typeof userInput)
    return userInput;
  } else {
    console.log(
      "Your Selection is incorrect. Please select a different selection"
    );
  }
};
//
const getCpuChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber )
  // assigns random number to the logic
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
function getWinner(userChoice, cpuChoice) {
  if (userChoice === cpuChoice) {
    return "Game is a tie";
  }
  if (userChoice === "rock") {
    if (cpuChoice === "paper") {
      return "Computer WON!!!";
    } else {
      return "You Won!!";
    }
  }
  if (userChoice === "paper") {
    if (cpuChoice === "scissors") {
      return "Computer WON!!!";
    } else {
      return "You Won!!";
    }
  }
  if (userChoice === "scissors") {
    if (cpuChoice === "rock") {
      return "Computer WON!!!";
    } else {
      return "You Won!!";
    }
  }
}

const playGame = () => {
  const userChoice = prompt("Please select rock, paper or scissors?");
  getUserChoice(userChoice);
  const cpuChoice = getCpuChoice();
  console.log("\x1b[33m", `You threw: ${userChoice}`, "\x1b[0m");
  console.log("\x1b[0m")
  console.log("\x1b[34m", `The computer threw: ${cpuChoice}`);
  console.log("\x1b[41m", getWinner(userChoice, cpuChoice," \x1b[0m'"));
  console.log("\x1b[0m")
};

playGame();

module.exports = {
  getUserChoice,
  getCpuChoice,
  getWinner,
  playGame,
};
