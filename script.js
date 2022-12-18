let APIs = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemon;
let currentAPI;
let pokemonName;

function loadAPIs() {
  for (let t = 1; t < 50; t++) {
    const url = `${APIs}${t}`;
    console.log(url);
    loadPokemon(url, t);
  }
}

async function loadPokemon(url, t) {
  let response = await fetch(url);
  currentPokemon = await response.json();
  console.log("Pokemon:", currentPokemon);
  pokemonFilter(currentPokemon, t);
}

async function test(currentPokemon, t) {
  const evolutionChainUrl = await getEvolutionChainUrl(currentPokemon);
  const evolutionChainResponse = await fetch(evolutionChainUrl);
  const evolutionChain = await evolutionChainResponse.json();
  if (evolutionChain["chain"]["species"]) {
    document.getElementById(`evolutionChain0${t}`).innerHTML += " " + evolutionChain["chain"]["species"]["name"];
    const evoURL1 = evolutionChain["chain"]["species"]["url"];
    const evoResponse1 = await fetch(evoURL1);
    const evoTest = await evoResponse1.json();
    console.log(evoTest);
    const API = APIs + evoTest['id']
    console.log(API);
    let response = await fetch(API);
    const currentPokemon = await response.json();
    console.log("Test:", currentPokemon);
    const evoIMG0 = getPokemonImage(currentPokemon)
    document.getElementById(`evolutionChainIMG0${t}`).src =  evoIMG0 ;
  }
  if (evolutionChain["chain"]["evolves_to"][0]) {
    document.getElementById(`evolutionChain1${t}`).innerHTML += " " + evolutionChain["chain"]["evolves_to"][0]["species"]["name"];
    const evoURL1 = evolutionChain["chain"]["evolves_to"][0]["species"]["url"];
    const evoResponse1 = await fetch(evoURL1);
    const evoTest = await evoResponse1.json();
    console.log(evoTest);
    const API = APIs + evoTest['id']
    console.log(API);
    let response = await fetch(API);
    const currentPokemon = await response.json();
    console.log("Test:", currentPokemon);
    const evoIMG1 = getPokemonImage(currentPokemon)
    document.getElementById(`evolutionChainIMG1${t}`).src = evoIMG1;
  }
  if (evolutionChain["chain"]["evolves_to"][0] == undefined) {
    console.log("This Pokemon dont evolve/undefined");
  } else {
    document.getElementById(`evolutionChain2${t}`).innerHTML += " " + evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]["species"]["name"];
    const evoURL1 = evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]["species"]["url"];
    const evoResponse1 = await fetch(evoURL1);
    const evoTest = await evoResponse1.json();
    console.log(evoTest);
    const API = APIs + evoTest['id']
    console.log(API);
    let response = await fetch(API);
    const currentPokemon = await response.json();
    console.log("Test:", currentPokemon);
    const evoIMG2 = getPokemonImage(currentPokemon)
    document.getElementById(`evolutionChainIMG2${t}`).src = evoIMG2;
  }
}

function pokemonFilter(currentPokemon, t) {
  pokeDexHTML.innerHTML += renderAllPokemons(t, currentPokemon);
  renderPokemonInfo(currentPokemon, t);
  document.getElementById(`pokemonTypes${t}`).innerHTML +=
    currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}`).innerHTML +=
      currentPokemon["types"][1]["type"]["name"];
  }
  setDesigns(t);
}

function renderPokemonInfo(currentPokemon, t) {
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonImage${t}`).src = imageUrl;
  document.getElementById(`pokemonID${t}`).innerHTML +=
    "#" + currentPokemon["id"];
  document.getElementById(`pokemonName${t}`).innerHTML +=
    currentPokemon["name"];
}

function getPokemonImage(currentPokemon) {
  if ( currentPokemon["sprites"]["other"]["dream_world"] && currentPokemon["sprites"]["other"]["dream_world"]["front_default"]
  ) {
    return currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  } else if (
    currentPokemon["sprites"]["other"]["official-artwork"] && currentPokemon["sprites"]["other"]["official-artwork"]["front_default"]
  ) {
    return currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
  }
  return null;
}

async function openPokemon(t) {
  urlRE = APIs + t;
  console.log("URL-RE:", urlRE);
  let response = await fetch(urlRE);
  const currentPokemon = await response.json();
  console.log("Pokemon-RE:", currentPokemon);
  pokeDexHTMLOpen.innerHTML = openPokemonHTML(t);

  renderPokemonInfoOpen(currentPokemon, t);
  setDesignOpenCard(currentPokemon, t);
  document.getElementById('backgroundCard').classList.remove('d-none')
}

 function renderPokemonInfoOpen(currentPokemon, t) {
  const imageUrl = getPokemonImage(currentPokemon);
  document.getElementById(`pokemonImage${t}Open`).src = imageUrl;
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}Open`).innerHTML += currentPokemon["types"][1]["type"]["name"];
  }
  if (currentPokemon["abilities"][1]) {
    document.getElementById(`abilities${t}`).innerHTML += currentPokemon["abilities"][1]["ability"]["name"] + ", ";
  }
  if (currentPokemon["abilities"][2]) {
    document.getElementById(`abilities${t}`).innerHTML += currentPokemon["abilities"][2]["ability"]["name"] + ", ";
  }

  document.getElementById(`pokemonTypes${t}Open`).innerHTML +=
    currentPokemon["types"][0]["type"]["name"];
  document.getElementById(`abilities${t}`).innerHTML +=
    currentPokemon["abilities"][0]["ability"]["name"];
  document.getElementById(`pokemonID${t}Open`).innerHTML +=
    "#" + currentPokemon["id"];
  document.getElementById(`pokemonName${t}Open`).innerHTML +=
    currentPokemon["name"];
  document.getElementById(`weight${t}`).innerHTML +=
    currentPokemon["weight"] + " kg";
  document.getElementById(`height${t}`).innerHTML += currentPokemon["height"];
  document.getElementById("pokeDexHTMLOpen").classList.remove("d-none");
  openDiagram(currentPokemon, t); 
  test(currentPokemon, t)
}

function openDiagram(currentPokemon, t) {
  statHP = currentPokemon["stats"][0]["base_stat"];
  statHP1 = currentPokemon["stats"][1]["base_stat"];
  statHP2 = currentPokemon["stats"][2]["base_stat"];
  statHP3 = currentPokemon["stats"][3]["base_stat"];
  statHP4 = currentPokemon["stats"][4]["base_stat"];
  statHP5 = currentPokemon["stats"][5]["base_stat"];
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["HP", "ATK", "DEF", "S.ATK", "S.DEF", "SPEED"],
      datasets: [
        {
          label: "Stats:",
          data: [statHP, statHP1, statHP2, statHP3, statHP4, statHP5],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(255, 205, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(201, 203, 207, 0.7)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 10,
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function closeCard() { 
  document.getElementById('cardContainer').classList.remove('roll-in-blurred-bottom');
  document.getElementById('cardContainer').classList.add('slide-out-top');
  document.getElementById('backgroundCard').classList.add('d-none');
 
  
}


async function getEvolutionChainUrl(currentPokemon) {
  const currentPokemonID = currentPokemon["id"];
  try {
    // Ermittle die URL für die Evolutionskette des angegebenen Pokémon
    const speciesResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${currentPokemonID}/`
    );
    const speciesData = await speciesResponse.json();
    const evolutionChainUrl = speciesData.evolution_chain.url;
    return evolutionChainUrl;
  } catch (error) {
    console.error(error);
  }
}

function renderAllPokemons(t) {
  return `
  <div onclick="openPokemon(${t})" id="pokemonContainer${t}" class="pokedex">
    <div class="imgCardContainerBG">
      <img class="imgCardBG" src="img/pokemonBallBG.png">
    </div>
    <div>
      <span id="pokemonID${t}"></span>
      <h1 id="pokemonName${t}"></h1>
    </div>
    <div class="infoContainer">
      <img class="imgSize" id="pokemonImage${t}">
      <span style="color:black" id="pokemonTypes${t}"></span>
      <span style="color:black" id="pokemonTypesX${t}"></span>;
    </div>
  </div>`;
}

function openPokemonHTML(t) {
  return `
  <div id="cardContainer" class="pokemonContainerRE roll-in-blurred-bottom">
    <div class="test">
      <div id="pokemonContainer${t}Open" class="pokedexCard">
        <div>
        <button onclick="closeCard()">x</button>
        <span id="pokemonID${t}Open"></span>
        <h1 class="pokemonNamePosi" id="pokemonName${t}Open"></h1>
        <div class="positionWH">
          <span class="abilities" id="weight${t}">weight:</span> <span class="abilities" id="height${t}">size:</span>
        </div>
        
     <div class="infoContainerPosi">
     <div class="infoContainerOpen">
     <span style="color:withe" id="pokemonTypes${t}Open"></span>
       <img class="imgSize" id="pokemonImage${t}Open">
       <span style="color:withe" id="pokemonTypesX${t}Open"></span>
     </div><span class="abilities" id="abilities${t}">Abilities: </span>
     </div>
     
      <div>
        <canvas style="background:black;" id="myChart"></canvas>
      </div>
      <div class="evolutionContainer">
        <div class="evolutionPokemonContainer" id=evolutionChain0${t}>
          <img class="evolutionIMG" id="evolutionChainIMG0${t}">
        </div>
        <div class="evolutionPokemonContainer" id=evolutionChain1${t}>
          <img class="evolutionIMG" id="evolutionChainIMG1${t}">
        </div>
        <div class="evolutionPokemonContainer" id="evolutionChain2${t}">
          <img class="evolutionIMG" id="evolutionChainIMG2${t}">
        </div>
      </div>
    </div>
  </div></div>
  `;
}
