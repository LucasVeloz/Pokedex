import './styles.css';
import React from 'react';
import { Modal, Button} from 'react-bootstrap';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


function MyVerticallyCenteredModal(props) {
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
            <form>
                <input type="text" className='text'></input>
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