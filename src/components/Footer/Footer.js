import { NavLink } from 'react-router-dom';
import './Footer.scss';
import Logo from '../Logo/Logo';

function Footer() {
    return ( 
        <footer className="footer">
             <Logo />
            <div className='footer__pages'>
                <NavLink to='/' className='footer__link'>Home</NavLink>
                <NavLink to='/' className='footer__link'>Glossary</NavLink>
                <NavLink to='/' className='footer__link'>FAQ</NavLink>
                <NavLink to='/' className='footer__link'>Privacy Policy</NavLink>
            </div>
        </footer>
     );
}

export default Footer;