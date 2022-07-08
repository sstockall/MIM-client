import './LoginPage.scss';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import InputField from '../../components/InputField/InputField';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

function LoginPage({ history }) {

    const [resMessage, setResMessage] = useState('')
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
   
    const handleLogin = (e) => {
        e.preventDefault()
        axios
            .post('https://moles-in-motion-api.herokuapp.com/login', {
                email: e.target.email.value,
                password: e.target.password.value
            })
            .then((res) => {
                sessionStorage.setItem("token", res.data.token);
                history.push('/dashboard');
                setResMessage(res.data)
                setAuthenticated(true)
            })
            .catch((err) => {
                console.error(err);
                setResMessage(err.response.data)
            });
    };
   

    return ( 
        <main>
            <Header />
            <section className="login">
                <div className='login__inner'>
                    <div className='login__hero'>
                        <h1 className='login__hero-header'>Hello Again!</h1>
                    </div>
                    <form className='login__form' onSubmit={handleLogin}>
                        <div className='login__form-userinfo'>
                            <div className='login__form-header'>
                                <h2 className='login__form-header--text'>Sign in to your account</h2>
                            </div>
                            <div className='login__form-field'>
                                <InputField className='signup__form-field'type="text" name="email" label="Email" required={true}/>
                                <InputField className='signup__form-field'type="password" name="password" label="Password" required={true}/>
                            </div>
                        </div>
                        <div className='login__status'>
                            <span className={authenticated ? 'login__status--reg' : 'login__status--err'}>{resMessage}</span>
                        </div>
                        <div className='login__form-submit'>
                            <button className='login__form-button'>Log In</button>
                            <span className='login__form-login'>Need an account?</span>
                            <NavLink to='/signup' className='login__form-link'>Create One!</NavLink>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default LoginPage;