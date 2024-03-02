function fetchPokemon(pokemon) { //fetchPokemon est une fonction qui prend en paramètre un pokemon
  return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon) // fetch les données de l'API du pokemon
    .then(response => response.json())
}

async function displayPokemon (pokemon){ 
    const data = await fetchPokemon(pokemon) // on stocke les données dans une variable
    const container_card = document.querySelector(".pokemon_container") 

    container_card.innerHTML = 
    `
        <h3>${data.name}</h3>
        <img src="${data.sprites.front_default}" alt="${data.name}"> 
    `    
}

displayPokemon('ditto') // on appelle la fonction displayPokemon avec le nom du pokemon en paramètre