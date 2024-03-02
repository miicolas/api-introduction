function fetchFilm() {
  return fetch('https://api.themoviedb.org/3/movie/1895?api_key=00a9da85d2cbe5645149bedd416ed927') // fetch les données de l'API
    .then(response => { // si la réponse est ok, on la retourne
      if (!response.ok) { // sinon on retourne une erreur
        throw new Error('Network response was not ok');
      }
      return response;
    })
    .then(response => response.json()) // on retourne les données en format json
}

async function displayFilm (){
    const data = await fetchFilm() // on stocke les données dans une variable
    const container_films = document.querySelector(".film_container") // on stocke le container dans une variable

    container_films.innerHTML = // on injecte le titre du film dans le container
    `
        <h3>${data.title}</h3>
        <img src='https://image.tmdb.org/t/p/w500${data.poster_path}' alt="${data.title}"/>
    `    
}

displayFilm() // on appelle la fonction displayFilm 