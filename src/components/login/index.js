import './styles.css';
import React from 'react';
import { Modal, Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


function MyVerticallyCenteredModal(props) {

    const [username, setUsername ] = useState(localStorage.getItem("username"));
    const handleLogin = (event) => {

        event.preventDefault();
        localStorage.setItem("username",username);
        axios.get("https://pokedex20201.herokuapp.com/users/" + username )
        // .then( (response) => {response.data})
        .then((response) => {
            if(response.status===200) {
                
                return response.data
            } else {
                document.alert('usuário invalido');
            }
        })
    }


    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <div className="overlay"></div>
        <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
                <h3>Sign In</h3>
                <Button className='close' onClick={props.onHide}>Close</Button>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleLogin}>
                <input type="text" 
                className="text"
                onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input type="submit"  className='btn'></input>
            </form>
            {/* <Router>
                <Link to='/login' className='link'>já tem uma conta?</Link>
            </Router> */}
        </Modal.Body>
        <Modal.Footer>
            {/* <a className='link'>Primeira vez? Cadastre-se</a> */}
        </Modal.Footer>
        </Modal>
);
}

function Login() {


    const [modalShow, setModalShow] = React.useState(false);

    
return (
    <>
    <Button className='login' variant="primary" onClick={() => setModalShow(true)}>
        Sign In
    </Button>

    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
    />
    </>
);
}

export default Login;