import axios from "axios";
import { useEffect, useState } from "react";
import PokemonsList from "../components/pokemonsList";

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);

    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (!loaded) {
            axios
                .get("https://pokedex20201.herokuapp.com/pokemons?page=" + page)
                .then((response) => {
                    const newPokemons = response.data.data;

                    setPokemons((pokemons) => {
                        return pokemons.concat(newPokemons);
                    });
					if (response.data.next_page == null) {
						setLoaded(true);
					}
					setPage(page+1);
                });
            }
    },[ loaded, page ]);

    return <PokemonsList pokemons={pokemons} />;
}
