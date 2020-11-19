import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";
// import Register from '../register';
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
            <ul>
                <li>
                    <Register/>
                </li>
                <li>
                    <Login/>
                </li>
            </ul>
        </div>
    );
}
export default Header;