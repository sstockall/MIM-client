import { NavLink } from 'react-router-dom';
import './Header.scss'

function Header() {
    return ( 
        <header className="header">
            
            <div className='header__logo'>
                <NavLink to='/'>
                    <span className='header__logo-letter'>M</span>
                    <span className='header__logo-letter'>I</span>
                    <span className='header__logo-letter'>M</span>
                </NavLink>
            </div>
            <nav className='header__nav'>
                <NavLink to='/login' className='header__nav-link'>Login</NavLink>
                <NavLink to='/signup' className='header__nav-link'>SignUp</NavLink>
            </nav>
        </header>
     );
}

export default Header;