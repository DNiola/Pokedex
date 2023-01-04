function proofAndSetCurrentPokemonTypes(currentPokemon, t) {
  document.getElementById(`pokemonTypes${t}`).innerHTML =    currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["types"].length == 1) {
    document.getElementById(`pokemonTypesX${t}`).classList.add("d-none");
  }
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}`).innerHTML =      currentPokemon["types"][1]["type"]["name"];
  }
}

function proofDesigns(currentPokemon, t) {
  proofedTypeNamee = currentPokemon["types"][0]["type"]["name"];
  pokemonStylee = document.getElementById(`pokemonContainer${t}`);
  proofedTypeName = currentPokemon["types"][0]["type"]["name"];
  pokemonStyle = document.getElementById(`pokemonContainer${t}`);
  if (proofedTypeName == "grass") {
    pokemonStyle.classList.add("designGrass");
  } else if (proofedTypeName == "fire") {
    pokemonStyle.classList.add("designFire");
  } else if (proofedTypeName == "water") {
    pokemonStyle.classList.add("designWater");
  } else if (proofedTypeName == "bug") {
    pokemonStyle.classList.add("designBug");
  } else if (proofedTypeName == "normal") {
    pokemonStyle.classList.add("designNormal");
  } else if (proofedTypeName == "poison") {
    pokemonStyle.classList.add("designPoison");
  } else if (proofedTypeName == "electric") {
    pokemonStyle.classList.add("designElectric");
  } else if (proofedTypeName == "ground") {
    pokemonStyle.classList.add("designGround");
  } else if (proofedTypeName == "fairy") {
    pokemonStyle.classList.add("designFairy");
  } else if (proofedTypeName == "fighting") {
    pokemonStyle.classList.add("designFighting");
  } else if (proofedTypeName == "psychic") {
    pokemonStyle.classList.add("designPsychic");
  } else if (proofedTypeName == "rock") {
    pokemonStyle.classList.add("designRock");
  } else if (proofedTypeName == "ghost") {
    pokemonStyle.classList.add("designGhost");
  } else if (proofedTypeName == "ice") {
    pokemonStyle.classList.add("designIce");
  } else if (proofedTypeName == "dragon") {
    pokemonStyle.classList.add("designDragon");
  } else if (proofedTypeName == "dark") {
    pokemonStyle.classList.add("designDark");
  } else if (proofedTypeName == "steel") {
    pokemonStyle.classList.add("designSteel");
  } else if (proofedTypeName == "flying") {
    pokemonStyle.classList.add("designFlying");
  } else {
    console.log("Hier fehlt der design/Neuer Pokemon Typ");
  }
}

function setDesignCardOpen(currentPokemon, t) {
  proofedTypeName = currentPokemon["types"][0]["type"]["name"];
  pokemonStyleCard = document.getElementById(`pokemonContainer${t}Open`);
  if (proofedTypeName == "grass") {
    pokemonStyleCard.classList.add("designGrass");
  } else if (proofedTypeName == "fire") {
    pokemonStyleCard.classList.add("designFire");
  } else if (proofedTypeName == "water") {
    pokemonStyleCard.classList.add("designWater");
  } else if (proofedTypeName == "bug") {
    pokemonStyleCard.classList.add("designBug");
  } else if (proofedTypeName == "normal") {
    pokemonStyleCard.classList.add("designNormal");
  } else if (proofedTypeName == "poison") {
    pokemonStyleCard.classList.add("designPoison");
  } else if (proofedTypeName == "electric") {
    pokemonStyleCard.classList.add("designElectric");
  } else if (proofedTypeName == "ground") {
    pokemonStyleCard.classList.add("designGround");
  } else if (proofedTypeName == "fairy") {
    pokemonStyleCard.classList.add("designFairy");
  } else if (proofedTypeName == "fighting") {
    pokemonStyleCard.classList.add("designFighting");
  } else if (proofedTypeName == "psychic") {
    pokemonStyleCard.classList.add("designPsychic");
  } else if (proofedTypeName == "rock") {
    pokemonStyleCard.classList.add("designRock");
  } else if (proofedTypeName == "ghost") {
    pokemonStyleCard.classList.add("designGhost");
  } else if (proofedTypeName == "ice") {
    pokemonStyleCard.classList.add("designIce");
  } else if (proofedTypeName == "dragon") {
    pokemonStyleCard.classList.add("designDragon");
  } else if (proofedTypeName == "dark") {
    pokemonStyleCard.classList.add("designDark");
  } else if (proofedTypeName == "steel") {
    pokemonStyleCard.classList.add("designSteel");
  } else if (proofedTypeName == "flying") {
    pokemonStyleCard.classList.add("designFlying");
  } else {
    console.log("Hier fehlt der design/Neuer Pokemon Typ");
  }
}

function getPokemonImage(currentPokemon) {
  if (
    currentPokemon["sprites"]["other"]["dream_world"] &&    currentPokemon["sprites"]["other"]["dream_world"]["front_default"]
  ) {
    return currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  } else if (
    currentPokemon["sprites"]["other"]["official-artwork"] &&    currentPokemon["sprites"]["other"]["official-artwork"]["front_default"]
  ) {
    return currentPokemon["sprites"]["other"]["official-artwork"][
      "front_default"
    ];
  }
  return null;
}

function proofAndSetCurrentEvolutionPokemonName(evolutionChain, t) {
  if (evolutionChain["chain"]["species"]) {
    document.getElementById(`evolutionChain0${t}`).innerHTML +=      " " + evolutionChain["chain"]["species"]["name"];
    getFirstEvolutionImg(evolutionChain, t);
  }
  if (evolutionChain["chain"]["evolves_to"][0]) {
    document.getElementById(`evolutionChain1${t}`).innerHTML +=      " " + evolutionChain["chain"]["evolves_to"][0]["species"]["name"];
    getSecondEvolutionImg(evolutionChain, t);
  }
  if (evolutionChain["chain"]["evolves_to"][0] == undefined) {
  
  } else if (evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]) {
    document.getElementById(`evolutionChain2${t}`).innerHTML +=      " " +
      evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]["species"][
        "name"
      ];
    getLastEvolutionImg(evolutionChain, t);
}
}
function proofAndSetPokemonTypAndAbilities(currentPokemon, t) {
  if (currentPokemon["types"][1]) {
    setPokemonTypes(currentPokemon, t);
  }
  if (currentPokemon["abilities"][1]) {
    setOneAbilities(currentPokemon, t);
  }
  if (currentPokemon["abilities"][2]) {
    setTwoAbilities(currentPokemon, t);
  }
}

function setTwoAbilities(currentPokemon, t) {
  document.getElementById(`abilities${t}`).innerHTML +=    currentPokemon["abilities"][2]["ability"]["name"] + ", ";
}

function setOneAbilities(currentPokemon, t) {
  document.getElementById(`abilities${t}`).innerHTML +=    currentPokemon["abilities"][1]["ability"]["name"] + ", ";
}

function setPokemonTypes(currentPokemon, t) {
  document.getElementById(`pokemonTypesX${t}Open`).innerHTML +=    currentPokemon["types"][1]["type"]["name"];
}

function closeCard() {
  document
    .getElementById("cardContainer")
    .classList.remove("roll-in-blurred-bottom");
  document.getElementById("cardContainer").classList.add("slide-out-top");
  setTimeout(() => {
    document.getElementById("cardContainer").classList.add("d-none");
  }, 600);

  document.getElementById("backgroundCard").classList.add("d-none");
}

function nextPokemon(t) {
  if (t > currentPokemon.length) {
    t = 0;
    openPokemon(t);
  } else {
    t++;
    openPokemon(t);
  }
}

function lastPokemon(t) {
  if (t < currentPokemon.length) {
    t = 0;
    openPokemon(t);
  } else {
    t--;
    openPokemon(t);
  }
}

//TODO:
//function namee() {
//  document.getElementById("search").addEventListener("keyup", function(event) {
//  if (event.key === 13) {
//    document.getElementById("getSearch").click();
//  }
//});
//}

async function getSearch() {
  let search = document.getElementById("search").value;
  if (search === "") {
    console.log("search field need name of Pokemon/Text or the ID number ");
  } else {
    search = search.toLowerCase();
    setSearchContainer();
    await filterPokemons(search);
  }
}

function setSearchContainer() {
  document.getElementById("pokeDexCountHTML").classList.remove("d-none");
  let searchCountContainer = document.getElementById("pokeDexCountHTML");
  let searchContainer = document.getElementById("pokeDexHTML");
  searchCountContainer.innerHTML = "";
  searchContainer.innerHTML = "";
}

async function filterPokemons(searchIt) {
  for (let t = 1; t < 906; t++) {
    const url = APIs + t;
    let pokemon = await proofURL(url);
    let pokemonName = pokemon["name"];
    let pokemonID = pokemon["id"];
    if (
      pokemonName.toLocaleLowerCase().includes(searchIt) ||
      pokemonID.toString().includes(searchIt)
    ) {
      loadCountPokemon(url, t);
    }
  }
}

async function proofURL(url) {
  let response = await fetch(url);
  pokemonIs = await response.json();
  return pokemonIs;
}

function setGenderRate(speciesData, t) {
  genderRate = speciesData["gender_rate"];
  if (genderRate == -1) {
    document.getElementById(`genderRate${t}`).innerHTML +=      speciesData["gender_rate"];
    document.getElementById(`maleRate${t}`).innerHTML += "?";
    document.getElementById(`femaleRate${t}`).innerHTML += "?";
  } else {
    const { maleRate, femaleRate } = extractGenderRates(speciesData);
    document.getElementById(`genderRate${t}`).innerHTML +=      speciesData["gender_rate"];
    document.getElementById(`maleRate${t}`).innerHTML +=      "" + (maleRate * 100).toFixed(2) + "%";
    document.getElementById(`femaleRate${t}`).innerHTML +=      "" + (femaleRate * 100).toFixed(2) + "%";
  }
}

function setCaptureRate(speciesData, t) {
  const { captureRate, captureRateInPercent } =    extractCaptureRates(speciesData);
  document.getElementById(`captureRate${t}`).innerHTML +=    "Rate: " + captureRate + "<br>";
  document.getElementById(`captureRate${t}`).innerHTML +=    (captureRateInPercent * 1).toFixed(2) + "%";
}

function setHatchCounter(speciesData, t) {
  let steps = proofSteps(speciesData);
  document.getElementById(`hatchCounter${t}`).innerHTML =    "Count: " + speciesData["hatch_counter"] + "<br>";
  document.getElementById(`hatchCounter${t}`).innerHTML += "Steps: " + steps;
}

function proofEvolutionChain(speciesData) {
  const evolution = speciesData["evolution_chain"];   
  if (evolution == null) { 
    console.log("ERROR");
    return 
  } else {
    const evolutionChainUrl = speciesData["evolution_chain"]["url"];
    return evolutionChainUrl;
  }
}


