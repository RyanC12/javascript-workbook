"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function pigLatin(word) {
	// Your code here
	// Remove white space and convert to lower case
	word = word.toLowerCase();
	const vowel = ["a", "e", "i", "o", "u"];
	result = word.split("");

	if (vowel.includes(word[0])) {
		return word + "yay";
	} else {
		for (var i = 0; i < word.length; i++)
			if (!vowel.includes(word[i])) {
				result.push(result.shift());
			} else {
				result.push("ay");
				return result.join("");
			}
	}
}

// i = word.split("");
// i.push(i.splice(0,1)+"ay");
// word=i.join('');
// return word
// pigLatin('car') //=> 'arcay'
// // pigLatin('create') //=> 'eatecray'
// // pigLatin('pony') //=> 'onypay'
// // pigLatin('egg') //=> 'eggyay'

// // identify what a vowel is
// const vowel = ["a", "e". "i", "o", "u"]

// // create a for loop
//   // if statment to add yay if the first letter is a vowel
//   // else if statment to add ay to the
// // have each letter moved to the back of the string until a vowel is the first letter. Using push()
// // for loop to run the length of vowel
// for (var i = 0, i <= vowel.length, i++){
//   if(word == )
// }

function getPrompt() {
	rl.question("word ", answer => {
		console.log(pigLatin(answer));
		getPrompt();
	});
}

// Tests

if (typeof describe === "function") {
	describe("#pigLatin()", () => {
		it("should translate a simple word", () => {
			assert.equal(pigLatin("car"), "arcay");
			assert.equal(pigLatin("dog"), "ogday");
		});
		it("should translate a complex word", () => {
			assert.equal(pigLatin("create"), "eatecray");
			assert.equal(pigLatin("valley"), "alleyvay");
		});
		it('should attach "yay" if word begins with vowel', () => {
			assert.equal(pigLatin("egg"), "eggyay");
			assert.equal(pigLatin("emission"), "emissionyay");
		});
		it("should lowercase and trim word before translation", () => {
			assert.equal(pigLatin("HeLlO "), "ellohay");
			assert.equal(pigLatin(" RoCkEt"), "ocketray");
		});
	});
} else {
	getPrompt();
}
