const arrOfPeople = [
	{
		id: 2,
		name: "Charles Young",
		age: 55,
		skillSet: "welding",
		placeBorn: "Omaha, Nebraska"
	},
	{
		id: 3,
		name: "Judy Twilight",
		age: 35,
		skillSet: "fishing",
		placeBorn: "Louisville, Kentucky"
	},
	{
		id: 4,
		name: "Cynthia Doolittle",
		age: 20,
		skillSet: "tic tac toe",
		placeBorn: "Pawnee, Texas"
	},
	{
		id: 5,
		name: "John Willouby",
		age: 28,
		skillSet: "pipe fitting",
		placeBorn: "New York, New York"
	},
	{
		id: 6,
		name: "Stan Honest",
		age: 20,
		skillSet: "boom-a-rang throwing",
		placeBorn: "Perth, Australia"
	},
	{
		id: 7,
		name: "Mia Watu",
		age: 17,
		skillSet: "acrobatics",
		placeBorn: "Los Angeles, California"
	},
	{
		id: 8,
		name: "Walter Cole",
		age: 32,
		skillSet: "jump rope",
		placeBorn: "New Orleans, Louisiana"
	}
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
	constructor(person) {
		this.person = person;
	}
}
class BlueTeammate extends Player {
	constructor(player) {
		super(player.person);
		this.color = "blue";
	}
}
class RedTeammate extends Player {
	constructor(Player) {
		super(player.person);
		this.color = "red";
	}
}

const listPeopleChoices = () => {
	const listElement = document.getElementById("people");
	arrOfPeople.map(person => {
		const li = document.createElement("li");
		const button = document.createElement("button");
		button.innerHTML = "Make Player";
		button.addEventListener("click", function() {
			makePlayer(person.id);
		});
		li.appendChild(button);
		li.appendChild(
			document.createTextNode(person.name + " - " + person.skillSet)
		);
		listElement.append(li);
	});
};

const makePlayer = id => {
	console.log(`li ${id} was clicked!`);
	arrOfPeople.forEach(person => {
		if (person.id === id) {
			let dodgeBallPlayer = new Player(person);
			listOfPlayers.push(dodgeBallPlayer);
			arrOfPeople.splice(arrOfPeople.indexOf(dodgeBallPlayer), 1);
			newListOfPeople();
		}
	});
};

function newListOfPeople() {
	document.getElementById("players").innerHTML = "";
	listOfPlayers.map(player => {
		const playerElement = document.getElementById("players");
		const li = document.createElement("li");
		const redButton = document.createElement("button");
		const blueButton = document.createElement("button");

		redButton.innerHTML = "Red Team";
		redButton.addEventListener("click", function() {
			red(player.person.id);
		});
		li.appendChild(redButton);

		blueButton.innerHTML = "Blue Team";
		blueButton.addEventListener("click", function() {
			blueTeam(player.person.id);
		});
		li.appendChild(blueButton);

		li.appendChild(document.createTextNode(player.person.name));

		playerElement.append(li);
	});
	console.log(listOfPlayers);
}

function blueTeam(id) {
	console.log(`li ${id} was clicked`);
	listOfPlayers /
		forEach(person => {
			if (person.id === id) {
				let bluePlayer = new BlueTeammate(person);
				BlueTeammate.push(bluePlayer);
				listOfPlayers.splice(listOfPlayers.indexOf(bluePlayer), 1);
			}
		});
}

// function blueTeam(id) {
// 	document.getElementById("blue").innerHTML = "";

// 	BlueTeammate.map(player => {
// 		const blueElement = document.getElementById("blue");
// 		const li = document.createElement("li");

// 		const blueButton = document.createElement("button");
// 		blueButton.addEventListener("click", function() {
// 			blueteam(player.person.id);
// 		});
// 		li.appendChild(blueButton);

// 		li.appendChild(document.createTextNode(player.person.name));
// 		blueElement.append(li);
// 	});
// }

// function redTeam() {}
