import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieFormItem from '../MovieFormItem/MovieFormItem';
import './MovieForm.css'
//mui components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Movie } from '@mui/icons-material';

function MovieForm() {

    //assinging input a piece of state
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    //get searchResults from the redux store
    const searchResults = useSelector(store => store.searchResults);

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
                <h2>Search for a Movie: </h2>
                <TextField 
                    value={search}
                    label="Your search awaits!"
                    varient="standard"
                    sx={{backgroundColor: '#E8F7EE', color: '#663F46'}}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <Button
                    varient='contained'
                    type='submit'
                    sx={{backgroundColor: '#E8F7EE', color: '#663F46', margin: '10px'}}
                >
                    Search
                </Button>
            </form>
            <br></br>

            <h2>Search Results:</h2>
            <div>
                {searchResults.map(results => {
                    return (
                        <MovieFormItem 
                            key={results.id}
                            // sending results to MovieFormItem as a prop
                            results={results}
                        />
                    )
                })}
            </div>


        </>
    )
}

export default MovieForm