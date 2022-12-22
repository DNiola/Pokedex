





function countFromTo() {
    const pokemonCountFrom = document.getElementById("pokemon-count-from").value;
    const pokemonCountTo = document.getElementById("pokemon-count-to").value;
    saveInputValues(pokemonCountFrom, pokemonCountTo);
    countNumberFrom.push(pokemonCountFrom);
    countNumberTo.push(pokemonCountTo);
    loadCountAPIs();
  }


async function loadCountAPIs() {
    loadInputValues();
    if (countNumberFrom == "") {
      for (let t = 1; t < 00; t++) {
        const url = `${APIs}${t}`;
        NumberOfUrl.push(url);
        console.log(url);
        await loadCountPokemon(url, t);
      }
    } else{
      for (let t = countNumberFrom; t < countNumberTo; t++) {
        const url = `${APIs}${t}`;
        NumberOfUrl.push(url);
        console.log(url);
        await loadCountPokemon(url, t);
      }
    }
  }
  
  async function loadCountPokemon(url, t) {
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log("Pokemon:", currentPokemon);
    pokemonFilter(currentPokemon, t);
  }
  
  function pokemonCountFilter(currentPokemon, t) {
    pokeDexHTML.innerHTML = renderCountsPokemons(t);
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