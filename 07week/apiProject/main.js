const url = "https://pokeapi.co/api/v2/pokemon/"; // + entered pokemon name
const pokemonInput = document.getElementById("pokemonInput");
const submitBtn = document.getElementById("submit");
const battleBtn = document.getElementById("battle");
const win = document.getElementById("winner");
let pokemonOne = [];
let pokemonTwo = [];
let winner;

submitBtn.addEventListener("click", () => {
	let searchedPokemon = url + pokemonInput.value.toLowerCase();
	fetch(searchedPokemon)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			if (pokemonInput.value === "") {
				alert("Please Enter a pokemon's name");
			} else {
				if (pokemonOne.length <= 1) {
					pokemonOne.push(data.name);
					pokemonOne.push(data.weight);
					document.getElementById("pokemonOne").innerText =
						data.name.charAt(0).toUpperCase() + data.name.substring(1);
					pokemonInput.value = "";
					console.log(pokemonOne);
				} else {
					if (pokemonTwo.length <= 1) {
						pokemonTwo.push(data.name);
						pokemonTwo.push(data.weight);
						document.getElementById("pokemonTwo").innerText =
							data.name.charAt(0).toUpperCase() + data.name.substring(1);
						pokemonInput.value = "";
						console.log(pokemonTwo);
					}
				}
			}
			console.log(data);
		});
});
battleBtn.addEventListener("click", () => {
	if (pokemonOne[1] > pokemonTwo[1]) {
		win.innerHTML = `<p><strong>${pokemonOne[0].toUpperCase()}</strong> WINS!</p>`;
		console.log(pokemonOne[0].toUpperCase() + " WINS!");
		restart();
	} else {
		win.innerHTML = `<p><strong>${pokemonTwo[0].toUpperCase()}</strong> WINS!</p>`;
		console.log(pokemonTwo[0].toUpperCase() + " WINS!");
		restart();
	}
	document.getElementById("pokemonOne").innerText = "";
	document.getElementById("pokemonTwo").innerText = "";
});
const restart = () => {
	pokemonOne = [];
	pokemonTwo = [];
};
