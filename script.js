let APIs = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemon;
let currentAPI;
let pokemonName;
let NumberOfUrl = ["0"];


async function loadAPIs()  {
    for (let t = 1; t < 31; t++) {
      const url = `${APIs}${t}`;
      NumberOfUrl.push(url);
      console.log(url);
      await loadPokemon(url, t);
  }
}

async function loadPokemon(url, t) {
  let response = await fetch(url);
  currentPokemon = await response.json();
  console.log("Pokemon:", currentPokemon);
  pokemonFilter(currentPokemon, t);
}

function pokemonFilter(currentPokemon, t) {
  pokeDexHTML.innerHTML += renderAllPokemons(t);
  renderPokemonInfo(currentPokemon, t);
  proofDesigns(currentPokemon, t);
  proofAndSetCurrentPokemonTypes(currentPokemon, t);
}

function renderPokemonInfo(currentPokemon, t) {
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonImage${t}`).src = imageUrl;
  document.getElementById(`pokemonID${t}`).innerHTML =
    "#" + currentPokemon["id"];
  document.getElementById(`pokemonName${t}`).innerHTML = currentPokemon["name"];
}

async function openPokemon(t) {
  urlRE = APIs + t;
  console.log("URL-RE:", urlRE);
  let response = await fetch(urlRE);
  const currentPokemon = await response.json();
  console.log("Pokemon-RE:", currentPokemon);
  pokeDexHTMLOpen.innerHTML = openPokemonHTML(t);
  renderPokemonCardOpen(currentPokemon, t);
  setDesignCardOpen(currentPokemon, t);
}

function renderPokemonCardOpen(currentPokemon, t) {
  proofAndSetPokemonTypAndAbilities(currentPokemon, t);
  setCurrentPokemonInfo(currentPokemon, t);
  openDiagram(currentPokemon, t);
  getCurrentEvolutionChain(currentPokemon, t);
  getRestOfPokemonSubInfo(currentPokemon, t);
}

async function getEvolutionChainUrl(currentPokemon) {
  const currentPokemonID = currentPokemon["id"];
  try {
    const speciesResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${currentPokemonID}/`
    );
    const speciesData = await speciesResponse.json();
    const evolutionChainUrl = speciesData["evolution_chain"]["url"];
    console.log(evolutionChainUrl);
    return evolutionChainUrl;
  } catch (error) {
    console.error(error);
  }
}

async function getRestOfPokemonSubInfo(currentPokemon, t) {
  const currentPokemonID = currentPokemon["id"];
  try {
    const speciesResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${currentPokemonID}/`
    );
    const speciesData = await speciesResponse.json();
    setRestOfPokemonSubInfo(speciesData, t);
  } catch (error) {}
}

async function getCurrentEvolutionChain(currentPokemon, t) {
  const evolutionChainUrl = await getEvolutionChainUrl(currentPokemon);
  const evolutionChainResponse = await fetch(evolutionChainUrl);
  const evolutionChain = await evolutionChainResponse.json();
  proofAndSetCurrentEvolutionPokemonName(evolutionChain, t);
}
