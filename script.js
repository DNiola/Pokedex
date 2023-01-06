let APIs = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemon;
let currentAPI;
let pokemonName;
let NumberOfUrl = ["0"];
let maxID = 51;
let loadedPokemons = [];
let finish = [false];
let searchAmount = [];

async function loadAPIs() {
  let promises = [];
  for (let t = 1; t < maxID; t++) {
    if (!loadedPokemons.includes(t)) {
      const url = `${APIs}${t}`;
      NumberOfUrl.push(url);
      console.log(url);
      promises.push(loadPokemon(url, t));
      loadedPokemons.push(t);
      await Promise.all(promises);
    }
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
  proofDesigns(currentPokemon, t);
  proofAndSetIDs(currentPokemon, t);
  proofAndSetCurrentPokemonTypes(currentPokemon, t);
  setImgAndName(currentPokemon, t);
}

async function openPokemon(t) {
  let urlOpen = APIs + t;
  let response = await fetch(urlOpen);
  const currentPokemon = await response.json();
  pokeDexHTMLOpen.innerHTML = openPokemonHTML(t);
  await renderPokemonCardOpen(currentPokemon, t);
}


async function renderPokemonCardOpen(currentPokemon, t) {
  document.getElementById("blockScroll").classList.add("oBlock");
  setDesignCardOpen(currentPokemon, t);
  proofAndSetPokemonTypAndAbilities(currentPokemon, t);
  setCurrentPokemonInfo(currentPokemon, t);
  await openDiagram(currentPokemon, t);
  await getCurrentEvolutionChain(currentPokemon, t);
  await getRestOfPokemonSubInfo(currentPokemon, t);
}

function setRestOfPokemonSubInfo(speciesData, t) {
  setHabitat(speciesData, t);
  setGenderRate(speciesData, t);
  setCaptureRate(speciesData, t);
  setHatchCounter(speciesData, t);
  setEggGrowAndName(speciesData, t);
  proofAndSetHeppiness(speciesData, t);
}

async function getCurrentEvolutionChain(currentPokemon, t) {
  const evolutionChainUrl = await getEvolutionChainUrl(currentPokemon);
  const evolutionChainResponse = await fetch(evolutionChainUrl);
  const evolutionChain = await evolutionChainResponse.json();
  proofAndSetCurrentEvolutionPokemonName(evolutionChain, t);
}

async function getEvolutionChainUrl(currentPokemon) {
  const currentPokemonID = currentPokemon["id"];
  const speciesResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${currentPokemonID}/`
  );
  const speciesData = await speciesResponse.json();
  const evolutionChainUrl = proofEvolutionChain(speciesData);
  return evolutionChainUrl;
}

async function getRestOfPokemonSubInfo(currentPokemon, t) {
  const currentPokemonID = currentPokemon["id"];
  const speciesResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${currentPokemonID}/`
  );
  const speciesData = await speciesResponse.json();
  setRestOfPokemonSubInfo(speciesData, t);
}

window.onscroll = async function scroll() {
  let scrollLimit = document.body.scrollHeight - 600;
  let pokeDexHTML = document.getElementById("pokeDexHTML").classList;
  if (window.innerHeight + window.scrollY >= scrollLimit) {
    if (pokeDexHTML.value == "pokeDexContainer") {
      if (maxID < 905) {
        maxID = maxID + 5;
        await loadAPIs();
      }
    }
  }
};

if (document.getElementById("search")) {
  document
    .getElementById("search")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        document.getElementById("getSearch").click();
      }
    });
}
