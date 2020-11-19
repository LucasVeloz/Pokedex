import './styles.css';
export default function List({ pokemons }) {
    return (
        <>
            {pokemons && pokemons.map((pokemons) => (
                    <li key={pokemons.id}>
                        <div className='box'>
                            <div className='head'>
                                <h5>#{pokemons.number}</h5>
                                <h2> {pokemons.name} </h2>
                            </div>
                            <div className='pokemon'>
                                <img src={pokemons.image_url} alt='imagem do pokemon'></img>
                            </div>
                        </div>
                    </li>
            ))}
        </>
    );
}
                    