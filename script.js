let currentPokemon;
let currentAPI;

async function loadPokemon() {
  let APIs = "https://pokeapi.co/api/v2/pokemon/";
  for (let t = 10; t < 11; t++) {
    const API = `${APIs}${t}`;
    console.log(API);
    let response = await fetch(API);
    currentPokemon = await response.json();
    console.log("Pokemon:", currentPokemon);
   pokemonFilter(currentPokemon, t)
  }
}

function pokemonFilter(currentPokemon, t) {

  if (currentPokemon['types']['length'] == 2) {
    document.getElementById(`pokemonTypesX${t}`).innerHTML += currentPokemon["types"][0]['type']['name'];
    document.getElementById(`pokemonTypes${t}`).innerHTML += currentPokemon["types"][1]['type']['name'];
} else {
  document.getElementById(`pokemonTypesX${t}`).innerHTML += currentPokemon["types"][0]['type']['name'];
}
  pokeDexHTML.innerHTML += renderAllPokemons(t, currentPokemon);
  renderPokemonInfo(currentPokemon, t);
}

function renderPokemonInfo(currentPokemon, t) {
  document.getElementById(`pokemonID${t}`).innerHTML += "#" + currentPokemon["id"];
  document.getElementById(`pokemonName${t}`).innerHTML += currentPokemon["name"];
  document.getElementById(`pokemonImage${t}`).src += currentPokemon["sprites"]["front_shiny"];
}

function renderAllPokemons(t) {
  return `
  <div id="pokemonContainer${t}"class="pokedex">
    <div>
      <span id="pokemonID${t}"></span>
      <h1 id="pokemonName${t}"></h1>
    </div>
    <div class="infoContainer">
      <img id="pokemonImage${t}">
      <span style="color:black" id="pokemonTypes${t}"></span>
      <span style="color:black" id="pokemonTypesX${t}"></span>;
    </div>
  </div>`;
}

