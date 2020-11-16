import './styles.css';


const Register = props => {
    
    return (
        <div className="overlay">
            <div className="modalRegister">
                <h3>Register</h3>
                <form>
                    <input type="text" className='text'></input>
                    <input type="submit" value="Registrar" className='btn'></input>
                </form>
                <a className='link'>já tem uma conta?</a>
            </div>
        </div>
    );
}

export default Register;