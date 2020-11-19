import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import PokemonsList from './components/pokemonsList';

function App() {
  return (

    <div>
      <Header/>
      <PokemonsList/>
      <Footer/>
    </div>
  );
}

export default App;
