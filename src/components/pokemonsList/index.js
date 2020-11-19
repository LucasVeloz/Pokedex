
import Header from '../header';
import './styles.css';
import List from '../list';
const PokemonsList = ({pokemons}) => {
    return (
        <div className='container'>
            <Header/>
            <div className='centralizer'>
                <ul>
                    <List />
                </ul>
            </div>
        </div>
    );
}

export default PokemonsList;