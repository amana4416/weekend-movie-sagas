import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { useParams, useHistory } from 'react-router-dom';
//mui components
import ClearIcon from '@mui/icons-material/Clear';

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


        <ClearIcon onClick={goBack}>Back</ClearIcon>

            <section className="card">
                <img src={movieDetails.poster} alt={movieDetails.title} />
                <h3> {movieDetails.title}</h3>
            </section>
        </>
    )
}

export default MovieDetails;