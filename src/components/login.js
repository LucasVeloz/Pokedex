import "../style/login.css";
const Login = props => {
    
    return (
        <div className="overlay">
            <div className="modalLogin">
                <form>
                    <input type="text" className='text'></input>
                    <input type="submit" value="Sign In" className='btn'></input>
                </form>
            </div>
        </div>
    );
}

export default Login;