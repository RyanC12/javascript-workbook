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

// list people in "List of People"
const listPeopleChoices = () => {
	const listElement = document.getElementById("people");
	arrOfPeople.map(person => {
		const li = document.createElement("li");
		const button = document.createElement("button");
		button.innerHTML = "Make Player";
		button.addEventListener("click", function() {
			makePlayer(person);
		});
		li.appendChild(button);
		li.appendChild(document.createTextNode(person.name + " - " + person.age));
		listElement.append(li);
	});
};

const makePlayer = player => {
	console.log(`li ${player.name} was clicked!`);
	const li = document.createAttribute("li");
	if (!listOfPlayers.includes(player.name)) {
		listOfPlayers.push(new Array(player.name + " " + player.age));
		console.log(listOfPlayers);
	} else {
		alert("Player Already Exists!");
	}
};

const listPlayerChoices = () => {
	const playerList = document.getElementById("players");
	listOfPlayers.map(player => {
		console.log(player);
		const li = document.createElement("li");
		const button = document.createElement("button");
		button.innerHTML = "Choose Team";
		button.addEventListener("click", function() {
			chooseTeam(player);
		});
		li.appendChild(button);
		li.appendChild(document.createTextNode(player[0]));
		playerList.appendChild(li);
	});
};
let r = 0;
let b = 0;
let teamToggle = false; // false red blue true
const chooseTeam = player => {
	const red = document.getElementById("red");
	const blue = document.getElementById("blue");
	const li = document.createElement("li");
	if (!teamToggle) {
		redTeam.push(player);
		li.appendChild(document.createTextNode(redTeam[r]));
		red.appendChild(li);
		teamToggle = true;
		r++;
		console.log(teamToggle);
	} else if (teamToggle) {
		blueTeam.push(player);
		li.appendChild(document.createTextNode(blueTeam[b]));
		blue.appendChild(li);
		teamToggle = false;
		b++;
		console.log(blueTeam);
	}
};
