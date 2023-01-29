const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');

//keeping our api key a secret
const movie_api_key = process.env.movie_api_key;

module.exports = router;