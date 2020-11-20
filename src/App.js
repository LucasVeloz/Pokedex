import './App.css';
import Pokemons from './pages/pokemons';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <div>
      {/* <Router>
        <Route path="/" exact> */}
        <BrowserRouter>
          <Pokemons/>
        </BrowserRouter>
          
        {/* </Route> */}
        {/* <Route>

        </Route> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
