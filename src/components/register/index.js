import './styles.css';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
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
          <h3>Register</h3>
          <Button className='close' onClick={props.onHide}>Close</Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input type="text" className='text'></input>
          <input type="submit" className='btn-register'></input>
        </form>
        {/* <Router>
            <Link to='/login' className='link'>já tem uma conta?</Link>
        </Router> */}
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

function Register() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className='register' variant="primary" onClick={() => setModalShow(true)}>
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