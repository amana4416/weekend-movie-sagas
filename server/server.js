const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const movieRouter = require('./routes/movie.router.js');
const genreRouter = require('./routes/genre.router.js');
const searchRouter = require('./routes/search.router.js');
const favoritesRouter = require('./routes/favorites.router.js');
const port = process.env.PORT || 5000;
require('dotenv').config();

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movie', movieRouter);
app.use('/api/genre', genreRouter);
app.use('/api/search', searchRouter);
app.use('/api/favorites', favoritesRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
