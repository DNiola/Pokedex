let APIs = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemon;
let currentAPI;

function loadAPIs() {
  for (let t = 1; t < 50; t++) {
    const url = `${APIs}${t}`;
    console.log(url);
    loadPokemon(url, t);
  }
}

async function loadPokemon(url, t) {
  let response = await fetch(url);
  currentPokemon = await response.json();
  console.log("Pokemon:", currentPokemon);
  pokemonFilter(currentPokemon, t);
}

function pokemonFilter(currentPokemon, t) {
  pokeDexHTML.innerHTML += renderAllPokemons(t, currentPokemon);
  renderPokemonInfo(currentPokemon, t);
  document.getElementById(`pokemonTypes${t}`).innerHTML += currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}`).innerHTML += currentPokemon["types"][1]["type"]["name"];
  }
  setDesigns(t)
}

function renderPokemonInfo(currentPokemon, t) {
  document.getElementById(`pokemonID${t}`).innerHTML += "#" + currentPokemon["id"];
  document.getElementById(`pokemonName${t}`).innerHTML += currentPokemon["name"];
  document.getElementById(`pokemonImage${t}`).src += currentPokemon["sprites"]["other"]['dream_world']["front_default"];
}

function renderAllPokemons(t) {
  return `
  <div onclick="openPokemon(${t})" id="pokemonContainer${t}" class="pokedex">
    <div>
      <span id="pokemonID${t}"></span>
      <h1 id="pokemonName${t}"></h1>
    </div>
    <div class="infoContainer">
      <img class="imgSize" id="pokemonImage${t}">
      <span style="color:black" id="pokemonTypes${t}"></span>
      <span style="color:black" id="pokemonTypesX${t}"></span>;
    </div>
  </div>`;
}

async function openPokemon(t) {
  urlRE = APIs + t;
  console.log("URL-RE:", urlRE);
  let response = await fetch(urlRE);
  const currentPokemon = await response.json();
  console.log("Pokemon-RE:", currentPokemon);
  pokeDexHTMLOpen.innerHTML = openPokemonHTML(t);
  renderPokemonInfoOpen(currentPokemon, t);
  setDesignOpenCard(currentPokemon, t)
}


function renderPokemonInfoOpen(currentPokemon, t) {
  document.getElementById("pokeDexHTMLOpen").classList.remove("d-none");
  document.getElementById(`pokemonID${t}Open`).innerHTML += "#" + currentPokemon["id"];
  document.getElementById(`pokemonName${t}Open`).innerHTML += currentPokemon["name"];
  document.getElementById(`pokemonImage${t}Open`).src += currentPokemon["sprites"]["other"]['dream_world']["front_default"];
  document.getElementById(`pokemonTypes${t}Open`).innerHTML += currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}Open`).innerHTML += currentPokemon["types"][1]["type"]["name"];
  }
}

function openPokemonHTML(t) {
  return `
  <div class="pokemonContainerRE">
    <div id="pokemonContainer${t}Open" class="pokedexCard">
      <div>
        <span id="pokemonID${t}Open"></span>
        <h1 id="pokemonName${t}Open"></h1>
      </div>
      <div class="infoContainerOpen">
        <img class="imgSize" id="pokemonImage${t}Open">
        <span style="color:black" id="pokemonTypes${t}Open"></span>
        <span style="color:black" id="pokemonTypesX${t}Open"></span>;
      </div>
      <div id="chart${t}">Chart</div>
    </div>
  </div>
  `;
}
