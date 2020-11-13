import "../style/login.css";
const Login = props => {
    
    return (
        <div className="overlay">
            <div className="modalLogin">
                <h3>Sign In</h3>
                <form>
                    <input type="text" className='text'></input>
                    <input type="submit" value="Sign In" className='btn'></input>
                </form>
                <a >Primeira vez? Cadastre-se</a>
            </div>
        </div>
    );
}

export default Login;