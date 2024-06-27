const APILINK = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=ad7d5ef6af25220121b4b8e650b94f2a&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=ad7d5ef6af25220121b4b8e650b94f2a&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("find-movie");

returnMovies(APILINK);
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            const div_row = document.createElement('div');
            const div_column = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;
            image.classList.add("movie-thumbnail");

            div_card.classList.add("movie-card");
            div_card.appendChild(image);
            div_card.appendChild(title);

            div_column.classList.add("column-container")
            div_column.appendChild(div_card);

            div_row.classList.add("row-container")
            div_row.appendChild(div_column);

            main.appendChild(div_row);
            
        });
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});
