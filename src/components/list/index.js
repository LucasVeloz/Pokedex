// import { Router, Link } from 'react-router-dom';
import './styles.css';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function List({ pokemons }) {

        const PokemonEspec =  ( pokemon ) => {

            const [show, setShow] = useState(false);
        
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
        
            console.log(pokemon);
            return (
            <>
                <Button variant="primary" onClick={handleShow} className='btn-espec'>
                Especificações
                </Button>
        
                <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>
                        <h4>
                            {pokemon.name}  
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={pokemon.image_url}></img>
                    <h5>{pokemon.number}</h5>
                    <h5>{pokemon.weight}</h5>
                    <h5>{pokemon.height}</h5>
                    <h5>{pokemon.kind}</h5>
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
            {pokemons && pokemons.map((pokemons) => (
                // <Router>
                //     <Link to={'/'}>
                // <a href='/pokemons/'>

                        <li key={pokemons.id}>
                            <div className='box'>
                                <div className='head'>
                                    <h5>#{pokemons.number}</h5>
                                    <h2> {pokemons.name} </h2>
                                </div>
                                <div className='pokemon'>
                                    <img src={pokemons.image_url} alt='imagem do pokemon'></img>
                                </div>
                                    <PokemonEspec props={pokemons} />
                            </div>
                        </li>
                // </a>
                //     </Link>
                // </Router>
            ))}
        </>
    );
}
                    