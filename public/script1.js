let rating = 0;

const stars = document.querySelectorAll(".star");
const addButton = document.getElementById("addMovie");

stars.forEach(star => {

star.addEventListener("click", function(){

rating = this.dataset.value;

stars.forEach(s => s.classList.remove("active"));

for(let i = 0; i < rating; i++){
stars[i].classList.add("active");
}

});

});


function loadMovies(){

let movies = JSON.parse(localStorage.getItem("movies")) || [];

const movieList = document.getElementById("movieList");

movieList.innerHTML = "";

movies.forEach(movie => {

let starDisplay = "";

for(let i=0;i<movie.rating;i++){
starDisplay += "❤︎";
}

movieList.innerHTML += `
<div class="movie">
${movie.title} (${movie.year}) - ${movie.genre}, Rating: ${starDisplay}
</div>
`;

});

}


addButton.addEventListener("click", function(){

const title = document.getElementById("title").value;
const year = document.getElementById("year").value;
const genre = document.getElementById("genre").value;

let movie = {
title: title,
year: year,
genre: genre,
rating: rating
};

let movies = JSON.parse(localStorage.getItem("movies")) || [];

movies.push(movie);

localStorage.setItem("movies", JSON.stringify(movies));

loadMovies();

});


loadMovies();