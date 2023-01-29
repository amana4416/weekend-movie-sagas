import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';

function MovieDetails() {

    const dispatch = useDispatch();
    const params = useParams();
    //call movieDetails from redux store
    const movieDetails = useSelector(store => store.movieDetails);

    useEffecti (() => {
        const movieId = params.id;
        dispatch({
            type: 'SAGA/FETCH_MOVIE_DETAILS',
            payload: movieId
        })
        return ({
            type: 'SAGA/CLEAR_MOVIE_DETAILS'
        })
    }, [params.id])


    return (
        <>
            <section className="card">
                <img rc={movieDetails.poster} alt={movieDetails.title} />
                <h3> {movieDetails.title}</h3>
            </section>
        </>
    )
}

export default MovieDetails;