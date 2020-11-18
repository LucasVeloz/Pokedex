import {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import Register from '../register';
import './styles.css';
import Login from '../login';
import Register from '../register';
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
                        <Register/>
                        {/* <button className='register'>Register</button> */}
                    </li>
                    <li>
                        <Login/>
                        {/* <button className='login'>Sign In</button> */}
                        
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;