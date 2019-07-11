"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let stacks = {
	a: [4, 3, 2, 1],
	b: [],
	c: []
};

function printStacks() {
	console.log("a: " + stacks.a);
	console.log("b: " + stacks.b);
	console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
	// Your code here
	// Remove, or pop() the last item of the  array select by startStack
	// stacks[startStack].pop();
	// Move, or push() the item remove from pop() to the location selected by endStack
	// stacks[endStack].push();
	stacks[endStack].push(stacks[startStack].pop());
}

function restart() {
	// Restart puts the board back to the original
	let stacks = {
		a: [4, 3, 2, 1],
		b: [],
		c: []
	};
}

function isLegal(startStack, endStack) {
	// Your code here

	// const starting = stacks[start];
	// const ending = stacks[end];
	// return (
	//   (starting[starting.length - 1] < ending[ending.length - 1] ||
	//     ending.length == 0) &&
	//   starting.length != 0
	// );
	let start = stacks[startStack];
	let end = stacks[endStack];
	if (
		start[start.length - 1] < end[end.length - 1] ||
		(start.length != 0 && end.length == 0)
	) {
		return true;
	} else {
		return false;
	}
}
function checkForWin() {
	// Your code here
	// Checks to see if all numbers are in row b, or in row c
	if (stacks.a.length === 0 && stacks.b.length === 0) {
		return true;
	} else if (stacks.a.length === 0 && stacks.c.length === 0) {
		return true;
	} else {
		return false;
	}
}

function towersOfHanoi(startStack, endStack) {
	// Your code here
	// if (startStack && endStack) {
	if (isLegal(startStack, endStack) == true) {
		movePiece(startStack, endStack);
		if (checkForWin() == true) {
			restart();
		}
	} else {
		console.log("Move is not legal");
	}
}
// }

function getPrompt() {
	printStacks();
	rl.question("start stack: ", startStack => {
		rl.question("end stack: ", endStack => {
			towersOfHanoi(startStack, endStack);
			getPrompt();
		});
	});
}

// Tests

if (typeof describe === "function") {
	describe("#towersOfHanoi()", () => {
		it("should be able to move a block", () => {
			towersOfHanoi("a", "b");
			assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
		});
	});

	describe("#isLegal()", () => {
		it("should not allow an illegal move", () => {
			stacks = {
				a: [4, 3, 2],
				b: [1],
				c: []
			};
			assert.equal(isLegal("a", "b"), false);
		});
		it("should allow a legal move", () => {
			stacks = {
				a: [4, 3, 2, 1],
				b: [],
				c: []
			};
			assert.equal(isLegal("a", "c"), true);
		});
	});
	describe("#checkForWin()", () => {
		it("should detect a win", () => {
			stacks = { a: [], b: [4, 3, 2, 1], c: [] };
			assert.equal(checkForWin(), true);
			stacks = { a: [1], b: [4, 3, 2], c: [] };
			assert.equal(checkForWin(), false);
		});
	});
} else {
	getPrompt();
}
