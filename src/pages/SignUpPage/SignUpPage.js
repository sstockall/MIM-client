import './SignUpPage.scss';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';
import InputField from '../../components/InputField/InputField';

class SignUpPage extends Component {
    state = {
        errorMessage: '',
        signedUp: false
    }

    handleSignUp = (e) => {
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
                this.setState({ signedUp: true, errorMessage: "" });
                e.target.reset();
                this.props.history.push('/login')
            })
            .catch((error) => {
                this.setState({ signedUp: false });
                console.log(error)
            });
    };

    render() {
        return ( 
            <section className="signup">
                <div className='signup__inner'>
                    <div className='signup__hero'>
                        <h1 className='signup__hero-header'>Stop Worrying. Start Tracking</h1>
                    </div>
                    <form className="signup__form" onSubmit={this.handleSignUp}>
                        <h2 className='signup__form-header'>Start tracking your moles today!</h2>
                        <div className='signup__form-inputs'>
                            <InputField className='signup__form-field'type="text" name="first_name" label="First Name" />
                            <InputField className='signup__form-field'type="text" name="last_name" label="Last Name" />
                            <InputField className='signup__form-field'type="text" name="username" label="Username" />
                            <InputField className='signup__form-field'type="text" name="email" label="Email" />
                            <InputField className='signup__form-field'type="password" name="password" label="Password" />
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
}

export default SignUpPage;