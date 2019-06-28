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
	for (i = 0; i <= board.length; i++) {
		if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
			console.log("X wins");
		}
		if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
			console.log("X wins");
		}
		if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
			console.log("X wins");
		} else if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") {
			console.log("O wins");
		}
		if (board[1][0] == "O" && board[2][1] == "O" && board[1][2] == "O") {
			console.log("O wins");
		}
		if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
			console.log("O wins");
		}
	}
}

function verticalWin() {
	// Your code here
	if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
		console.log("X wins");
	}
	if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
		console.log("X wins");
	}
	if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
		console.log("X wins");
	} else if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
		console.log("O wins");
	}
	if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
		console.log("O wins");
	}
	if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
		console.log("O wins");
	} else {
		diagonalWin();
	}
}

function diagonalWin() {
	// Your code here
	if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
		console.log("X wins");
	}
	if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
		console.log("X wins");
	} else if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
		console.log("O wins");
	}
	if (board[0][2] == "O" && board[1][1] == "X" && board[2][0] == "O") {
		console.log("O wins");
	} else {
		checkForWin();
	}
}

function checkForWin() {
	if (horizontalWin() == true) {
		return horizontalWin();
	} else if (verticalWin() == true) {
		return verticalWin();
	} else if (diagonalWin() == true) {
		return diagonalWin();
	}
	// Your code here
	//horizontal, vert, diag
}

function ticTacToe(row, column) {
	// Your code here
	// switchplayer, validmove,invalid
	//order
	// is valid(place x or o)
	// check for win
	// switch player
}

// isValidSpace() is the move allowed
// inNotValid()
// if(!board[1][1])
// if(board[1][1])
// if(current ==)

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
