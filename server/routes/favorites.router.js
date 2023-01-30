const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//post route to get favorite movies
router.post('/', (req, res) => {
    console.log('HELLO NEW FAV',req.body)
    const newFavorite = req.body;
    const newTitle = newFavorite.title;
    const newPoster = newFavorite.poster;
    const newDescription = newFavorite.description
    const sqlQuery = `
      INSERT INTO "favorites" (title, poster, description)
        VALUES 
        ($1, $2, $3);
    `;
    const sqlValues = [newTitle, newPoster, newDescription];
    pool.query(sqlQuery, sqlValues)
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