import Header from "../header";
import "./styles.css";
import List from "../list";
import { useState } from "react";

const PokemonsList = ({ pokemons }) => {

    const [search, setSearch ] = useState("");
    // const [searchResult, setsearchResult] = useState([]);

    const handleSearch = event => {

        setSearch(event.target.value);
    }
    const filtered = pokemons.filter(pokemons => pokemons.name.includes(search));

    return (
        <div className="container">
            <Header />
            <form>
                <input type="text" 
                id='pesquisa'
                placeholder='Search'
                value={search}
                onChange={handleSearch}
                >
                
                </input>
            </form>
            <div className="centralizer">
                <ul>
                        <List pokemons={filtered} />
                </ul>
            </div>
        </div>
    );
};

export default PokemonsList;
