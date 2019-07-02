"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";

function printBoard() {
	console.log("   0  1  2");
	console.log("0 " + board[0].join(" | "));
	console.log("  ---------");
	console.log("1 " + board[1].join(" | "));
	console.log("  ---------");
	console.log("2 " + board[2].join(" | "));
}

function horizontalWin() {
	// Your code here
	// checks for all horizontal win conditions
	for (let i = 0; i <= board.length; i++) {
		if (
			board[0][0] == playerTurn &&
			board[0][1] == playerTurn &&
			board[0][2] == playerTurn
		) {
			console.log(playerTurn + " wins");
			return true;
		} else if (
			board[1][0] == playerTurn &&
			board[1][1] == playerTurn &&
			board[1][2] == playerTurn
		) {
			console.log(playerTurn + " wins");
			return true;
		} else if (
			board[2][0] == playerTurn &&
			board[2][1] == playerTurn &&
			board[2][2] == playerTurn
		) {
			console.log(playerTurn + " wins");
			return true;
		} else {
			return false;
		}
	}
}

function verticalWin() {
	// Your code here
	// checks for all vertical win conditions

	for (let i = 0; i <= board.length; i++) {
		if (
			board[0][0] == playerTurn &&
			board[1][0] == playerTurn &&
			board[2][0] == playerTurn
		) {
			console.log(playerTurn + " wins");
			return true;
		} else if (
			board[0][1] == playerTurn &&
			board[1][1] == playerTurn &&
			board[2][1] == playerTurn
		) {
			console.log(playerTurn + " wins");
			return true;
		} else if (
			board[0][2] == playerTurn &&
			board[1][2] == playerTurn &&
			board[2][2] == playerTurn
		) {
			console.log(playerTurn + " wins");
			return true;
		} else {
			return false;
		}
	}
}

function diagonalWin() {
	// Your code here
	// checks for all diagonal win conditions

	for (let i = 0; i <= board.length; i++) {
		if (
			board[0][0] == playerTurn &&
			board[1][1] == playerTurn &&
			board[2][2] == playerTurn
		) {
			console.log(playerTurn + " wins");
			return true;
		} else if (
			board[0][2] == playerTurn &&
			board[1][1] == playerTurn &&
			board[2][0] == playerTurn
		) {
			console.log(playerTurn + " wins");
			return true;
		} else {
			return false;
		}
	}
}

function checkForWin() {
	// check to see if win conditions are true, if conditions are true reset the board
	if (horizontalWin() == true) {
		console.log("horizontal wins");
		resetBoard();
		return true;
	} else if (verticalWin() == true) {
		console.log("vertical wins");
		resetBoard();
		return true;
	} else if (diagonalWin() == true) {
		console.log("diagonal wins");
		resetBoard();
		return true;
	} else {
		return false;
	}
}

function resetBoard() {
	// resets board back to original state
	board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
}

function ticTacToe(row, column) {
	// Your code here

	// Checks if the row and column the user is selected are free or not
	// if spot is taken have user select the row and column again
	// alternate between X and O
	if (board[row][column] === "X" || board[row][column] === "O") {
		console.log("that spot is taken");
	} else {
		board[row][column] = playerTurn;
		checkForWin();
		if (playerTurn === "X") {
			playerTurn = "O";
		} else {
			playerTurn = "X";
		}
	}
}

function getPrompt() {
	printBoard();
	console.log("It's Player " + playerTurn + "'s turn.");
	rl.question("row: ", row => {
		rl.question("column: ", column => {
			ticTacToe(row, column);
			getPrompt();
		});
	});
}

// Tests

if (typeof describe === "function") {
	describe("#ticTacToe()", () => {
		it("should place mark on the board", () => {
			ticTacToe(1, 1);
			assert.deepEqual(board, [
				[" ", " ", " "],
				[" ", "X", " "],
				[" ", " ", " "]
			]);
		});
		it("should alternate between players", () => {
			ticTacToe(0, 0);
			assert.deepEqual(board, [
				["O", " ", " "],
				[" ", "X", " "],
				[" ", " ", " "]
			]);
		});
		it("should check for vertical wins", () => {
			board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
			assert.equal(verticalWin(), true);
		});
		it("should check for horizontal wins", () => {
			board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
			assert.equal(horizontalWin(), true);
		});
		it("should check for diagonal wins", () => {
			board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
			assert.equal(diagonalWin(), true);
		});
		it("should detect a win", () => {
			assert.equal(checkForWin(), true);
		});
	});
} else {
	getPrompt();
}
