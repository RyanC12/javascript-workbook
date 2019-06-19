let date = new Date();
console.log("Todays date is " + date);

let numToString = 7;
let conv = numToString.toString(10);
console.log(conv);

let stringToNum = "7";
let constn = parseInt(stringToNum);
console.log(constn);

let a = 1;
let b = 2;
let c = 3;
let d = 4;

console.log(a + b);

if (a > b && c > d) {
	console.log("Both are TRUE");
} else if (a > b || c > d) {
	console.log("One of these is TRUE");
} else {
	console.log("Neither is TRUE");
}

var myBool = true;
function isTypeOf(data) {
	return console.log(typeof data);
}
isTypeOf(myBool);

var myNaN = NaN;
function isTypeOf(data) {
	return console.log(typeof data);
}
isTypeOf(myNaN);

var myNull = null;
function isTypeOf(data) {
	return console.log(typeof data);
}
isTypeOf(myNull);

var myUndefined = undefined;
function isTypeOf(data) {
	return console.log(typeof data);
}
isTypeOf(myUndefined);

var myNumber = 8;
function isTypeOf(data) {
	return console.log(typeof data);
}
isTypeOf(myNumber);

var myString = "This is a string!";
function isTypeOf(data) {
	return console.log(typeof data);
}
isTypeOf(myString);
