import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieFormItem from '../MovieFormItem/MovieFormItem';
import './MovieForm.css'
//mui components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function MovieForm() {

    //assinging inputs a piece of state
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const searchMovies = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SAGA/SEARCH_MOVIES',
            payload: search
        })
        //clear input
        setSearch('');
    }

    return(
        <>
            <form onSubmit={searchMovies}>
                <TextField 
                    value={search}
                    label="Your search awaits!"
                    varient="standard"
                    sx={{backgroundColor: '#E8F7EE', color: '#663F46'}}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <Button
                    varient="contained"
                    type='submit'
                    sx={{backgroundColor: '#E8F7EE', color: '#663F46', margin: '10px'}}
                >
                    Search
                </Button>
            </form>
        </>
    )
}

export default MovieForm