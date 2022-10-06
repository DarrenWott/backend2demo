const movies = require('./db.json');
let globalId = 11;

const deleteMovie = (req, res) => {
    const movies = require('./db.json');
    const { id } = req.params;
    for(let i = 0; i < movies.length; i++){
      if(movies[i].id === +id){
        movies.splice(i, 1);
        return res.status(200).send(movies);
      }
    }
    res.status(400).send(movies);
  }

  const getAllMovies = (req, res) => {
    res.status(200).send(movies);
  }
  
  const addMovie = (req, res) => {
    const { title, rating, imageURL } = req.body;
    movies.push({
      title,
      rating,
      imageURL,
      id: globalId,
    });
    globalId++;
    res.status(200).send(movies);
  }
  
  const updateRating = (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    
    const movieIndex = movies.findIndex((movie) => movie.id === +id);
    if(type === 'plus' && movies[movieIndex].rating < 5){
      movies[movieIndex].rating++;
    } else if (type === 'minus' && movies[movieIndex].rating > 1){
      movies[movieIndex].rating--
    }
    res.status(200).send(movies);
  }
  
  module.exports = {
    getAllMovies,
    deleteMovie,
    addMovie,
    updateRating
  };
  