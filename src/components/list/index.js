import './styles.css';
export default function List({ pokemons }) {
    // console.log(pokemons);
    return (
        <>
            {pokemons && pokemons.map((pokemons) => (
                    <li key={pokemons.id}>
                        <div className='box'>
                            <div className='head'>
                                <p>#{pokemons.number}</p>
                                <p> {pokemons.name} </p>
                            </div>
                            <div className='pokemon'>
                                <img src={pokemons.image_url}></img>
                            </div>
                        </div>
                    </li>
            ))}
        </>
    );
}
                    