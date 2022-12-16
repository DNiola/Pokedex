let APIs = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemon;
let currentAPI;

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

function pokemonFilter(currentPokemon, t) {
  pokeDexHTML.innerHTML += renderAllPokemons(t, currentPokemon);
  renderPokemonInfo(currentPokemon, t);
  document.getElementById(`pokemonTypes${t}`).innerHTML += currentPokemon["types"][0]["type"]["name"];
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}`).innerHTML += currentPokemon["types"][1]["type"]["name"];
  }
  setDesigns(t)
}

function renderPokemonInfo(currentPokemon, t) {
  document.getElementById(`pokemonID${t}`).innerHTML += "#" + currentPokemon["id"];
  document.getElementById(`pokemonName${t}`).innerHTML += currentPokemon["name"];
  document.getElementById(`pokemonImage${t}`).src += currentPokemon["sprites"]["other"]['dream_world']["front_default"];
}

function renderAllPokemons(t) {
  return `
  <div onclick="openPokemon(${t})" id="pokemonContainer${t}" class="pokedex">
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

async function openPokemon(t) {
  urlRE = APIs + t;
  console.log("URL-RE:", urlRE);
  let response = await fetch(urlRE);
  const currentPokemon = await response.json();
  console.log("Pokemon-RE:", currentPokemon);
  pokeDexHTMLOpen.innerHTML = openPokemonHTML(t);
  renderPokemonInfoOpen(currentPokemon, t);
  setDesignOpenCard(currentPokemon, t)
}


function renderPokemonInfoOpen(currentPokemon, t) {
  if (currentPokemon["types"][1]) {
    document.getElementById(`pokemonTypesX${t}Open`).innerHTML += currentPokemon["types"][1]["type"]["name"];
  }
  document.getElementById(`pokemonTypes${t}Open`).innerHTML += currentPokemon["types"][0]["type"]["name"];
  document.getElementById(`pokemonImage${t}Open`).src += currentPokemon["sprites"]["other"]['dream_world']["front_default"];
  document.getElementById(`pokemonID${t}Open`).innerHTML += "#" + currentPokemon["id"];
  document.getElementById(`pokemonName${t}Open`).innerHTML += currentPokemon["name"];
  document.getElementById(`weight${t}`).innerHTML += currentPokemon["weight"];
  document.getElementById(`height${t}`).innerHTML += currentPokemon["height"];
  document.getElementById("pokeDexHTMLOpen").classList.remove("d-none");
  openDiagram(currentPokemon, t)
}

function openDiagram(currentPokemon, t) {
  statHP = currentPokemon["stats"][0]['base_stat'];
  statHP1 = currentPokemon["stats"][1]['base_stat'];
  statHP2 = currentPokemon["stats"][2]['base_stat'];
  statHP3 = currentPokemon["stats"][3]['base_stat'];
  statHP4 = currentPokemon["stats"][4]['base_stat'];
  statHP5 = currentPokemon["stats"][5]['base_stat'];
  
  
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["HP", "ATK", 'DEF', 'S.ATK', 'S.DEF', "SPEED"],
      datasets: [{
        label: 'Stats:',
        data: [statHP, statHP1, statHP2, statHP3, statHP4, statHP5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 205, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(201, 203, 207, 0.7)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 10
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function openPokemonHTML(t) {
  return `
  <div class="pokemonContainerRE">
    <div id="pokemonContainer${t}Open" class="pokedexCard">
      <div>
        <span id="pokemonID${t}Open"></span>
        <h1 id="pokemonName${t}Open"></h1>
        <div class="positionWH">
          <span id="weight${t}">weight:</span> <span id="height${t}">size:</span>
        </div>
      <div class="infoContainerOpen">
        <img class="imgSize" id="pokemonImage${t}Open">
        <span style="color:black" id="pokemonTypes${t}Open"></span>
        <span style="color:black" id="pokemonTypesX${t}Open"></span>;
      </div>
      <div>
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </div>
  `;
}
