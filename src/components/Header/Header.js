import { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.scss'

function Header() {
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);

    const checkToken = () => {
        let token = sessionStorage.getItem('token');
        if (token) {
            setLoggedIn(true)
        }
    }

    useEffect(() => {
        checkToken();
      }, [])

    const handleLogout = () => {
        if (!loggedIn) {
            history.push('/login')
        } else {
            sessionStorage.removeItem("token");
            setLoggedIn(false)
            history.push('/');
        }
    }

    return ( 
        <header className="header">
            <nav className='header__nav'>
                <div className="menu-wrapper">
                    <div className="menu">
                        <label>MENU</label>
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
            <span className='header__login' onClick={handleLogout}>{!loggedIn ? 'Log In' : 'Log Out'}</span>
        </header>
     );
}

export default Header;