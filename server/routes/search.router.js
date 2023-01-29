const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');

//keeping our api key a secret so we're importing from .env
const movie_api_key = process.env.movie_api_key;

//get route
router.get('/:query', (req, res) => {
    const search = req.params.query;
    //url for axios get to search in database
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${movie_api_key}&language=en-US&query=${search}&page=1`)
        .then(response => {
            //send search results
            res.send(response.data.results);
        })
        .catch(error => {
            console.log('something broke in /api/search/:id GET', error);
            res.sendStatus(500);
        })
})

module.exports = router;