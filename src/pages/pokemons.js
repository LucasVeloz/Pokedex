import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonsList from '../components/pokemonsList';

export default function Pokemons ({page}) {
    
    const [pokemons, setPokemons] = useState([]);

    useEffect( () => {
        axios
            .get("https://pokedex20201.herokuapp.com/pokemons?page=all")
            .then((response) => response.data.data)
            .then((data) => setPokemons(data));
    },[]);

    // console.log({pokemons});
    return <PokemonsList pokemons={pokemons} />;
}
