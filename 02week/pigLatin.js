// "use strict";

// const assert = require("assert");
// const readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

let input = document.getElementById("input");
let output = document.querySelector("p");
let btn = document.querySelector("#button");

function pigLatin(word) {
	// Your code here
	word = input.value;
	// Remove white space and convert to lower case
	word = word.replace(/\s/gi, "").toLowerCase();
	const vowel = ["a", "e", "i", "o", "u"];
	let result = word.split("");

	if (vowel.includes(word[0])) {
		word += "yay";
		console.log((word += "yay"));
	} else {
		for (var i = 0; i < word.length; i++)
			if (!vowel.includes(word[i])) {
				result.push(result.shift());
				result.push("ay");
				break;
			} else {
			}
	}
	output.innerHTML = result.join("");
}
btn.addEventListener("click", pigLatin());

function getPrompt() {
	rl.question("word ", answer => {
		console.log(pigLatin(answer));
		getPrompt();
	});
}
// Tests

// if (typeof describe === "function") {
// 	describe("#pigLatin()", () => {
// 		it("should translate a simple word", () => {
// 			assert.equal(pigLatin("car"), "arcay");
// 			assert.equal(pigLatin("dog"), "ogday");
// 		});
// 		it("should translate a complex word", () => {
// 			assert.equal(pigLatin("create"), "eatecray");
// 			assert.equal(pigLatin("valley"), "alleyvay");
// 		});
// 		it('should attach "yay" if word begins with vowel', () => {
// 			assert.equal(pigLatin("egg"), "eggyay");
// 			assert.equal(pigLatin("emission"), "emissionyay");
// 		});
// 		it("should lowercase and trim word before translation", () => {
// 			assert.equal(pigLatin("HeLlO "), "ellohay");
// 			assert.equal(pigLatin(" RoCkEt"), "ocketray");
// 		});
// 	});
// } else {
// 	getPrompt();
// }
