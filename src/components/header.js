const Header = () => {
    return (

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
    );
}
export default Header;