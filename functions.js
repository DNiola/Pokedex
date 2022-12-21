function proofAndSetCurrentPokemonTypes(currentPokemon, t) {
  document.getElementById(`pokemonTypes${t}`).innerHTML +=
    currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}`).innerHTML +=
      currentPokemon["types"][1]["type"]["name"];
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
    currentPokemon["sprites"]["other"]["dream_world"] &&
    currentPokemon["sprites"]["other"]["dream_world"]["front_default"]
  ) {
    return currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  } else if (
    currentPokemon["sprites"]["other"]["official-artwork"] &&
    currentPokemon["sprites"]["other"]["official-artwork"]["front_default"]
  ) {
    return currentPokemon["sprites"]["other"]["official-artwork"][
      "front_default"
    ];
  }
  return null;
}

function proofAndSetCurrentEvolutionPokemonName(evolutionChain, t) {
  if (evolutionChain["chain"]["species"]) {
    document.getElementById(`evolutionChain0${t}`).innerHTML +=
      " " + evolutionChain["chain"]["species"]["name"];
    getFirstEvolutionImg(evolutionChain, t);
  }
  if (evolutionChain["chain"]["evolves_to"][0]) {
    document.getElementById(`evolutionChain1${t}`).innerHTML +=
      " " + evolutionChain["chain"]["evolves_to"][0]["species"]["name"];
    getSecondEvolutionImg(evolutionChain, t);
  }
  if (evolutionChain["chain"]["evolves_to"][0] == undefined) {
    console.log("This Pokemon dont evolve/undefined");
  } else if (evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]) {
    document.getElementById(`evolutionChain2${t}`).innerHTML +=
      " " +
      evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]["species"][
        "name"
      ];
    getLastEvolutionImg(evolutionChain, t);
  }
}

function proofAndSetPokemonTypAndAbilities(currentPokemon, t) {
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}Open`).innerHTML +=
      currentPokemon["types"][1]["type"]["name"];
  }
  if (currentPokemon["abilities"][1]) {
    document.getElementById(`abilities${t}`).innerHTML +=
      currentPokemon["abilities"][1]["ability"]["name"] + ", ";
  }
  if (currentPokemon["abilities"][2]) {
    document.getElementById(`abilities${t}`).innerHTML +=
      currentPokemon["abilities"][2]["ability"]["name"] + ", ";
  }
}

async function getFirstEvolutionImg(evolutionChain, t) {
  const evoURL1 = evolutionChain["chain"]["species"]["url"];
  const evoResponse1 = await fetch(evoURL1);
  const evoTest = await evoResponse1.json();
  const API = APIs + evoTest["id"];
  let response = await fetch(API);
  const currentPokemon = await response.json();
  const evoIMG0 = getPokemonImage(currentPokemon);
  document.getElementById(`evolutionChain0${t}`).classList.remove("d-none");
  document
    .getElementById(`evolutionContainer`)
    .classList.add("evolutionSoloContainer");
  document.getElementById(`evolutionChainIMG0${t}`).src = evoIMG0;
  return;
}

async function getSecondEvolutionImg(evolutionChain, t) {
  const evoURL1 = evolutionChain["chain"]["evolves_to"][0]["species"]["url"];
  const evoResponse1 = await fetch(evoURL1);
  const evoTest = await evoResponse1.json();
  const API = APIs + evoTest["id"];
  let response = await fetch(API);
  const currentPokemon = await response.json();
  const evoIMG1 = getPokemonImage(currentPokemon);
  document.getElementById(`evolutionChain1${t}`).classList.remove("d-none");
  document.getElementById(`evolutionChainIMG1${t}`).src = evoIMG1;
  return;
}

async function getLastEvolutionImg(evolutionChain, t) {
  const evoURL1 =
    evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]["species"]["url"];
  const evoResponse1 = await fetch(evoURL1);
  const evoTest = await evoResponse1.json();
  const API = APIs + evoTest["id"];
  let response = await fetch(API);
  const currentPokemon = await response.json();
  const evoIMG2 = getPokemonImage(currentPokemon);
  document.getElementById(`evolutionChain2${t}`).classList.remove("d-none");
  document.getElementById(`evolutionChainIMG2${t}`).src = evoIMG2;
  return;
}

function setCurrentPokemonInfo(currentPokemon, t) {
  const sizeInMeters = currentPokemon["height"] / 10;
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonImage${t}Open`).src = imageUrl;
  document.getElementById(`pokemonTypes${t}Open`).innerHTML +=
    currentPokemon["types"][0]["type"]["name"];
  document.getElementById(`abilities${t}`).innerHTML +=
    currentPokemon["abilities"][0]["ability"]["name"];
  document.getElementById(`pokemonID${t}Open`).innerHTML +=
    "#" + currentPokemon["id"];
  document.getElementById(`pokemonName${t}Open`).innerHTML +=
    currentPokemon["name"];
  document.getElementById(`weight${t}`).innerHTML +=
    "<br> " + currentPokemon["weight"] + " kg";
  document.getElementById(`height${t}`).innerHTML +=
    "<br> " + sizeInMeters + "m";
  document.getElementById("pokeDexHTMLOpen").classList.remove("d-none");
  document.getElementById("backgroundCard").classList.remove("d-none");
  for (let m = 0; m < currentPokemon["moves"].length; m++) {
    document.getElementById(`moves${t}`).innerHTML +=
      currentPokemon["moves"][`${m}`]["move"]["name"] + ", ";
  }
}

function setRestOfPokemonSubInfo(speciesData, t) {
  document.getElementById(`growthRate${t}`).innerHTML =
    speciesData["growth_rate"]["name"];
  document.getElementById(`captureRate${t}`).innerHTML =
    speciesData["capture_rate"];
  document.getElementById(`eggGroup${t}`).innerHTML =
    speciesData["egg_groups"][0]["name"];
  document.getElementById(`generation${t}`).innerHTML =
    speciesData["generation"]["name"];
  document.getElementById(`habitat${t}`).innerHTML =
    speciesData["habitat"]["name"];
}

function closeCard() {
  document
    .getElementById("cardContainer")
    .classList.remove("roll-in-blurred-bottom");
  document.getElementById("cardContainer").classList.add("slide-out-top");
  document.getElementById("backgroundCard").classList.add("d-none");
  setTimeout(function () {
    document
      .getElementById(`evolutionContainer`)
      .classList.remove("evolutionSoloContainer");
  }, 3000);
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

//Search function//
function getSearch() {
  let search = document.getElementById("search").value;
  search = search.toLowerCase();
  filterPosts(search);
}

async function filterPosts(searchIt) {
  let searchContainer = document.getElementById("pokeDexHTML");
  searchContainer.innerHTML = "";
  for (let t = 1; t < NumberOfUrl.length; t++) {
    const url = APIs + t
    let pokemon = await proofURL(url);
    let pokemonName = pokemon["name"];
    let pokemonID = pokemon["id"]
    if (pokemonName.toLocaleLowerCase().includes(searchIt)||
    pokemonID.toString().includes(searchIt)
    ) {
      loadPokemon(url, t)
    } 
  }
}

async function proofURL(url) {
  let response = await fetch(url);
  pokemonIs = await response.json();
  return pokemonIs;
}
