import {
    // BrowserRouter as Router,
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
                <Link to='/' exact='true'>POKEDEX</Link>
            </h3>
            <div className='aux'>
                <Register/>
                <Login/>
            </div>
        </div>
    );
}
export default Header;