const { Equalizer } = require('@mui/icons-material');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//post route to get favorite movies
router.post('/', (req, res) => {
    console.log('HELLO NEW FAV',req.body)
    const newFavorite = req.body;
    const newName = req.body.name;
    const newPoster = req.body.poster;
    const newDescription = req.body.newDescription
    const sqlQuery = `
      INSERT INTO "favorites" (name, poster, description)
        VALUES 
        ($1, $2, $3);
    `;
    const sqlValue = [newName, newPoster, newDescription];
    pool.query(sqlQuery, sqlValue)
    .then((response) => {
      //lets hope this works!!
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log('error in /api/favorites POST', error);
      res.sendStatus(500);
    })
  });

module.exports = router;