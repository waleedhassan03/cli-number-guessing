#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number - done
// 2) user input for guessing a random number - done
// 3) compare user input with computer generated number and show the result

const randonNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1 to 6: ",
  },
]);

if (answers.userGuessedNumber == randonNumber) {
  console.log("Congratulations! You have guessed the right number.");
} else {
  console.log("You have guessed wrong number.");
}
