import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieFormItem.css';
//mui components
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';

//pass results through as a prop from MovieForm
function MovieFormItem({results}) {

    const dispatch = useDispatch();
    const history = useHistory();

    // const showResultsDetails = (results) => {
    //     console.log(results.id)
    //     history.push(`/results/${results.id}`)
    // }

     //declaring these variables so we can send to a new DB
     const resultsTitle = results.title;
     const resultsPoster = `https://image.tmdb.org/t/p/original/${results.poster_path}`
     const resultsDescription = results.overview;

    const addToFavorites = (id) => {
        console.log('we added a movie to the favorites table from MovieFromItem')
        dispatch({
            type: 'SAGA/ADD_SEARCH_TO_FAVS',
            payload: {
                title: resultsTitle,
                poster: resultsPoster,
                description: resultsDescription
            }
        })
    }

    return (
        <>
            <Paper 
                className="resultBackground"
                elevation={3}
                sx={{backgroundColor: '#B8C4BB', margin: '30px', height: '420px', width: '410px'}}
            >
                <h4>{resultsTitle}</h4>
                <img 
                    src={resultsPoster} alt={resultsTitle} 
                    // onClick={(e) => { showResultsDetails(results) }} 
                />
                <div>
                    <p>Add to Favorites List <FavoriteIcon onClick={() => addToFavorites(results.id)} /></p>
                </div>
                
            </Paper>
        </>
    )
}

export default MovieFormItem