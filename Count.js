
async function countFromTo() {
  pokeDexHTML.innerHTML = "";
  pokeDexCountHTML.innerHTML ="";
  const pokemonCountFrom = document.getElementById("pokemon-count-from").value;
  const pokemonCountTo = document.getElementById("pokemon-count-to").value;
  for (let t = pokemonCountFrom; t < pokemonCountTo; t++) {
    await  loadCountAPIs(pokemonCountFrom, t);
  }
}


async function loadCountAPIs(pokemonCountFrom, t) {
  if (pokemonCountFrom == "") {
    for (let t = 1; t < 10; t++) {
      const url = `${APIs}${t}`;
      NumberOfUrl.push(url);
      console.log(url);
      await loadCountPokemon(url, t);
    }
  } else{
      const url = `${APIs}${t}`;
      NumberOfUrl.push(url);
      console.log(url);
      await loadCountPokemon(url, t);
  }
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


  function  renderCountPokemonInfo(currentPokemon, t)  {
      const imageUrl = getPokemonImage(currentPokemon);
      document.getElementById(`pokemonCountImage${t}`).src = imageUrl;
      document.getElementById(`pokemonCountID${t}`).innerHTML =
        "#" + currentPokemon["id"];
      document.getElementById(`pokemonCountName${t}`).innerHTML = currentPokemon["name"]; 
  }


  function proofAndSetCountCurrentPokemonTypes(currentPokemon, t) {
    document.getElementById(`pokemonCountTypes${t}`).innerHTML =
      currentPokemon["types"][0]["type"]["name"];
    if (currentPokemon["types"][1]) {
      document.getElementById(`pokemonCountTypesX${t}`).innerHTML =
        currentPokemon["types"][1]["type"]["name"];
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
