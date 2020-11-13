import "../style/register.css";
const Register = props => {
    
    return (
        <div className="overlay">
            <div className="modalRegister">
                <form>
                    <input type="text" className='text'></input>
                    <input type="submit" value="Registrar" className='btn'></input>
                </form>
            </div>
        </div>
    );
}

export default Register;