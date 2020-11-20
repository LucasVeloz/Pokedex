// import { Router, Link } from 'react-router-dom';
import './styles.css';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function List({ pokemons }) {

        const PokemonEspec =  ( pokemon ) => {

            const [show, setShow] = useState(false);
        
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
        
            return (
            <>
                <Button variant="primary" onClick={handleShow} className='btn-espec'>
                Especificações
                </Button>
        
                <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>
                        <h4>
                            {pokemon.pokemon.name}  
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={pokemon.pokemon.image_url} alt='imagem do pokemon'></img>
                    <div className='infos'>
                        <h5>#{pokemon.pokemon.number}</h5>
                        <h5>Weight: {pokemon.pokemon.weight}kg</h5>
                        <h5>Height: {pokemon.pokemon.height}ft</h5>
                        <h5>Kind: {pokemon.pokemon.kind}</h5>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Fechar
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
            );
    }

    return (
        <>
            {pokemons && pokemons.map((pokemon) => (
                // <Router>
                //     <Link to={'/'}>
                // <a href='/pokemons/'>

                        <li key={pokemon.id}>
                            <div className='box'>
                                <div className='head'>
                                    <h5>#{pokemon.number}</h5>
                                    <h2> {pokemon.name} </h2>
                                </div>
                                <div className='pokemon'>
                                    <img src={pokemon.image_url} alt='imagem do pokemon'></img>
                                </div>
                                    <PokemonEspec pokemon={pokemon} />
                            </div>
                        </li>
                // </a>
                //     </Link>
                // </Router>
            ))}
        </>
    );
}
                    