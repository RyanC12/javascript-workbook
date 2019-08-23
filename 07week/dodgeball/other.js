const listofPlayers = [];
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
	constructor(player) {
		super(player.person);
		this.color = "red";
	}
}

const listPeopleChoices = () => {
	const listElement = document.getElementById("people");
	arrOfPeople.map(person => {
		const li = document.createElement("li");
		const button = document.createElement("button");
		button.innerHTML = "Make a Player";
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

function makePlayer(id) {
	console.log(`li ${id} was clicked`);
	arrOfPeople.forEach(person => {
		if (person.id === id) {
			let newplayer = new Player(person);
			listofPlayers.push(newplayer);
			console.log(listofPlayers);
			console.log(arrOfPeople, "before");
			arrOfPeople.splice(arrOfPeople.indexOf(newplayer), 1);
			console.log(arrOfPeople, "after");
			listPlayer();
		}
	});
}

function listPlayer() {
	document.getElementById("players").innerHTML = "";

	listofPlayers.map(player => {
		const listPlayerEle = document.getElementById("players");
		const li = document.createElement("li");

		const redButton = document.createElement("button");
		redButton.innerHTML = "Red Team";
		redButton.addEventListener("click", function() {
			redTeam(player.person.id);
		});
		li.appendChild(redButton);

		const blueButton = document.createElement("button");
		blueButton.innerHTML = "Blue Team";
		blueButton.addEventListener("click", function() {
			blueteam(player.person.id);
		});
		li.appendChild(blueButton);

		li.appendChild(document.createTextNode(player.person.name));
		console.log(li, "test");
		listPlayerEle.append(li);
	});
}

//this doesnt work yet
function blueteam(id) {
	console.log("I'M BLUE");
	blueTeam.push(listofPlayers[id - 2]);

	document.getElementById("blue").innerHTML = "";

	blueteam.map(player => {
		const blueRoster = document.createElement("li");
		blueRoster.append(li);
		console.log(blueRoster);
	});
}
