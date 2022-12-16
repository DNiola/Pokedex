function setDesigns(t) {
    proofedTypeName = currentPokemon["types"][0]["type"]["name"];
    pokemonStyle = document.getElementById(`pokemonContainer${t}`)
    if (proofedTypeName == "grass"){
      pokemonStyle.classList.add('designGrass')
    }
    else if (proofedTypeName == "fire"){
      pokemonStyle.classList.add('designFire')
    }
    else if (proofedTypeName == "water"){
      pokemonStyle.classList.add('designWater')
    }
    else if (proofedTypeName == "bug"){
      pokemonStyle.classList.add('designBug')
    }
    else if (proofedTypeName == "normal"){
      pokemonStyle.classList.add('designNormal')
    }
    else if (proofedTypeName == "poison"){
      pokemonStyle.classList.add('designPoison')
    }
    else if (proofedTypeName == "electric"){
      pokemonStyle.classList.add('designElectric')
    }
    else if (proofedTypeName == "ground"){
      pokemonStyle.classList.add('designGround')
    }
    else if (proofedTypeName == "fairy"){
      pokemonStyle.classList.add('designFairy')
    }
    else if (proofedTypeName == "fighting"){
      pokemonStyle.classList.add('designFighting')
    }
    else if (proofedTypeName == "psychic"){
      pokemonStyle.classList.add('designPsychic')
    }
    else if (proofedTypeName == "rock"){
      pokemonStyle.classList.add('designRock')
    }
    else if (proofedTypeName == "ghost"){
      pokemonStyle.classList.add('designGhost')
    }
    else if (proofedTypeName == "ice"){
      pokemonStyle.classList.add('designIce')
    }
    else if (proofedTypeName == "dragon"){
      pokemonStyle.classList.add('designDragon')
    }
    else if (proofedTypeName == "dark"){
      pokemonStyle.classList.add('designDark')
    }
    else if (proofedTypeName == "steel"){
      pokemonStyle.classList.add('designSteel')
    }
    else if (proofedTypeName == "flying"){
      pokemonStyle.classList.add('designFlying')
    }
    else {
      console.log('Hier fehlt der design')
    }
  }

  function setDesignOpenCard(currentPokemon, t) {
    proofedTypeName = currentPokemon["types"][0]["type"]["name"];
    pokemonStyleCard = document.getElementById(`pokemonContainer${t}Open`)
    if (proofedTypeName == "grass"){
        pokemonStyleCard.classList.add('designGrass')
      }else if (proofedTypeName == "fire"){
        pokemonStyleCard.classList.add('designFire')
      }
      else if (proofedTypeName == "water"){
        pokemonStyleCard.classList.add('designWater')
      }
      else if (proofedTypeName == "bug"){
        pokemonStyleCard.classList.add('designBug')
      }
      else if (proofedTypeName == "normal"){
        pokemonStyleCard.classList.add('designNormal')
      }
      else if (proofedTypeName == "poison"){
        pokemonStyleCard.classList.add('designPoison')
      }
      else if (proofedTypeName == "electric"){
        pokemonStyleCard.classList.add('designElectric')
      }
      else if (proofedTypeName == "ground"){
        pokemonStyleCard.classList.add('designGround')
      }
      else if (proofedTypeName == "fairy"){
        pokemonStyleCard.classList.add('designFairy')
      }
      else if (proofedTypeName == "fighting"){
        pokemonStyleCard.classList.add('designFighting')
      }
      else if (proofedTypeName == "psychic"){
        pokemonStyleCard.classList.add('designPsychic')
      }
      else if (proofedTypeName == "rock"){
        pokemonStyleCard.classList.add('designRock')
      }
      else if (proofedTypeName == "ghost"){
        pokemonStyleCard.classList.add('designGhost')
      }
      else if (proofedTypeName == "ice"){
        pokemonStyleCard.classList.add('designIce')
      }
      else if (proofedTypeName == "dragon"){
        pokemonStyleCard.classList.add('designDragon')
      }
      else if (proofedTypeName == "dark"){
        pokemonStyleCard.classList.add('designDark')
      }
      else if (proofedTypeName == "steel"){
        pokemonStyleCard.classList.add('designSteel')
      }
      else if (proofedTypeName == "flying"){
        pokemonStyleCard.classList.add('designFlying')
      }
      else {
        console.log('Hier fehlt der design')
      }
  }





  

