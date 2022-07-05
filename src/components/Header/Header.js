import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import avatar from '../../assets/images/avatar.jpeg';
import './Header.scss'

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        !showMenu ? setShowMenu(true) : setShowMenu(false)
    }

    return ( 
        <header className="header">
            <nav className='header__nav'>
                <div className="header__dropdown">
                    <div 
                        className="dropbtn" 
                        onClick={toggleMenu}>
                        <img className='dropbtn__img' src={avatar} alt='avatar' />
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
            </nav>
            <Logo />
        </header>
     );
}

export default Header;