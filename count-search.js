async function startCount() {
  document.getElementById("notFoundMessage").classList.add("d-none");
  document.getElementById("pokeDexHTML").classList.add("d-noneI");
  pokeDexHTML.innerHTML = "";
  document.getElementById("pokeDexCountHTML").classList.remove("d-noneI");
  pokeDexCountHTML.innerHTML = "";
  await countFromTo();
}


async function countFromTo() {
  const getPokemonCountFrom = document.getElementById("pokemon-count-from").value;
  const getPokemonCountTo = document.getElementById("pokemon-count-to").value;
  let proofSum = getPokemonCountTo - getPokemonCountFrom;
  if ( getPokemonCountFrom == "" || getPokemonCountTo == "" || getPokemonCountFrom == "0" || getPokemonCountTo == "0" || proofSum <= 0 ) {
    countFalse();
  } else {
    await countTrue(getPokemonCountTo, getPokemonCountFrom);
  }
  finish.push("Count finish");
  proofIsFinish(getPokemonCountTo, getPokemonCountFrom);
}


function proofIsFinish(getPokemonCountTo, getPokemonCountFrom) {
  if (finish) {
    for (let t = getPokemonCountFrom; t <getPokemonCountTo + 1 ; t++) {
      finishLoading(t);
    }
  }
}


async function countFalse() {
  for (let t = 1; t < 4; t++) {
    const url = APIs + t;
    NumberOfUrl.push(url);
    console.log(url);
    await loadCountPokemon(url, t);
    finishLoading(t);
  }
}


async function countTrue(getPokemonCountTo, getPokemonCountFrom) {
  const pokemonCountTo = Number(getPokemonCountTo) + 1;
  for (let t = getPokemonCountFrom; t < pokemonCountTo; t++) {
    await loadCountAPIs(t);
  }
}


async function loadCountAPIs(t) {
  let promises = [];
  const url = APIs + t;
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
  pokeDexCountHTML.innerHTML += renderCountsPokemons(t)
  startLoading(t);
  proofCountDesigns(currentPokemon, t);
  setCountImgAndName(currentPokemon, t);
  proofAndSetCountIDs(currentPokemon, t);
  proofAndSetCountCurrentPokemonTypes(currentPokemon, t);
}


function startLoading(t) {
  document.getElementById(`loadingContainer${t}`).classList.remove("d-none");
  document.getElementById(`pokemonCountContainer${t}`).classList.add("d-none");
  startBtn();
}


function startBtn() {
  document.getElementById("countBtn").style.border = "2px solid black";
  const countBtn = document.getElementById("countBtn");
  countBtn.style = "cursor: wait;";
  countBtn.disabled = true;
  const searchBtn = document.getElementById("getSearch");
  searchBtn.style = "cursor: wait;";
  searchBtn.disabled = true;
  const onchangeFunc = document.getElementById("search");
  onchangeFunc.style = "cursor: wait;";
  onchangeFunc.disabled = true;
}


async function finishLoading(t) {
  const loading = document.getElementById(`loadingContainer${t}`);
  const pokemonCount = document.getElementById(`pokemonCountContainer${t}`);
  if (loading) {
    loading.classList.add("d-none");
  }
  if (pokemonCount) {
    pokemonCount.classList.remove("d-none");
  }
  finishBtn();
}


function finishBtn() {
  document.getElementById("countBtn").style.border = "1px solid black";
  const countBtn = document.getElementById("countBtn");
  countBtn.disabled = false;
  countBtn.style = "cursor: grab;";
  const searchBtn = document.getElementById("getSearch");
  searchBtn.disabled = false;
  searchBtn.style = "cursor:grab;";
  const onchangeFunc = document.getElementById("search");
  onchangeFunc.disabled = false;
  onchangeFunc.style = "cursor: text;";
}


function setCountImgAndName(currentPokemon, t) {
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonCountImage${t}`).src = imageUrl;
  document.getElementById(`pokemonCountName${t}`).innerHTML = currentPokemon["name"];
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
  document.getElementById(`pokemonCountTypes${t}`).innerHTML = "" + currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonCountTypesX${t}`).innerHTML = currentPokemon["types"][1]["type"]["name"];
  }
  if (currentPokemon["types"].length == 1) {
    document.getElementById(`pokemonCountTypesX${t}`).classList.add("d-none");
  }
}


function proofCountDesigns(currentPokemon, t) {
  const proofedTypeName = currentPokemon["types"][0]["type"]["name"];
  const pokemonStyle = document.getElementById(`pokemonCountContainer${t}`);

  switch (proofedTypeName) {
    case "grass":
      pokemonStyle.classList.add("designGrass");
      break;
    case "fire":
      pokemonStyle.classList.add("designFire");
      break;
    case "water":
      pokemonStyle.classList.add("designWater");
      break;
    case "bug":
      pokemonStyle.classList.add("designBug");
      break;
    case "normal":
      pokemonStyle.classList.add("designNormal");
      break;
    case "poison":
      pokemonStyle.classList.add("designPoison");
      break;
    case "electric":
      pokemonStyle.classList.add("designElectric");
      break;
    case "ground":
      pokemonStyle.classList.add("designGround");
      break;
    case "fairy":
      pokemonStyle.classList.add("designFairy");
      break;
    case "fighting":
      pokemonStyle.classList.add("designFighting");
      break;
    case "psychic":
      pokemonStyle.classList.add("designPsychic");
      break;
    case "rock":
      pokemonStyle.classList.add("designRock");
      break;
    case "ghost":
      pokemonStyle.classList.add("designGhost");
      break;
    case "ice":
      pokemonStyle.classList.add("designIce");
      break;
    case "dragon":
      pokemonStyle.classList.add("designDragon");
      break;
    case "dark":
      pokemonStyle.classList.add("designDark");
      break;
    case "steel":
      pokemonStyle.classList.add("designSteel");
      break;
    case "flying":
      pokemonStyle.classList.add("designFlying");
      break;
    default:
      console.log("Hier fehlt der design/Neuer Pokemon Typ");
  }
}

//////////////////////////////SEARCH/////////////////////////////

async function getSearch() {
  document.getElementById("notFoundMessage").classList.add("d-none");
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
  document.getElementById("isLoading").classList.remove("d-none")
  document.getElementById("pokeDexHTML").classList.add("d-noneI");
  document.getElementById("pokeDexCountHTML").classList.add("d-noneI");
  let searchCountContainer = document.getElementById("pokeDexCountHTML");
  let searchContainer = document.getElementById("pokeDexHTML");
  searchCountContainer.innerHTML = "";
  searchContainer.innerHTML = "";
}


async function searchPokemons(searchIt) {
  for (let t = 1; t < 906; t++) {
    const url = APIs + t;
    let pokemon = await proofURL(t);
    let pokemonName = pokemon["name"];
    let pokemonID = proofIDAndSetNull(pokemon);
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


async function proofURL(t) {
  const url = APIs + t;
  let response = await fetch(url);
  pokemonIs = await response.json();
  return pokemonIs;
  
}


async function proofSearchFinish() {
  let foundMessage = document.getElementById("notFoundMessage");
  let dexCount = document.getElementById("pokeDexCountHTML");
  if (finish) {
    if (dexCount.innerHTML == "") {
      foundMessage.classList.remove("d-none");
      foundMessage.innerHTML = "Pokemon not found!.";
    } else {
      for (let s = 0; s < searchAmount.length; s++) {
        const t = searchAmount[s];
        finishLoading(t);
      }
    }
  }
  searchFinish()
}


function searchFinish() {
  document.getElementById("isLoading").classList.add("d-none")
  document.getElementById("pokeDexCountHTML").classList.remove("d-noneI");
}


function proofIDAndSetNull(pokemon) {
  let pokemonID = pokemon["id"];
  if (pokemonID < 10) {
    pokemonID = "#00" + pokemonID;
  }
  if (pokemonID > 9 && pokemonID < 100) {
    pokemonID = "#0" + pokemonID;
  }
  if (pokemonID > 99) {
    pokemonID = "#" + pokemonID;
  }
  return pokemonID;
}
