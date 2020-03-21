import React from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.animateLogin = this.animateLogin.bind(this);
    }

    closeModal() {
        const modal = $(".modal-container")
        modal.removeClass("show")
        modal.addClass("hidden")
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            //redirect to show page
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user)
            .then(() => this.props.history.push('/preferences'))
    }

    animateLogin(speed = 75) {
        const user = {
            email: 'demo_user@gmail.com',
            password: 'password'
        }

        let {email, password} = user;

        if (this.state.email !== email) {
            const inputUser = setInterval(() => {
                if (this.state.email !== email) {
                    const temp = email.slice(0, this.state.email.length + 1);
                    this.setState({email: temp});
                } else { clearInterval(inputUser); this.animateLogin(); }
            }, speed);
        }

        if (this.state.email === email) {
            const inputPassword = setInterval(() => {
                if (this.state.password !== password)
                    this.setState({password: password.slice(0, this.state.password.length + 1)})
                else { clearInterval(inputPassword); login(); }
            }, speed);
        }


        const login = () => {
            this.props.login(this.state)
                .then(() => this.props.history.push('/preferences'))
            this.setState({email: "", password: ""});
        }

    }


    handleDemoUser(e){
        e.preventDefault();

        this.animateLogin();
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form">
                <h1>LOGIN</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="session-form">
                        <input className='input-box' type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input className='input-box' type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="submit" value="LOGIN" />
                    </div>
                </form>
                <input className='demo-user-btn' type="submit" value="DEMO USER" onClick={this.handleDemoUser} />
                {this.renderErrors()}
            </div>
        );
    }
}

export default withRouter(LoginForm);