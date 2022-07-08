import './SignUpPage.scss';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InputField from '../../components/InputField/InputField';
import Header from '../../components/Header/Header';
import InvalidMessage from '../../components/InvalidMessage/InvalidMessage';

function SignUpPage({ history }) {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [valid, setValid] = useState(true)
    const [validFirstName, setValidFirstName] = useState(true)
    const [validLastName, setValidLastName] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validPassword, setValidPassword] = useState(true)

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!e.target.first_name.value) {
            setValidFirstName(false)
            setValid(false)

        } else if (!e.target.last_name.value) {
            setValidLastName(false)
            setValid(false)

        } else if (!e.target.email.value) {
            setValidEmail(false)
            setValid(false)

        } else if (!e.target.password.value) {
            setValidPassword(false)
            setValid(false)

        } else

        axios
            .post("https://moles-in-motion-api.herokuapp.com/signup", {
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

    console.log(validLastName)

        return ( 
            <main>
            <Header />
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
                            <InputField type="text" name="first_name" label="First Name" />
                            <InvalidMessage isValid={validFirstName} />
                            <InputField type="text" name="last_name" label="Last Name"/>
                            <InvalidMessage isValid={validLastName} />
                            <InputField type="text" name="username" label="Username" />
                            <InputField type="text" name="email" label="Email" />
                            <InvalidMessage isValid={validEmail} />
                            <InputField type="password" name="password" label="Password" />
                            <InvalidMessage isValid={validPassword} />
                        </div>
                        <div className='signup__validation'>
                            <span className='signup__validation-text'>{valid ? '' : 'Please fill out all required fields'}</span>
                        </div>
                        <div className='signup__form-submit'>
                            <button className='signup__form-button'>Create Account</button>
                            <span className='signup__form-text'>Already have an account?</span>
                            <NavLink to='/login' className='signup__form-login'>Sign In</NavLink>
                        </div>
                    </form>
                </div>
            </section>
            </main>
        );
    }


export default SignUpPage;