import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";
import './styles.css';
import Login from '../login';
import Register from '../register';
const Header = () => {
    return (
        <div className="header">
            <h3>
                <Router>
                    <Link to='/' exact>POKEDEX</Link>
                </Router>
            </h3>
            <div className='aux'>
                <Register/>
                <Login/>
            </div>
        </div>
    );
}
export default Header;