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
    //call resultsDetails from redux store
    const resultsDetails = useSelector(store => store.resultsDetails);

    useEffect (() => {
        const resultsId = params.id;
        dispatch({
            type: 'SAGA/FETCH_RESULTS_MOVIE_DETAILS',
            payload: resultsId
        })
        return ({
            type: 'SAGA/CLEAR_RESULTS_MOVIE_DETAILS'
        })
    }, [params.id])

    return (
        <>
            <h2>here's the deets</h2>
        </>
    )
}

export default ResultsDetails