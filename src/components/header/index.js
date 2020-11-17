import {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import Register from '../register';
// import Login from './login';
import './styles.css';

const Header = () => {

    return (
        <div>
            {/* <Register/> */}
            {/* <Login/> */}
            <div className="header">
                <h3>
                    <Router>
                        <Link to='/'>POKEDEX</Link>
                    </Router>
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