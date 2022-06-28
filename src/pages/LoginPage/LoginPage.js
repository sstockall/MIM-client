import './LoginPage.scss';
import { NavLink } from 'react-router-dom';

function LoginPage() {
    return ( 
        <section className="login">
             <div className='login__hero'>
                <h1 className='login__hero-header'>Stop worrying and start tracking</h1>
            </div>
            <form className='login__form'>
            <div className='login__form-userinfo'>
                    <label className='login__form-label' htmlFor=''>Username or Email</label>
                    <input 
                        className='login__form-input'
                        name='username'
                        id='username'
                        placeholder='Username'
                        type='text'
                    />
                    <label className='login__form-label' htmlFor=''>Password</label>
                    <input 
                        className='login__form-input'
                        name='password'
                        id='password'
                        placeholder='Password'
                        type='password'
                    />
                </div>
                <div className='login__form-submit'>
                    <button className='login__form-button'>Create Account</button>
                    <span className='login__form-login'>Need an account?</span>
                    <NavLink to='/signup'>Create Account</NavLink>
                </div>
            </form>
        </section>
     );
}

export default LoginPage;