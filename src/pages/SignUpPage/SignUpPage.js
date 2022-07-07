import './SignUpPage.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import InputField from '../../components/InputField/InputField';

function SignUpPage({ history }) {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const handleSignUp = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/signup", {
                email: e.target.email.value,
                password: e.target.password.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                username: e.target.username.value
            })
            .then(() => {
                e.target.reset();
                history.push('/login')
            })
            .catch((err) => console.error(err));
    };

        return ( 
            <section className="signup">
                <div className='signup__inner'>
                    <div className='signup__hero'>
                        <h2 className='signup__hero-header1'>Start Tracking</h2> 
                        <h2 className='signup__hero-header2'>Your Moles Today!</h2>
                    </div>
                    <form className="signup__form" onSubmit={handleSignUp}>
                        <div className='singup__form-header'>
                            <h2 className='signup__form-header--text'>Create an account</h2>
                        </div>
                        <div className='signup__form-inputs'>
                            <InputField className='signup__form-field'type="text" name="first_name" label="First Name" required={true}/>
                            <InputField className='signup__form-field'type="text" name="last_name" label="Last Name" required={true}/>
                            <InputField className='signup__form-field'type="text" name="username" label="Username" />
                            <InputField className='signup__form-field'type="text" name="email" label="Email" required={true}/>
                            <InputField className='signup__form-field'type="password" name="password" label="Password" required={true}/>
                        </div>
                        <div className='signup__form-submit'>
                            <button className='signup__form-button'>Create Account</button>
                            <span className='signup__form-text'>Already have an account?</span>
                            <NavLink to='/login' className='signup__form-login'>Sign In</NavLink>
                        </div>
                    </form>
                </div>
            </section>
        );
    }


export default SignUpPage;