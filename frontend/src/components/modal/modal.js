import React from 'react'
import './modal.css';
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from '../session/signup_form_container'

class modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formType: "login"
        }
    }

    render() {
        return (
            <div className='modal-container'>
                <div className='modal'>
                </div>
                <div className="modal-content">
                    <div>
                        {this.state.formType === 'login' ? <LoginFormContainer /> : <SignupFormContainer />}
                    </div>

                    <div className="login-signup">
                        {this.state.formType === 'login' ? 
                            <p>Don't have an account? <a onClick={() => this.setState({ formType: "signup" })}>Sign up</a></p> 
                            : <p>Already have an account? <a onClick={() => this.setState({ formType: "login" })}>Log in</a></p>}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default modal;

