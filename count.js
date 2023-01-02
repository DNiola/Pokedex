async function countFromTo() {
  document.getElementById("pokeDexCountHTML").classList.remove("d-none");
  pokeDexHTML.innerHTML = "";
  pokeDexCountHTML.innerHTML = "";
  const getPokemonCountFrom = document.getElementById("pokemon-count-from").value;
  const getPokemonCountTo = document.getElementById("pokemon-count-to").value;
  const button = document.getElementById("countBtn");
  button.disabled = true;
  if (
    getPokemonCountFrom == "" ||
    getPokemonCountTo == "" ||
    getPokemonCountFrom == "0" ||
    getPokemonCountTo == "0"
  ) {
    for (let t = 1; t < 31; t++) {
      const url = `${APIs}${t}`;
      NumberOfUrl.push(url);
      console.log(url);
      await loadCountPokemon(url, t);
    }
  } else {
    const pokemonCountTo = Number(getPokemonCountTo) + 1;
    for (let t = getPokemonCountFrom; t < pokemonCountTo; t++) {
      await loadCountAPIs(t);
    }
  }
  button.disabled = false;
}

async function loadCountAPIs(t) {
  let promises = [];
  const url = `${APIs}${t}`;
  NumberOfUrl.push(url);
  console.log(url);
  promises.push(loadCountPokemon(url, t));
  await Promise.all(promises);
}

async function loadCountPokemon(url, t) {
  let response = await fetch(url);
  currentPokemon = await response.json();
  console.log("Pokemon:", currentPokemon);
  pokemonCountFilter(currentPokemon, t);
}

function pokemonCountFilter(currentPokemon, t) {
  pokeDexCountHTML.innerHTML += renderCountsPokemons(t);
  renderCountPokemonInfo(currentPokemon, t);
  proofCountDesigns(currentPokemon, t);
  proofAndSetCountCurrentPokemonTypes(currentPokemon, t);
}

function renderCountPokemonInfo(currentPokemon, t) {
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonCountImage${t}`).src = imageUrl;
  document.getElementById(`pokemonCountID${t}`).innerHTML =
    "#" + currentPokemon["id"];
  document.getElementById(`pokemonCountName${t}`).innerHTML =
    currentPokemon["name"];
}

function proofAndSetCountCurrentPokemonTypes(currentPokemon, t) {
  document.getElementById(`pokemonCountTypes${t}`).innerHTML =
    "" + currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonCountTypesX${t}`).innerHTML =
      currentPokemon["types"][1]["type"]["name"];
  }
  if (currentPokemon["types"].length == 1) {
    document.getElementById(`pokemonCountTypesX${t}`).classList.add("d-none");
  }
}

function proofCountDesigns(currentPokemon, t) {
  proofedTypeNamee = currentPokemon["types"][0]["type"]["name"];
  pokemonStylee = document.getElementById(`pokemonCountContainer${t}`);
  proofedTypeName = currentPokemon["types"][0]["type"]["name"];
  pokemonStyle = document.getElementById(`pokemonCountContainer${t}`);
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
