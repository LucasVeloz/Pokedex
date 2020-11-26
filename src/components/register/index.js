import "./styles.css";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

function MyVerticallyCenteredModal(props) {


    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [error, setError] = useState();

    const handleLogin = (event) => {
        event.preventDefault();

        localStorage.setItem("username",username);

        axios.post("https://pokedex20201.herokuapp.com/users", { username })
        .then(response => response.data.token)
        .catch((error) => setError(error));
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="overlay"></div>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>Register</h3>
                    <Button className="close" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleLogin}>
                    {error && <p>tente outro username</p>}
                    <input
                        type="text"
                        className="text"
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <input type="submit" className="btn-register"></input>
                </form>
                {/* <Router>
            <Link to='/login' className='link'>já tem uma conta?</Link>
        </Router> */}
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}

function Register() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button
                className="register"
                variant="primary"
                onClick={() => setModalShow(true)}
            >
                Register
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

// render(<Register />);
export default Register;
