import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Favorites.css';
//mui components
import Paper from '@mui/material/Paper';

function Favorites() {
    
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favoriteMovies);
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_FAVORITE_MOVIES'
        })
    }, [])

    const showDetails = (favorite) => {
        console.log(favorite.id);
        history.push(`/favorites/${favorite.id}`)
    }

    return (
        <> 
        <h1>Favorite Movies:</h1>
        <section className="movies">
            {favorites.map(favorite => {
                return (
                    <Paper 
                        className="paper"
                        elevation={3}
                        sx={{backgroundColor: '#B8C4BB', margin: '30px', height: '420px', width: '300px'}}
                        key={favorite.id} 
                    >
                        <h3>{favorite.title}</h3>
                        <img 
                            src={favorite.poster} alt={favorite.title}
                            onClick={(e) => {showDetails(favorite)}} 
                        />
                    </Paper>
                )
            })}
        </section>
        </>
    )
}

export default Favorites;