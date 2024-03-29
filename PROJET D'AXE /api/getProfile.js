function fetchProfil() {
    const apiUrl = 'https://hp-api.lainocs.fr/characters'; // URL de l'API
  
    return fetch(apiUrl).then((response) => response.json()); // Récupère les données de l'API
  }

  async function displayProfil() {
    const data = await fetchProfil(); // Récupère les données de l'API
    console.log(data);
    const list_inventory = ["harry-potter", "doloress-umbridge", "hermione-granger"] // Liste des personnages à afficher 
    let cardsProfile = document.querySelector(".cards_container_gallery");

    for (let i = 0; i < data.length; i++) { // Boucle pour afficher les cartes
        if (list_inventory.includes(data[i].slug)) { // Si le slug est dans la liste des personnages à afficher
          list_inventory.splice(list_inventory.indexOf(data[i].slug), 1) // On retire le slug de la liste
          console.log(list_inventory)
            cardsProfile.innerHTML +=
                `
                <div class="card" data-house="${data[i].house}" data-id="${data[i].slug}">
                  <div class="card_image_container">
                    <img
                      class="card_image"
                      src="${data[i].image}"
                      alt="${data[i].name}"
                    />
                  </div>
                  <h2 class="card_title">${data[i].name}</h2>
                  <div class="card_buttons">
                    <div class="card_button_readmore">En savoir plus</div>
                  </div>
                </div>
          `;
        }
    }
}

displayProfil();
