let movies = require('./movies');

const moviesDH={
    listMovies: function(){
        movies.forEach(element => {
            console.log(element.title)
        });
    },
    searchMovie: function(id){
        return movies.find(peli => peli.id==id)
    },
    changeMovieGenre: function(id,genero){
        let pelicula= this.searchMovie(id)
        pelicula.genre=genero
        return pelicula
    }
}

console.log(moviesDH.changeMovieGenre(3,"Accion"))