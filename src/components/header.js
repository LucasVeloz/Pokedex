import Register from './register';
import Login from './login';
const Header = () => {


    return (
        <div>
            <Register/>
            <Login/>
            <div className="header">
                <h3>
                    <a href="/">POKEDEX</a>
                </h3>
                <ul>
                    <li>
                        <button className='register'>Register</button>
                    </li>
                    <li>
                        <button className='login'>Sign In</button>
                        
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;