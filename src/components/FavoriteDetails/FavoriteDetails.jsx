import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './FavoriteDetails.css';
//mui components
import UndoIcon from '@mui/icons-material/Undo';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';

function FavoriteDetails() {

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const movieDetails = useSelector(store => store.movieDetails);

    useEffect (() => {
        const favoriteId = params.id;
        dispatch({
            type: 'SAGA/FETCH_FAVORITE_DETAILS',
            payload: favoriteId
        })
        return ({
            type: 'CLEAR_MOVIE_DETAILS'
        })
    }, [params.id])

    const goBack = () => {
        history.push('/favorites');
    }

    return (
        <>
            <h1> <UndoIcon onClick={goBack}>Back</UndoIcon> </h1>

            <Paper 
            className="poster"
            elevation={3}
            sx={{backgroundColor: '#B8C4BB', height: '540px', width: '410px', margin:'20px',}}
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

export default FavoriteDetails