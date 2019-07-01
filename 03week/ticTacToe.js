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
	for (let i = 0; i <= board.length; i++) {
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
	for (let i = 0; i <= board.length; i++) {
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
		}
	}
}

function diagonalWin() {
	// Your code here
	for (let i = 0; i <= board.length; i++) {
		if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
			console.log("X wins");
		}
		if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
			console.log("X wins");
		} else if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
			console.log("O wins");
		}
		if (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") {
			console.log("O wins");
		}
	}
}

function checkForWin() {
	// horizontalWin();
	// verticalWin();
	// diagonalWin();
	if (horizontalWin() == true) {
		console.log("horizontal wins");
	} else if (verticalWin() == true) {
		console.log("vertical wins");
	} else if (diagonalWin() == true) {
		console.log("diagonal wins");
	} else {
		getPrompt();
	}
	// Your code here
	//horizontal, vert, diag
}
// function marker(row, column) {
// 	if (row == 0 && column == 0) {
// 		board[0][0] = playerTurn;
// 		return;
// 	}
// }
// function switchPlayer() {
// 	if (playerTurn === "X") {
// 		playerTurn = "O";
// 	} else {
// 		playerTurn = "X";
// 	}
// }

function isSpotValid() {
	// check if slot is available
	if (board[0][0] == "X" || "O") {
	}
	if (board[0][1] == "X" || "O") {
	}
	if (board[0][2] == "X" || "O") {
	}
	if (board[1][0] == "X" || "O") {
	}
	if (board[1][1] == "X" || "O") {
	}
	if (board[1][2] == "X" || "O") {
	}
	if (board[2][0] == "X" || "O") {
	}
	if (board[2][1] == "X" || "O") {
	}
	if (board[2][2] == "X" || "O") {
	}
}

function ticTacToe(row, column) {
	// Your code here
	// switchplayer, validmove,invalid
	//order
	// is valid(place x or o)
	// check for win
	// switch player

	checkForWin();

	if (row == 0 && column == 0) {
		board[0][0] = playerTurn;
	}
	if (row == 0 && column == 1) {
		board[0][1] = playerTurn;
	}
	if (row == 0 && column == 2) {
		board[0][2] = playerTurn;
	}
	if (row == 1 && column == 0) {
		board[1][0] = playerTurn;
	}
	if (row == 1 && column == 1) {
		board[1][1] = playerTurn;
	}
	if (row == 1 && column == 2) {
		board[1][2] = playerTurn;
	}
	if (row == 2 && column == 0) {
		board[2][0] = playerTurn;
	}
	if (row == 2 && column == 1) {
		board[2][1] = playerTurn;
	}
	if (row == 2 && column == 2) {
		board[2][2] = playerTurn;
	}
	if (playerTurn === "X") {
		playerTurn = "O";
	} else {
		playerTurn = "X";
	}
	if (checkForWin() == true) {
		return;
	}
}

// function isNotValid() {
// 	// if (board[][] == "X" || board[][] == "O")
// }

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
