import React from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import '../modal/session-form.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
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

    componentDidUpdate(prevProps) {
        if (prevProps.errors.length !== this.props.errors.length)
            this.setState({ errors: this.props.errors })
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
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(user)
            .then(() => {
                this.setState({username: "", password: ""});
                this.props.history.push('/preferences');
            });
    }

    animateLogin(speed = 75) {
        const demoUsers = [
            {username: "FoodKingGood", password: "joemama"},
            {username: "GimmeDaMunny", password: "iloveyou<3"},
            {username: "FlyGuy420", password: "smokeweederrday"},
            {username: "HackerMan", password: "kC!4M@[s`9?SuA'f'm"},
        ];
        
        const user = demoUsers[Math.floor(Math.random() * demoUsers.length)];

        let {username, password} = user;

        if (this.state.username !== username) {
            const inputUser = setInterval(() => {
                if (this.state.username !== username) {
                    const temp = username.slice(0, this.state.username.length + 1);
                    this.setState({username: temp});
                } else { clearInterval(inputUser); animatePassword(); }
            }, speed);
        }

        const animatePassword = () => {
            const inputPassword = setInterval(() => {
                if (this.state.password !== password)
                    this.setState({password: password.slice(0, this.state.password.length + 1)})
                else { clearInterval(inputPassword); login(); }
            }, speed);
        }

        const login = () => {
            this.props.login(this.state)
                .then(() => this.props.history.push('/preferences'))
                .then(()=> this.setState({username: "", password: ""}))
            // this.setState({username: "", password: ""});
        }

    }


    handleDemoUser(e){
        e.preventDefault();

        this.animateLogin(50);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className='sess-errors'>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    render() {
        const usernameErrors = this.props.errors.includes('Username is required') ? 'red-border' : ''
        const passwordErrors = this.props.errors.includes('Password is required') ? 'red-border' : ''
        return (
            <div className="login-form">
                <h1>LOGIN</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="session-form">
                        <input className='input-box' id ='input-username' type="text"
                            // id = {usernameErrors}
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <i id='username-icon' className="fas fa-user-alt"></i>
                        <br />
                        <input className='input-box' id ='input-password' type="password"
                            // id = {passwordErrors}
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <i id='password-icon' className="fas fa-lock"></i>
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