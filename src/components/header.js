import "../style/header.stylus";
const Header = () => {
    return (

        <div className="header">
            <h3>
                <a href="#">POKEDEX</a>
            </h3>
            <ul>
                <li>
                    <a href="#">
                        <div className='register'><p>Register</p></div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className='login'><p>Sign In</p></div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Header;