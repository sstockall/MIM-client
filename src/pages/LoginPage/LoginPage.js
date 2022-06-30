import './LoginPage.scss';
import { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import InputField from '../../components/InputField/InputField';

class LoginPage extends Component {
    state = {
        errorMessage: "",
        loggedIn: false
    }

    handleLogin = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:8080/login', {
                email: e.target.email.value,
                password: e.target.password.value
            })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                this.setState({ loggedIn: true });
                this.props.history.push('/dashboard')
            })
            .catch((error) => {
                this.setState({ errorMessage: error.response.data });
            });
    };

    render() {
        return ( 
            <section className="login">
                <div className='login__inner'>
                    <div className='login__hero'>
                        <h1 className='login__hero-header'>Stop worrying and start tracking</h1>
                    </div>
                    <form className='login__form' onSubmit={this.handleLogin}>
                        <div className='login__form-userinfo'>
                            <div className='login__form-field'>
                                <InputField className='signup__form-field'type="text" name="email" label="Email" />
                                <InputField className='signup__form-field'type="password" name="password" label="Password" />
                            </div>
                        </div>
                        <div className='login__form-submit'>
                            <button className='login__form-button'>Log In</button>
                            <span className='login__form-login'>Need an account?</span>
                            <NavLink to='/signup' className='login__form-link'>Create One!</NavLink>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default LoginPage;