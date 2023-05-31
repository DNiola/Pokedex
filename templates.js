function renderAllPokemons(t) {
  return `
<div class="pokedexBG">
  <div onclick="openPokemon(${t})" id="pokemonContainer${t}" class="pokedex">
    <div class="pokeballIMG"></div>
      <div class="zIndex1 cursorP">
        <span id="pokemonID${t}" style="text-decoration: underline";></span>
        <h1 id="pokemonName${t}"></h1>
        <span class="types" id="pokemonTypes${t}"></span>
        <span class="types" id="pokemonTypesX${t}"></span>
      </div>
      <div class="infoContainer">
        <img class="imgCardsSize" id="pokemonImage${t}">
      </div>
    </div>
  </div>
</div>
`;
}
{/* <div id="loadingContainer${t}" class="d-none">
    <div id="loading-wrapper">
      <div id="loading-text">LOADING</div>
      <div id="loading-content"></div>
    </div>
  </div> */}

function renderCountsPokemons(t) {
  return `
<div class="pokedexBG">
  
  <div onclick="openPokemon(${t})" id="pokemonCountContainer${t}" class="pokedex d-none">  
  <div class="pokeballIMG"></div>
    <div class="zIndex1 cursorP">
      <span id="pokemonCountID${t}" style="text-decoration: underline";></span>
      <h1 id="pokemonCountName${t}"></h1>
      <span class="types" id="pokemonCountTypes${t}"></span>
      <span class="types" id="pokemonCountTypesX${t}"></span>
    </div>
    <div class="infoContainer">
      <img class="imgCardsSize" id="pokemonCountImage${t}">
    </div>
  </div>
</div>
`;
}


function openPokemonHTML(t) {
  return `
  <div id="cardContainer" class="pokemonContainerOpen">
   <div class="cardContainer">
      <div id="pokemonContainer${t}Open" class="pokedexCard">
        <div class="pokemonNameContainerPosi">
          <div class="pokemonNameContainer">
            <h1 class="pokemonNamePosi" id="pokemonName${t}Open"></h1>
          </div>
        </div>
        <div class="cardheader">
        <div class="idPosi">
          <h3 class="pokemonPosiID" id="pokemonID${t}Open"></h3>
        </div>
        <div class="closeBtnPosi">
          <button class="cardBtnIcons" onclick="closeCard()">
            <img class="cardIconsImg" src="icon/close.png">
          </button>
        </div>
      </div>
      <div class="infoContainerPosi">
      <div>
        <button class="cardBtnIcons" onclick="lastPokemon(${[t]})">
          <img class="cardIconsImg" src="icon/left.png">
        </button>
      </div>
      <div class="infoPosiContainerOpen">
        <div class="infoContainerOpen">
          <img class="imgSize" id="pokemonImage${t}Open">
        </div>
      </div>
      <div>   
        <button class="cardBtnIcons" onclick="nextPokemon(${[t]})"><img class="cardIconsImg" src="icon/right.png"></button>
      </div>
    </div>
    <div class="subInfoCounatiner">
      <div class="positionTypes">
        <b class="typesOpen" id="pokemonTypes${t}Open"></b>
        <b class="typesOpen" id="pokemonTypesX${t}Open"></b>
      </div>
      <div class="positionWH">
        <b class="propotion propotionLeft" id="weight${t}">Weight</b>
        <b class="propotion propotionRight" id="height${t}">Size</b>
      </div>
        <b class="centerFlex abilities positionWH" id="abilities${t}">Abilities: </b>
    </div>
    <table class="blueTable">
      <thead>
        <tr>
          <th>Happiness</th>
          <th>Generation</th>
          <th>Gender Rate</th>
          <th>Capture Rate</th>
          <th>Growth Rate</th>
          <th>Egg Group</th>
          <th>Hatch Counter</th>
          <th>Habitat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <span id="happiness${t}" class="centerFlex"></span>
          </td>
        <td >
          <span class="centerFlex" id="generation${t}"></span> 
        </td>
        <td > 
          <div class="genderSingleRate">
            <span id="genderRate${t}"></span>
          </div>
          <div class="genderContainer">
            <img class="genderMaleIMG" src="img/male.png">
            <span class="genderRate" id="maleRate${t}"></span>
            <img class="genderIMG" src="img/female.png">
            <span class="genderRate" id="femaleRate${t}"></span>
          </div>
        </td>
          <td><span class="centerFlex" id="captureRate${t}"></span></td>
          <td><span class="centerFlex" id="growthRate${t}"></span></td>
          <td><span class="centerFlex" id="eggGroup${t}"></span></td>
          <td><span class="centerFlex" id="hatchCounter${t}"></span></td>
          <td><span class="centerFlex" id="habitat${t}"></span></td>
        </tr>
      </tbody>
    </table>
    <canvas class="chart" id="myChart"></canvas>
      <div class="evolutionContainer" id="evolutionContainer">
        <div class="evolutionPokemonContainer d-none" id=evolutionChain0${t}>
          <img class="evolutionIMG" id="evolutionChainIMG0${t}">
        </div>
        <img class="cardIconsImg d-none" id="evolutionArray" src="icon/right.png">
        <div class="evolutionPokemonContainer d-none" id=evolutionChain1${t}>
          <img class="evolutionIMG" id="evolutionChainIMG1${t}">
        </div>
        <img class="cardIconsImg d-none" id="secondEvolutionArray" src="icon/right.png">
        <div class="evolutionPokemonContainer d-none" id="evolutionChain2${t}">
          <img class="evolutionIMG" id="evolutionChainIMG2${t}">
        </div>
      </div>
      <div>
        <div class="positionTypes">
          <span class="moves" id="moves${t}"><h3>moves:</h3></span>
        </div>
      </div>
    </div>
  </div>
`;
}



