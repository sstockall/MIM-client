import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.scss'

function Header() {

    return ( 
        <header className="header">
            <nav className='header__nav'>
                <div className="menu-wrapper">
                    <div className="menu">
                        <ul className="nav-links">
                            <NavLink className='nav-links__link'to='/'><li>Home</li></NavLink>
                            <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                            <NavLink to='/lesions'><li>Lesions</li></NavLink>
                            <NavLink to='/terminology'><li>Terminology</li></NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <Logo />
            <div className='header__login'>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </header>
     );
}

export default Header;