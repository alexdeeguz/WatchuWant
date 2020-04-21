import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.renderErrors = this.renderErrors.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };
     
        this.props.signup(user)
            .then(this.setState({
                username: "",
                password: "",
                password2: "",
            }));
    }
    
    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className='sess-errors'>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }
   

    render() {
        return (
            <div className="signup-form">
                <h1>SIGN UP</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="session-form">
                        <input className='input-box' type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <i id='new-name-icon' className="fas fa-user-alt"></i>
                        <br />
                        <input className='input-box' type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <i id='new-password-icon' className="fas fa-lock"></i>
                        <br />
                        <input className='input-box' type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <i id='confirm-password-icon' className="fas fa-lock"></i>
                        <br />
                        <input type="submit" value="CREATE ACCOUNT" />
                    </div>
                </form>
                    {this.renderErrors()}
            </div>
        );
    }
}

export default withRouter(SignupForm);