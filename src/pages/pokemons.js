import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonsList from '../components/pokemonsList';

export default function Pokemons ({page}) {
    
    const [pokemons, setPokemons] = useState([]);

    // let total = [];
    // function getPokemons (contador) {
        
    //     axios
    //     .get("https://pokedex20201.herokuapp.com/pokemons?page=" + contador)
    //     .then((response) => response.data.data)
    //     .then((data) => {return(data)});

    // }
    useEffect ( () => {
                
        let total = [];
        let promises = [];
        for (let i = 1; i < 33; i++) {
            promises.push(
                axios.get('https://pokedex20201.herokuapp.com/pokemons?page=' + i).then(response => {
                let resposta = response.data.data;
                total = total.concat(resposta);
                
            })
            )
        }
        
Promise.all(promises).then(() => {total.sort((a,b) =>{
    
        if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }
    // a must be equal to b
    return 0;
}
    );setPokemons(total)});
        },[]);
    
    // console.log({pokemons});
    return <PokemonsList pokemons={pokemons} />;
}
