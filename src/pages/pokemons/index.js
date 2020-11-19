import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '../../components/list';

export default function Pokemons ({page}) {
    
    const [pokemons, setPokemons] = useState([]);

    useEffect( () => {
        axios
        .get("https://pokedex20201.herokuapp.com/pokemons/" )
        .then((response) => response.data)
        .then((data) => setPokemons(data));
    },[]);
    console.log(pokemons)
    return <List pokemons={pokemons} />;
}
