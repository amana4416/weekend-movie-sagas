import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './ResultsDetails.css';
//mui components
import UndoIcon from '@mui/icons-material/Undo';
import Paper from '@mui/material/Paper';

function ResultsDetails() {

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    //call movieDetails from redux store
    const resultsDetails = useSelector(store => store.resultsDetails);

    useEffect (() => {
        const resultsId = params.id;
        dispatch({
            type: 'SAGA/FETCH_RESULTS_MOVIE_DETAILS',
            payload: resultsId
        })
        return ({
            type: 'CLEAR_RESULT_DETAILS'
        })
    }, [params.id])

    const goBack = () => {
        history.push('/search');
    }

    return (
        <>
            <h1> <UndoIcon onClick={goBack}>Back</UndoIcon> </h1>
            <Paper 
                className="poster"
                elevation={3}
                sx={{backgroundColor: '#B8C4BB', height: '520px', width: '410px', margin:'20px',}}
            >
            <img  src={resultsDetails.poster} alt={resultsDetails.title} className="detailsPoster" />
        </Paper>

        <Paper 
            className="info"
            elevation={3}
            sx={{backgroundColor: '#B8C4BB', width: '650px', height: 'auto'}}
        >
            <section className="text">
                <h2>{resultsDetails.title}</h2>
                <h3>{resultsDetails.description}</h3>
            </section>
        </Paper>
        </>
    )
}

export default ResultsDetails