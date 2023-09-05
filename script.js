const APILINK = "https://api.themoviedb.org/3/discover/movies?sort_by=popularity.desc&api_key=e8a36d998355fa53170ba22c4775d38d&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=e8a36d998355fa53170ba22c4775d38d&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(Element => {
                const div_card = document.createElement('div');
                const div_row = document.createElement('div');
                const div_column = document.createElement('div');
                const image = document.createElement('img');
                const title = document.createElement('h3');
                const center = document.createElement('center');

                title.innerHTML = `${element.title}`;
                image.src = IMG_PATH + element.poster_path;
                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.append(div_column);

                main.appendChild(div_row);
            });
        });
}


