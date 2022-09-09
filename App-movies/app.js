const movies = require('./movies');

const moviesDH={
    listMovies: function(){
        movies.forEach(element => {
            console.log(element.title)
        });
    },
    searchMovie: function(id){
        return movies.find(peli => peli.id==id)
    },
    searchMoviesByGenre: function(genero){
        const lista=movies.filter(peli=>peli.genre==genero)
        return lista
    },
    totalPrice: function(){
        let listaDePrecios=[]
        movies.forEach(function(peli){
            listaDePrecios.push(peli.price)
        })
        return listaDePrecios.reduce(function(acum,num){
            return acum+num
        })
    },
    changeMovieGenre: function(id,genero){
        let pelicula= this.searchMovie(id)
        pelicula.genre=genero
        return pelicula
    }
}
