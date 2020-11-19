export default function List({ pokemons }) {
    console.log(this);
    return (
        <div>
            {/* {pokemons.map((pokemons) => (
                    <li key={pokemons.id}>
                        <div className='box'>
                            <div className='head'>
                                <p>{pokemons.number}</p>
                                <p> {pokemons.name} </p>
                            </div>
                            <div className='pokemon'>
                                <img href={pokemons.image_url}></img>
                            </div>
                        </div>
                    </li>
            ))} */}
        </div>
    );
}
                    