import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
//mui components
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'SAGA/FETCH_MOVIES' });
    }, []);

    const showDetails = (movie) => {
        console.log(movie.id);
        history.push(`/details/${movie.id}`)
    }

    const addToFavorites = (movie) => {
        console.log('we added a movie to the favorites table from MovieList')
        dispatch({
            type: 'SAGA/ADD_TO_FAVORITES',
            payload: {
                title: movie.title,
                poster: movie.poster,
                description: movie.description
            }
        })
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Paper 
                            className="paper"
                            elevation={3}
                            sx={{backgroundColor: '#B8C4BB', margin: '30px', height: '420px', width: '300px'}}
                            key={movie.id} 
                        >
                            <h3>{movie.title}</h3>
                            <img 
                                src={movie.poster} alt={movie.title}
                                onClick={(e) => {showDetails(movie)}} 
                            />
                            <div>
                                <p>Add to Favorites List <FavoriteIcon onClick={() => addToFavorites(movie)} /></p>
                            </div>
                        </Paper>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;