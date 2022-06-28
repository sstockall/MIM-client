import { NavLink } from 'react-router-dom';
import './SignUpPage.scss'

function SignUpPage() {
    return ( 
        <section className="signup">
            <div className='signup__hero'>
                <h1 className='signup__hero-header'>Stop worrying and start tracking</h1>
            </div>
            <form className="signup__form">
                <h2 className='signup__form-header'>Start tracking your moles today!</h2>
                <div className='signup__form-name'>
                    <label className='signup__form-label' htmlFor=''>First Name</label>
                    <input 
                        className='signup__form-input'
                        name='first_name'
                        id='first_name'
                        placeholder='First Name'
                        type='text'
                    />
                    <label className='signup__form-label' htmlFor=''>Last Name</label>
                    <input 
                        className='signup__form-input'
                        name='last_name'
                        id='last_name'
                        placeholder='Last Name'
                        type='text'
                    />
                </div>
                <div className='signup__form-userinfo'>
                    <label className='signup__form-label' htmlFor=''>Username</label>
                    <input 
                        className='signup__form-input'
                        name='username'
                        id='username'
                        placeholder='Username'
                        type='text'
                    />
                    <label className='signup__form-label' htmlFor=''>Password</label>
                    <input 
                        className='signup__form-input'
                        name='password'
                        id='password'
                        placeholder='Password'
                        type='password'
                    />
                </div>
                <div className='signup__form-submit'>
                    <button className='signup__form-button'>Create Account</button>
                    <span className='signup__form-login'>Already have an account?</span>
                    <NavLink to='/login'>Sign In</NavLink>
                </div>
            </form>
        </section>
     );
}

export default SignUpPage;