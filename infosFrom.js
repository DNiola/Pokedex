function calculateSteps(speciesData) {
    const generation = speciesData["generation"]["name"]
    const hatchCounter = speciesData["hatch_counter"]
    let steps;
    if (generation == "generation-i" || generation === "generation-ii" || generation === "generation-iii" || generation === "generation-vii") {
      steps = hatchCounter * 256;
    } else if (generation === "generation-iv") {
      steps = hatchCounter * 255;
    } else if (generation === "generation-v" || generation === "generation-vi") {
      steps = hatchCounter * 257;
    } else {
        steps = 0
   }
    return steps;
  }



  function extractCaptureRates(speciesData) {
    const captureRate = speciesData["capture_rate"];
    const captureRateInPercent = (captureRate / 255 * 100 ).toFixed(2);
    return { captureRate, captureRateInPercent };
  }

  function extractGenderRates(speciesData) {
       const femaleRate = speciesData['gender_rate'] / 8;
    const maleRate = (8 - speciesData['gender_rate']) / 8;
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
    document.getElementById(`evolutionChain0${t}`).classList.remove("d-none");
    document.getElementById(`evolutionContainer`).classList.add("evolutionSoloContainer");
    document.getElementById(`evolutionChainIMG0${t}`).src = evoIMG0;
    return;
  }
  
  async function getSecondEvolutionImg(evolutionChain, t) {
    const evoURL1 = evolutionChain["chain"]["evolves_to"][0]["species"]["url"];
    const evoResponse1 = await fetch(evoURL1);
    const evoTest = await evoResponse1.json();
    const API = APIs + evoTest["id"];
    let response = await fetch(API);
    const currentPokemon = await response.json();
    const evoIMG1 = getPokemonImage(currentPokemon);
    document .getElementById(`evolutionContainer`).classList.remove("evolutionSoloContainer");
    document.getElementById(`evolutionContainer`).classList.add("evolutionTwoContainer");
    document.getElementById(`evolutionChain1${t}`).classList.remove("d-none");
    document.getElementById(`evolutionChainIMG1${t}`).src = evoIMG1;
    return;
  }
  
  async function getLastEvolutionImg(evolutionChain, t) {
    const evoURL1 =
      evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]["species"]["url"];
    const evoResponse1 = await fetch(evoURL1);
    const evoTest = await evoResponse1.json();
    const API = APIs + evoTest["id"];
    let response = await fetch(API);
    const currentPokemon = await response.json();
    const evoIMG2 = getPokemonImage(currentPokemon);
    document .getElementById(`evolutionContainer`).classList.remove("evolutionSoloContainer");
    document.getElementById(`evolutionChain2${t}`).classList.remove("d-none");
    document.getElementById(`evolutionChainIMG2${t}`).src = evoIMG2;
    return;
  }
  
  function setCurrentPokemonInfo(currentPokemon, t) {
    const sizeInMeters = currentPokemon["height"] / 10;
    const weightInKilograms = currentPokemon["weight"] / 10;
    const imageUrl = getPokemonImage(currentPokemon);
    document.getElementById(`pokemonImage${t}Open`).src = imageUrl;
    document.getElementById(`pokemonTypes${t}Open`).innerHTML +=
      currentPokemon["types"][0]["type"]["name"];
    document.getElementById(`abilities${t}`).innerHTML +=
      currentPokemon["abilities"][0]["ability"]["name"];
    document.getElementById(`pokemonID${t}Open`).innerHTML +=
      "#" + currentPokemon["id"];
    document.getElementById(`pokemonName${t}Open`).innerHTML +=
      currentPokemon["name"];
    document.getElementById(`weight${t}`).innerHTML +=
      "<br> " + weightInKilograms + " kg";
    document.getElementById(`height${t}`).innerHTML +=
      "<br> " + sizeInMeters + "m";


    document.getElementById("pokeDexHTMLOpen").classList.remove("d-none");
    document.getElementById("backgroundCard").classList.remove("d-none");

proofAndSetMoves(currentPokemon, t)

   
  }
  
function proofAndSetMoves(currentPokemon, t) {
  const pokemonMoves = currentPokemon["moves"]
  if (pokemonMoves == "") {
    document.getElementById(`moves${t}`).innerHTML += "Unknow"
  } else {
    for (let m = 0; m < currentPokemon["moves"].length; m++) {
      const moves = currentPokemon["moves"][`${m}`]["move"]["name"]
      document.getElementById(`moves${t}`).innerHTML +=
      moves + ", ";
    }
  }
}

  function setHabitat(speciesData, t){
    let habitat = speciesData["habitat"];
    if (speciesData["habitat"] === null) {
      document.getElementById(`habitat${t}`).innerHTML = "?"
      console.log(speciesData["habitat"], habitat);
    } else {
      document.getElementById(`habitat${t}`).innerHTML = speciesData["habitat"]['name']
    }
    
  }