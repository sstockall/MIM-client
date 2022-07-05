import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.scss'

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        !showMenu ? setShowMenu(true) : setShowMenu(false)
    }

    return ( 
        <header className="header">
            <Logo />
            <nav className='header__nav'>
                <div className="header__dropdown">
                    <div 
                        className="dropbtn" 
                        onMouseOver={toggleMenu}>
                        Menu
                    </div>
                    <div 
                    className={showMenu ? "header__dropdown-content display-block" : "header__dropdown-content display-none"}
                    onMouseOut={toggleMenu}
                    >
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='dashboard'>Dashboard</NavLink>
                        <NavLink to='/glossary'>Glossary</NavLink>
                    </div>
                </div>
                
                {/* <NavLink to='/login' className='header__nav-link'>Login</NavLink>
                <NavLink to='/signup' className='header__nav-link'>SignUp</NavLink>
                <NavLink to='/dashboard' className='header__nav-link'>Dashboard</NavLink> */}
            </nav>
        </header>
     );
}

export default Header;