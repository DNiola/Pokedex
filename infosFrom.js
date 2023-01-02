function proofSteps(speciesData) {
  const generation = speciesData["generation"]["name"];
  const hatchCounter = speciesData["hatch_counter"];
  let steps;
  if (
    generation == "generation-i" || generation === "generation-ii" || generation === "generation-iii" || generation === "generation-vii"
  ) {
    steps = hatchCounter * 256;
  } else if (generation === "generation-iv") {
    steps = hatchCounter * 255;
  } else if (generation === "generation-v" || generation === "generation-vi") {
    steps = hatchCounter * 257;
  } else {
    steps = "?";
  }
  return steps;
}

function extractCaptureRates(speciesData) {
  const captureRate = speciesData["capture_rate"];
  const captureRateInPercent = ((captureRate / 255) * 100).toFixed(2);
  return { captureRate, captureRateInPercent };
}

function extractGenderRates(speciesData) {
  const femaleRate = speciesData["gender_rate"] / 8;
  const maleRate = (8 - speciesData["gender_rate"]) / 8;
  return { maleRate, femaleRate };
}

async function getFirstEvolutionImg(evolutionChain, t) {
  const evoURL1 = evolutionChain["chain"]["species"]["url"];
  const evoResponse1 = await fetch(evoURL1);
  const evoTest = await evoResponse1.json();
  const API = APIs + evoTest["id"];
  let response = await fetch(API);
  const currentPokemon = await response.json();
  const evoIMG0 = getPokemonImage(currentPokemon);
  setCardForFirstEvolution(evoIMG0, t)
  return;
}

function setCardForFirstEvolution(evoIMG0, t){
  document.getElementById(`evolutionChain0${t}`).classList.remove("d-none");
  document.getElementById(`evolutionContainer`).classList.add("evolutionSoloContainer");
  document.getElementById(`evolutionChainIMG0${t}`).src = evoIMG0;
}

async function getSecondEvolutionImg(evolutionChain, t) {
  const evoURL1 = evolutionChain["chain"]["evolves_to"][0]["species"]["url"];
  const evoResponse1 = await fetch(evoURL1);
  const evoTest = await evoResponse1.json();
  const API = APIs + evoTest["id"];
  let response = await fetch(API);
  const currentPokemon = await response.json();
  const evoIMG1 = getPokemonImage(currentPokemon);
  setCardForSecondEvolution(evoIMG1, t)
  return;
}

function setCardForSecondEvolution(evoIMG1, t) {
  document.getElementById(`evolutionArray`).classList.remove("d-none");
  document.getElementById(`evolutionContainer`).classList.remove("evolutionSoloContainer");
  document.getElementById(`evolutionContainer`).classList.add("evolutionTwoContainer");
  document.getElementById(`evolutionChain1${t}`).classList.remove("d-none");
  document.getElementById(`evolutionChainIMG1${t}`).src = evoIMG1;
}

async function getLastEvolutionImg(evolutionChain, t) {
  const evoURL1 = evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]["species"]["url"];
  const evoResponse1 = await fetch(evoURL1);
  const evoTest = await evoResponse1.json();
  const API = APIs + evoTest["id"];
  let response = await fetch(API);
  const currentPokemon = await response.json();
  const evoIMG2 = getPokemonImage(currentPokemon);
  setCardForLastEvolution(evoIMG2, t)
  return;
}

function setCardForLastEvolution(evoIMG2, t) {
  document.getElementById(`secondEvolutionArray`).classList.remove("d-none");
  document.getElementById(`evolutionContainer`).classList.remove("evolutionSoloContainer");
  document.getElementById(`evolutionChain2${t}`).classList.remove("d-none");
  document.getElementById(`evolutionChainIMG2${t}`).src = evoIMG2;
}

function setCurrentPokemonInfo(currentPokemon, t) {
  document.getElementById("pokeDexHTMLOpen").classList.remove("d-none");
  document.getElementById("backgroundCard").classList.remove("d-none");
  proofAndSetTypesAndAbilities(currentPokemon, t)
  proofAndSetNameAndIMG(currentPokemon, t)
  proofAndSetPropotion(currentPokemon, t)
  proofAndSetMoves(currentPokemon, t);
  proofAndSetID(currentPokemon, t);
}

function proofAndSetTypesAndAbilities(currentPokemon, t){
    document.getElementById(`pokemonTypes${t}Open`).innerHTML += currentPokemon["types"][0]["type"]["name"];
  document.getElementById(`abilities${t}`).innerHTML +=    currentPokemon["abilities"][0]["ability"]["name"];
}

function proofAndSetNameAndIMG(currentPokemon, t){
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonImage${t}Open`).src = imageUrl;
  document.getElementById(`pokemonName${t}Open`).innerHTML += currentPokemon["name"]; 
 
}

function proofAndSetPropotion(currentPokemon, t){
  const sizeInMeters = currentPokemon["height"] / 10;
  const weightInKilograms = currentPokemon["weight"] / 10;
 document.getElementById(`weight${t}`).innerHTML +=
    "<br> " + weightInKilograms + " kg";
  document.getElementById(`height${t}`).innerHTML +=
    "<br> " + sizeInMeters + "m";
}

function proofAndSetID(currentPokemon, t) {
  const id = currentPokemon["id"];
  if (id < 10) {
    document.getElementById(`pokemonID${t}Open`).innerHTML += "#00" + id;
  }
  if (id > 9 && id < 100) {
    document.getElementById(`pokemonID${t}Open`).innerHTML += "#0" + id;
  }
  if (id > 99) {
    document.getElementById(`pokemonID${t}Open`).innerHTML += "#" + id;
  }
  else {
    console.log("Proof/set ID fail");
  }
}

function proofAndSetMoves(currentPokemon, t) {
  const pokemonMoves = currentPokemon["moves"];
  if (pokemonMoves == "") {
    document.getElementById(`moves${t}`).innerHTML += "Unknow";
  } else {
    for (let m = 0; m < currentPokemon["moves"].length; m++) {
      const moves = currentPokemon["moves"][`${m}`]["move"]["name"];
      document.getElementById(`moves${t}`).innerHTML += moves + ", ";
    }
  }
}

function setHabitat(speciesData, t) {
  let habitat = speciesData["habitat"];
  if (speciesData["habitat"] === null) {
    document.getElementById(`habitat${t}`).innerHTML = "?";
    console.log(speciesData["habitat"], habitat);
  } else {
    document.getElementById(`habitat${t}`).innerHTML =
      speciesData["habitat"]["name"];
  }
}
