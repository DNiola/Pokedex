async function startCount() {
  pokeDexHTML.innerHTML = "";
  pokeDexCountHTML.innerHTML = "";
  document.getElementById("pokeDexHTML").classList.add("d-noneI");
  document.getElementById("pokeDexCountHTML").classList.remove("d-noneI");
  const getPokemonCountFrom =
    document.getElementById("pokemon-count-from").value;
  const getPokemonCountTo = document.getElementById("pokemon-count-to").value;
  await countFromTo(getPokemonCountTo, getPokemonCountFrom);
}

function startLoading(t) {
  document.getElementById("countBtn").style.border = "2px solid black";
  const countBtn = document.getElementById("countBtn");
  const searchBtn = document.getElementById("getSearch");
  const onchangeFunc = document.getElementById("search");
  countBtn.style = "cursor: wait;";
  countBtn.disabled = true;
  searchBtn.style = "cursor: wait;";
  searchBtn.disabled = true;
  onchangeFunc.style = "cursor: wait;";
  onchangeFunc.disabled = true;
  document.getElementById(`loadingContainer${t}`).classList.remove("d-none");
  document.getElementById(`pokemonCountContainer${t}`).classList.add("d-none");
}
function proofFinish(getPokemonCountTo, getPokemonCountFrom) {
  if (finish) {
    let proofSum = getPokemonCountTo - getPokemonCountFrom + 2;
    for (let t = 1; t < proofSum; t++) {
      finishLoading(t);
    }
  }
}

function finishLoading(t) {
  document.getElementById("countBtn").style.border = "1px solid black";
  const countBtn = document.getElementById("countBtn");
  const searchBtn = document.getElementById("getSearch");
  const onchangeFunc = document.getElementById("search");
  countBtn.disabled = false;
  countBtn.style = "cursor: grab;";
  searchBtn.disabled = false;
  searchBtn.style = "cursor:grab;";
  onchangeFunc.disabled = false;
  onchangeFunc.style = "cursor: text;";
  document.getElementById(`loadingContainer${t}`).classList.add("d-none");
  document
    .getElementById(`pokemonCountContainer${t}`)
    .classList.remove("d-none");
}

async function countFromTo(getPokemonCountTo, getPokemonCountFrom) {
  let proofSum = getPokemonCountTo - getPokemonCountFrom;
  if (
    getPokemonCountFrom == "" ||
    getPokemonCountTo == "" ||
    getPokemonCountFrom == "0" ||
    getPokemonCountTo == "0" ||
    proofSum <= 0
  ) {
    for (let t = 1; t < 2; t++) {
      const url = `${APIs}${t}`;
      NumberOfUrl.push(url);
      console.log(url);
      await loadCountPokemon(url, t);
      finishLoading(t);
    }
  } else {
    const pokemonCountTo = Number(getPokemonCountTo) + 1;
    for (let t = getPokemonCountFrom; t < pokemonCountTo; t++) {
      await loadCountAPIs(t);
    }
  }

  finish.push(true);
  proofFinish(getPokemonCountTo, getPokemonCountFrom);
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
  startLoading(t);
  renderCountPokemonInfo(currentPokemon, t);
  proofCountDesigns(currentPokemon, t);
  proofAndSetCountCurrentPokemonTypes(currentPokemon, t);
}

function renderCountPokemonInfo(currentPokemon, t) {
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonCountImage${t}`).src = imageUrl;
  document.getElementById(`pokemonCountName${t}`).innerHTML =
    currentPokemon["name"];
  proofAndSetCountIDs(currentPokemon, t);
}

function proofAndSetCountIDs(currentPokemon, t) {
  const id = currentPokemon["id"];
  if (id < 10) {
    document.getElementById(`pokemonCountID${t}`).innerHTML = "#00" + id;
  }
  if (id > 9 && id < 100) {
    document.getElementById(`pokemonCountID${t}`).innerHTML = "#0" + id;
  }
  if (id > 99) {
    document.getElementById(`pokemonCountID${t}`).innerHTML = "#" + id;
  }
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

///SEARCH///

async function getSearch() {
  if (document.getElementById("search").value.length < 3) {
    console.log("Search field need moore Text/Number");
  } else {
    let search = document.getElementById("search").value;
    if (search === "") {
      console.log("search field need name of Pokemon or the ID number ");
    } else {
      search = search.toLowerCase();
      setSearchContainer();
      await searchPokemons(search);
    }
  }
}

function setSearchContainer() {
  document.getElementById("pokeDexCountHTML").classList.remove("d-noneI");
  let searchCountContainer = document.getElementById("pokeDexCountHTML");
  let searchContainer = document.getElementById("pokeDexHTML");
  searchCountContainer.innerHTML = "";
  searchContainer.innerHTML = "";
}

async function searchPokemons(searchIt) {
  for (let t = 1; t < 906; t++) {
    const url = APIs + t;
    let pokemon = await proofURL(url);
    let pokemonName = pokemon["name"];
    let pokemonID = pokemon["id"];

    if (pokemonID < 10) {
      pokemonID += "#00" + pokemonID;
    }
    if (pokemonID > 9 && pokemonID < 100) {
      pokemonID += "#0" + pokemonID;
    }
    if (pokemonID > 99) {
      pokemonID += "#" + pokemonID;
    }

    if (
      pokemonName.toLocaleLowerCase().includes(searchIt) ||
      pokemonID.toString().includes(searchIt)
    ) {
      await loadCountPokemon(url, t);
      searchAmount.push(t);
    }
  }
  finish.push(true);
  await proofSearchFinish();
}

async function proofSearchFinish() {
  if (finish) {
    for (let s = 0; s < searchAmount.length; s++) {
      const t = searchAmount[s];
      finishLoading(t);
    }
  }
}

async function proofURL(url) {
  let response = await fetch(url);
  pokemonIs = await response.json();
  return pokemonIs;
}
