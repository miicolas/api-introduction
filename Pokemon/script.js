function fetchPokemon(pokemon) {
  return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then(response => response.json())
}

async function displayPokemon (pokemon){
    const data = await fetchPokemon(pokemon)
    const container_card = document.querySelector(".pokemon_container")

    container_card.innerHTML = 
    `
        <h3>${data.name}</h3>
        <img src="${data.sprites.front_default}" alt="${data.name}">
    `    
}

displayPokemon('ditto')