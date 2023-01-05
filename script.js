let APIs = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemon;
let currentAPI;
let pokemonName;
let NumberOfUrl = ["0"];
let maxID = 51;
let loadedPokemons = [];

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
  renderPokemonInfo(currentPokemon, t);
  proofDesigns(currentPokemon, t);
  proofAndSetCurrentPokemonTypes(currentPokemon, t);
}

function renderPokemonInfo(currentPokemon, t) {
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonImage${t}`).src = imageUrl;
  document.getElementById(`pokemonName${t}`).innerHTML = currentPokemon["name"];
  proofAndSetIDs(currentPokemon, t)
}

function proofAndSetIDs(currentPokemon, t) {
  const id = currentPokemon["id"];
  if (id < 10) {
    document.getElementById(`pokemonID${t}`).innerHTML += "#00" + id;
  }
  if (id > 9 && id < 100) {
    document.getElementById(`pokemonID${t}`).innerHTML += "#0" + id;
  }
  if (id > 99) {
    document.getElementById(`pokemonID${t}`).innerHTML += "#" + id;
  }
}


async function openPokemon(t) {
 document.getElementById('blockScroll').classList.add('oBlock')
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

function setRestOfPokemonSubInfo(speciesData, t) {
  document.getElementById(`generation${t}`).innerHTML =
    speciesData["generation"]["name"];
  document.getElementById(`growthRate${t}`).innerHTML =
    speciesData["growth_rate"]["name"];
  document.getElementById(`eggGroup${t}`).innerHTML =
    speciesData["egg_groups"][0]["name"];
  setHabitat(speciesData, t);
  setGenderRate(speciesData, t);
  setCaptureRate(speciesData, t);
  setHatchCounter(speciesData, t);
  proofAndSetHeppiness(speciesData, t);
}

function proofAndSetHeppiness(speciesData, t) {
  happiness = speciesData["base_happiness"];
  if (happiness == null) {
    document.getElementById(`happiness${t}`).innerHTML = "?";
  } else {
    document.getElementById(`happiness${t}`).innerHTML = happiness;
  }
}

async function getCurrentEvolutionChain(currentPokemon, t) {
  const evolutionChainUrl = await getEvolutionChainUrl(currentPokemon);
  const evolutionChainResponse = await fetch(evolutionChainUrl);
  const evolutionChain = await evolutionChainResponse.json();
  proofAndSetCurrentEvolutionPokemonName(evolutionChain, t);
}

async function getEvolutionChainUrl(currentPokemon) {
  const currentPokemonID = currentPokemon["id"];
  try {
    const speciesResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${currentPokemonID}/`
    );
    const speciesData = await speciesResponse.json();
    const evolutionChainUrl = proofEvolutionChain(speciesData);
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

if (document.getElementById('search')) {
  document.getElementById('search').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      document.getElementById('getSearch').click();
  }
});
}
