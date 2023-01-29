import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

//we want to use action.payload in our function, so we need to give 'action' as a parameter
function* fetchMovieDetails(action) {
    const movieId = action.payload;
    const response = yield axios({
        method: 'GET',
        url: `/api/movie/${movieId}`
    })
    //now that we have the movie details back from the server,
    // we're going to send it to our movieDetails reducer
    yield put({
        type: 'SET_MOVIE_DETAILS',
        payload: response.data
    })
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//movie details reducer, storing info on the movie you clicked on to see its details
const movieDetails = (state = {}, action) => {
    switch (action.type) {
        //when you want to see the movie details
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        //when you want go back to the movie list
        // this will clear the object so the next movie
        //you click on can be stored in the object
        case 'CLEAR_MOVIE_DETAILS':
            return {};
        default: 
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);