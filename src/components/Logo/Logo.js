import './Logo.scss';
import { NavLink } from 'react-router-dom';

function Logo() {
    return ( 
        <div className='logo'>
            <NavLink to='/'>
                <span className='logo__letter'>M</span>
                <span className='logo__letter'>I</span>
                <span className='logo__letter'>M</span>
            </NavLink>
        </div>
    );
}

export default Logo;<>
</>