function setCurrentPokemonInfo(currentPokemon, t) {
  document.getElementById("pokeDexHTMLOpen").classList.remove("d-noneI");
  document.getElementById("backgroundCard").classList.remove("d-none");
  proofAndSetTypesAndAbilities(currentPokemon, t);
  proofAndSetNameAndIMG(currentPokemon, t);
  proofAndSetPropotion(currentPokemon, t);
  proofAndSetMoves(currentPokemon, t);
  proofAndSetID(currentPokemon, t);
}


function setGenderRate(speciesData, t) {
  genderRate = speciesData["gender_rate"];
  if (genderRate == -1) {
    document.getElementById(`genderRate${t}`).innerHTML += genderRate;
    document.getElementById(`maleRate${t}`).innerHTML += "?";
    document.getElementById(`femaleRate${t}`).innerHTML += "?";
  } else {
    const { maleRate, femaleRate } = extractGenderRates(speciesData);
    document.getElementById(`genderRate${t}`).innerHTML += genderRate;
    document.getElementById(`maleRate${t}`).innerHTML += (maleRate * 100).toFixed(2) + "%";
    document.getElementById(`femaleRate${t}`).innerHTML += (femaleRate * 100).toFixed(2) + "%";
  }
}


function setCaptureRate(speciesData, t) {
  const { captureRate, captureRateInPercent } = extractCaptureRates(speciesData);
  document.getElementById(`captureRate${t}`).innerHTML += "Rate: " + captureRate + "<br>";
  document.getElementById(`captureRate${t}`).innerHTML += (captureRateInPercent * 1).toFixed(2) + "%";
}


function setHatchCounter(speciesData, t) {
  let steps = proofSteps(speciesData);
  document.getElementById(`hatchCounter${t}`).innerHTML = "Count: " + speciesData["hatch_counter"] + "<br>" + "Steps: " + steps;
}


function setCardForSecondEvolution(evoIMG1, t) {
  document.getElementById(`evolutionArray`).classList.remove("d-none");
  document.getElementById(`evolutionContainer`).classList.remove("evolutionSoloContainer");
  document.getElementById(`evolutionContainer`).classList.add("evolutionTwoContainer");
  document.getElementById(`evolutionChain1${t}`).classList.remove("d-none");
  document.getElementById(`evolutionChainIMG1${t}`).src = evoIMG1;
}


function setCardForFirstEvolution(evoIMG0, t) {
  document.getElementById(`evolutionChain0${t}`).classList.remove("d-none");
  document.getElementById(`evolutionContainer`).classList.add("evolutionSoloContainer");
  document.getElementById(`evolutionContainer`).classList.remove("evolutionTwoContainer");
  document.getElementById(`evolutionChainIMG0${t}`).src = evoIMG0;
}


function setCardForLastEvolution(evoIMG2, t) {
  document.getElementById(`secondEvolutionArray`).classList.remove("d-none");
  document.getElementById(`evolutionContainer`).classList.remove("evolutionSoloContainer");
  document.getElementById(`evolutionChain2${t}`).classList.remove("d-none");
  document.getElementById(`evolutionChainIMG2${t}`).src = evoIMG2;
}


function setImgAndName(currentPokemon, t) {
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonImage${t}`).src = imageUrl;
  document.getElementById(`pokemonName${t}`).innerHTML = currentPokemon["name"];
}


function setEggGrowAndName(speciesData, t) {
  document.getElementById(`generation${t}`).innerHTML = speciesData["generation"]["name"];
  document.getElementById(`growthRate${t}`).innerHTML = speciesData["growth_rate"]["name"];
  document.getElementById(`eggGroup${t}`).innerHTML = speciesData["egg_groups"][0]["name"];
}


function setTwoAbilities(currentPokemon, t) {
  document.getElementById(`abilities${t}`).innerHTML += currentPokemon["abilities"][2]["ability"]["name"] + ", ";
}


function setOneAbilities(currentPokemon, t) {
  document.getElementById(`abilities${t}`).innerHTML += currentPokemon["abilities"][1]["ability"]["name"] + ", ";
}


function setPokemonTypes(currentPokemon, t) {
  document.getElementById(`pokemonTypesX${t}Open`).innerHTML += currentPokemon["types"][1]["type"]["name"];
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


function proofAndSetHeppiness(speciesData, t) {
  happiness = speciesData["base_happiness"];
  if (happiness == null) {
    document.getElementById(`happiness${t}`).innerHTML = "?";
  } else {
    document.getElementById(`happiness${t}`).innerHTML = happiness;
  }
}


function proofAndSetCurrentPokemonTypes(currentPokemon, t) {
  document.getElementById(`pokemonTypes${t}`).innerHTML = currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["types"].length == 1) {
    document.getElementById(`pokemonTypesX${t}`).classList.add("d-none");
  }
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}`).innerHTML = currentPokemon["types"][1]["type"]["name"];
  }
}


async function proofAndSetCurrentEvolutionPokemonName(evolutionChain, t) {
  if (evolutionChain["chain"]["species"]) {
    document.getElementById(`evolutionChain0${t}`).innerHTML += evolutionChain["chain"]["species"]["name"];
    getFirstEvolutionImg(evolutionChain, t);
  }
  if (evolutionChain["chain"]["evolves_to"][0]) {
    document.getElementById(`evolutionChain1${t}`).innerHTML += evolutionChain["chain"]["evolves_to"][0]["species"]["name"];
    getSecondEvolutionImg(evolutionChain, t);
  }
  if (evolutionChain["chain"]["evolves_to"][0] == undefined) {
  } else if (evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]) {
    document.getElementById(`evolutionChain2${t}`).innerHTML += evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]["species"]["name"];
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


function proofAndSetTypesAndAbilities(currentPokemon, t) {
  document.getElementById(`pokemonTypes${t}Open`).innerHTML += currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["abilities"].length == 0) {
    document.getElementById(`abilities${t}`).innerHTML += "?";
  } else {
    document.getElementById(`abilities${t}`).innerHTML += currentPokemon["abilities"][0]["ability"]["name"];
  }
}


function proofAndSetNameAndIMG(currentPokemon, t) {
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonImage${t}Open`).src = imageUrl;
  document.getElementById(`pokemonName${t}Open`).innerHTML += currentPokemon["name"];
}


function proofAndSetPropotion(currentPokemon, t) {
  const sizeInMeters = currentPokemon["height"] / 10;
  const weightInKilograms = currentPokemon["weight"] / 10;
  document.getElementById(`weight${t}`).innerHTML += "<br> " + weightInKilograms + " kg";
  document.getElementById(`height${t}`).innerHTML += "<br> " + sizeInMeters + "m";
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
}

function proofAndSetMoves(currentPokemon, t) {
  const pokemonMoves = currentPokemon["moves"];
  if (pokemonMoves == "") {
    document.getElementById(`moves${t}`).innerHTML += "Unknow";
  } else {
    for (let m = 0; m < pokemonMoves.length; m++) {
      const moves = currentPokemon["moves"][`${m}`]["move"]["name"];
      document.getElementById(`moves${t}`).innerHTML += moves + ", ";
    }
  }
}

function setHabitat(speciesData, t) {
  if (speciesData["habitat"] === null) {
    document.getElementById(`habitat${t}`).innerHTML = "?";
  } else {
    document.getElementById(`habitat${t}`).innerHTML = speciesData["habitat"]["name"];
  }
}


function closeCard() {
  document.getElementById("cardContainer").classList.remove("roll-in-blurred-bottom");
  document.getElementById("cardContainer").classList.add("slide-out-top");
  document.getElementById("backgroundCard").classList.add("d-none");
  document.getElementById("blockScroll").classList.remove("oBlock");
  setTimeout(() => {
    document.getElementById("cardContainer").classList.add("d-noneI");
  }, 600);
}


function nextPokemon(t) {
  if (t > currentPokemon.length) {
    t = 0;
    openPokemon(t);
  } else {
    {
      t++;
      openPokemon(t);
    }
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
