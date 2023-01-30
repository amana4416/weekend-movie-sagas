import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieForm from '../MovieForm/MovieForm';
import Favorites from '../Favorites/Favorites';
import ResultsDetails from '../ResultsDetails/ResultsDetails';
import FavoriteDetails from '../FavoriteDetails/FavoriteDetails';
//mui componenents
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>   
      <Button
      sx={{backgroundColor: '#B8C4BB', color: '#663F46', margin: '5px'}}
      >
       <Link to="/">Home</Link>
      </Button>

      <Button
      sx={{backgroundColor: '#B8C4BB', color: '#663F46', margin: '5px'}}
      >
       <Link to="/search">Search</Link>
      </Button>
      <Button
      sx={{backgroundColor: '#B8C4BB', color: '#663F46', margin: '5px'}}
      >
        <Link to="/favorites">Favorites</Link>
      </Button>     

        <Route exact path="/">
          <MovieList />
        </Route>
        {/* Details page */}
        <Route exact path="/details/:id">
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route exact path="/search">
            <MovieForm />
        </Route>
        <Route exact path="/results/:id">
          <ResultsDetails />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/favorites/:id">
          <FavoriteDetails />
        </Route>
      </Router>
    </div>
  )
}


export default App;
