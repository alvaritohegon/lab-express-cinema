const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((response) => {
      console.log(response);
      res.render("movies.hbs", {
        allMovies: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/movie/:movieId', (req, res, next) => {
    Movie.findById( req.params.movieId)
    .then( foundMovie => {
      res.render("movie-info.hbs", {foundMovie});
    })
    .catch( err => console.log(`Error while getting movie's details ${err}`) )
  })
  

module.exports = router;
