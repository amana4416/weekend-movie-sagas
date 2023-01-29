import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieForm from '../MovieForm/MovieForm';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
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
      </Router>
    </div>
  )
}


export default App;
