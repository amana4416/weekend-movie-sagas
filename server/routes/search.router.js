const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');
require('dotenv').config()

//keeping our api key a secret so we're importing from .env
const movie_api_key = process.env.movie_api_key;

//get route to display all movies that come up in search
router.get('/:query', (req, res) => {
    const search = req.params.query;
    //axios get to search in database
    axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=${movie_api_key}&language=en-US&query=${search}`
    })
        .then(response => {
            //send search results
            console.log(response.data.results)
            res.send(response.data.results);
        })
        .catch(error => {
            console.log('something broke in /api/search/:id GET', error);
            res.sendStatus(500);
        })
})

router.get('/:id', (req, res) => {
     axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=${movie_api_key}&language=en-US&query=${search}`
    })
        .then(response => {
            //send search results
            console.log(response.data.results)
            res.send(response.data.results);
        })
        .catch(error => {
            console.log('something broke in /api/search/:id GET', error);
            res.sendStatus(500);
        })
})

router.get('/:id', (req, res) => {
    console.log('seeing result movies details', req.body);

})

module.exports = router;