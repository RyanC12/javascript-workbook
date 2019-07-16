"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function printBoard() {
	for (let i = 0; i < board.length; i++) {
		console.log(board[i]);
	}
}

function generateSolution() {
	for (let i = 0; i < 4; i++) {
		const randomIndex = getRandomInt(0, letters.length);
		solution += letters[randomIndex];
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// function validInput(guess){
// let isValid = true;
// if(!guessArr.includes()){ isValid=flase}
// }
// if guessArr does not include [a,b,c,d,e,f,g.h] turn it to false

function generateHint(guess) {
	// your code here

	// create a variable for a count of correct letters and letters in the correct location
	let correctLetterLocations = 0;
	let correctLetters = 0;
	// turn the string in solution and guess into an array
	let solutionArray = solution.split("");
	let guessArray = guess.split("");

	// loop through and compare solutionArray with guessArray and see if the same letters are in the same index
	for (let i = 0; i < solutionArray.length; i++) {
		if (solutionArray[i] === guessArray[i]) {
			// add to correctletterLocations for each letter in the correct location
			correctLetterLocations++;
			solutionArray[i] = null;
			console.log(solutionArray[i]);
		}
	}
	// loop through and compare solutionArray with guessArray and see if the arrays have the same letters
	for (let j = 0; j < solutionArray.length; j++) {
		if (guessArray.indexOf(solutionArray[j]) > -1) {
			// add to correctletters for each letter in guessArray that matches a letter in correctLetterLocations
			correctLetters++;
			solutionArray[j] = null;
		}
	}
	return correctLetterLocations + "-" + correctLetters;
}

function mastermind(guess) {
	solution = "abcd"; // Comment this out to generate a random solution
	// your code here
	let hint = generateHint(guess);
	let gameOver = "You ran out of turns! The solution was " + solution;

	if (guess === solution) {
		// console.log('You guessed it!')

		return "You guessed it!";
	} else {
		console.log(hint);
		board.push(guess + "-" + hint);
	}
	if (board.length == 10) {
		console.log(gameOver);
		return gameOver;
	} else {
		console.log("Guess again.");
		return "Guess again.";
	}
}

function getPrompt() {
	rl.question("guess: ", guess => {
		mastermind(guess);
		printBoard();
		getPrompt();
	});
}

// Tests

if (typeof describe === "function") {
	solution = "abcd";
	describe("#mastermind()", () => {
		it("should register a guess and generate hints", () => {
			mastermind("aabb");
			assert.equal(board.length, 1);
		});
		it("should be able to detect a win", () => {
			assert.equal(mastermind(solution), "You guessed it!");
		});
	});

	describe("#generateHint()", () => {
		it("should generate hints", () => {
			assert.equal(generateHint("abdc"), "2-2");
		});
		it("should generate hints if solution has duplicates", () => {
			assert.equal(generateHint("aabb"), "1-1");
		});
	});
} else {
	generateSolution();
	getPrompt();
}
