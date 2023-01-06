function proofSteps(speciesData) {
  let steps;
  const generation = speciesData["generation"]["name"];
  const hatchCounter = speciesData["hatch_counter"];
  if ( generation == "generation-i" || generation === "generation-ii" || generation === "generation-iii" || generation === "generation-vii" ) {
    steps = hatchCounter * 256;
  } else if (generation === "generation-iv") {
    steps = hatchCounter * 255;
  } else if (generation === "generation-v" || generation === "generation-vi") {
    steps = hatchCounter * 257;
  } else {
    steps = "?";
  }
  return steps;
}


function extractCaptureRates(speciesData) {
  const captureRate = speciesData["capture_rate"];
  const captureRateInPercent = ((captureRate / 255) * 100).toFixed(2);
  return { captureRate, captureRateInPercent };
}


function extractGenderRates(speciesData) {
  const femaleRate = speciesData["gender_rate"] / 8;
  const maleRate = (8 - speciesData["gender_rate"]) / 8;
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
  setCardForFirstEvolution(evoIMG0, t);
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
  setCardForSecondEvolution(evoIMG1, t);
  return;
}


async function getLastEvolutionImg(evolutionChain, t) {
  const evoURL1 = evolutionChain["chain"]["evolves_to"][0]["evolves_to"][0]["species"]["url"];
  const evoResponse1 = await fetch(evoURL1);
  const evoTest = await evoResponse1.json();
  const API = APIs + evoTest["id"];
  let response = await fetch(API);
  const currentPokemon = await response.json();
  const evoIMG2 = getPokemonImage(currentPokemon);
  setCardForLastEvolution(evoIMG2, t);
  return;
}


function getPokemonImage(currentPokemon) {
  const dreamWorldImg1 = currentPokemon["sprites"]["other"]["dream_world"];
  const dreamWorldImg2 = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  const dreamWorldImg3 = currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
  const dreamWorldImg4 = currentPokemon["sprites"]["other"]["official-artwork"];
  if (dreamWorldImg1 && dreamWorldImg2) {
    return dreamWorldImg2;
  } else if (dreamWorldImg4 && dreamWorldImg3) {
    return dreamWorldImg3;
  }
  return null;
}


function proofEvolutionChain(speciesData) {
  const evolution = speciesData["evolution_chain"];
  if (evolution == null) {
    console.log("ERROR");
    return;
  } else {
    const evolutionChainUrl = speciesData["evolution_chain"]["url"];
    return evolutionChainUrl;
  }
}


function openDiagram(currentPokemon) {
  statHP = currentPokemon["stats"][0]["base_stat"];
  statATK = currentPokemon["stats"][1]["base_stat"];
  statDEF = currentPokemon["stats"][2]["base_stat"];
  statSATK = currentPokemon["stats"][3]["base_stat"];
  statSDEF = currentPokemon["stats"][4]["base_stat"];
  statSPEED = currentPokemon["stats"][5]["base_stat"];
  statMAX = 250;
  Chart.defaults.borderColor = "#fafafa";
  Chart.defaults.color = "white";
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["HP", "ATK", "DEF", "S.ATK", "S.DEF", "SPEED"],
      datasets: [
        {
          label: "Base stats:",
          data: [
            statHP,
            statATK,
            statDEF,
            statSATK,
            statSDEF,
            statSPEED,
            statMAX,
          ],
          borderRadius: 8,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(255, 205, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(201, 203, 207, 0.7)",
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      indexAxis: "y",
      barPercentage: 0.6,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}
