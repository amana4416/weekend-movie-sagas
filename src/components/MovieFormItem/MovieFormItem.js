import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
//mui components
import Paper from '@mui/material/Paper';

//pass results through as a prop from MovieForm
function MovieFormItem({results}) {

  
    
    const dispatch = useDispatch();
    const history = useHistory();


    
    return (
        <>
            {/* <Paper 
                className="resultBackground"
                elevation={3}
                sx={{backgroundColor: '#B8C4BB', margin: '30px', height: '390px', width: '300px'}}
            > */}
                <h3>{results.original_title}</h3>
                <img src={`https://image.tmdb.org/t/p/original/${results.poster_path}`} alt={results.title} />

            {/* </Paper> */}
        </>
    )
}

export default MovieFormItem