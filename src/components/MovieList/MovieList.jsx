import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
//mui components
import Paper from '@mui/material/Paper';

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

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Paper 
                            className="paper"
                            elevation={3}
                            sx={{backgroundColor: '#B8C4BB', margin: '30px', height: '390px', width: '300px'}}
                            key={movie.id} 
                            onClick={(e) => { showDetails(movie) }} 
                        >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </Paper>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;