import './App.css';
import Pokemons from './pages/pokemons';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <div>
        <BrowserRouter>
          <Pokemons/>
        </BrowserRouter>
          
    </div>
  );
}

export default App;
