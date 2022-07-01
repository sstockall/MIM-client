import { NavLink } from 'react-router-dom';
import './Footer.scss'

function Footer() {
    return ( 
        <footer className="footer">
             < div className='footer__logo'>
                
            </div>
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