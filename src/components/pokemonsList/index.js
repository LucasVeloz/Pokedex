import './styles.css';
import List from '../list';
import '../../pages/pokemons';
const PokemonsList = () => {
    // console.log()
    return (
        <div className='container'>
            <div className='centralizer'>
                <ul>
                    <List />
                </ul>
            </div>
        </div>
    );
}

export default PokemonsList;