import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { useParams, useHistory } from 'react-router-dom';
import './MovieDetails.css';
//mui components
import UndoIcon from '@mui/icons-material/Undo';
import Paper from '@mui/material/Paper';

function MovieDetails() {

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    //call movieDetails from redux store
    const movieDetails = useSelector(store => store.movieDetails);

    useEffect (() => {
        const movieId = params.id;
        dispatch({
            type: 'SAGA/FETCH_MOVIE_DETAILS',
            payload: movieId
        })
        return ({
            type: 'SAGA/CLEAR_MOVIE_DETAILS'
        })
    }, [params.id])

    //back button to go back to movieList page
    const goBack = () => {
        history.push('/');
    }


    return (
        <>
        <h1> <UndoIcon onClick={goBack}>Back</UndoIcon></h1>

        <Paper 
            className="poster"
            elevation={3}
            sx={{backgroundColor: '#B8C4BB', height: '520px', width: '410px', margin:'20px',}}
        >
            <img  src={movieDetails.poster} alt={movieDetails.title} className="detailsPoster" />
        </Paper>

        <Paper 
            className="info"
            elevation={3}
            sx={{backgroundColor: '#B8C4BB', width: '650px', height: 'auto'}}
        >
            <section className="text">
                <h2> {movieDetails.title}</h2>
                <h3>{movieDetails.description}</h3>
            </section>
        </Paper>
        </>
    )
}

export default MovieDetails;