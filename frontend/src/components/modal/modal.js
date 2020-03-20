import React from 'react'
import './modal.css';
import './session-form.css';
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from '../session/signup_form_container'
import $ from 'jquery'

class modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formType: "login"
        }
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        const modal = $(".modal-container")
        modal.removeClass("show")
        modal.addClass("hidden")
    }

    render() {
        return (
            <div className='modal-container hidden'>
                <div className="modal-content">
                    <span onClick={this.closeModal} className="close">&times;</span>
                    <div className="modal-content-form">
                        <div>
                            {this.state.formType === 'login' ? <LoginFormContainer /> : <SignupFormContainer />}
                        </div>
                        <div className="login-signup">
                            {this.state.formType === 'login'
                                ? <p>Don't have an account? <button className='btm-modal-btn' onClick={() => this.setState({ formType: "signup" })}>Sign up</button></p> 
                                : <p>Already have an account? <button className='btm-modal-btn' onClick={() => this.setState({ formType: "login" })}>Log in</button></p>}
                        </div> 
                    </div>
                </div>
                
            </div>
        )
    }
}

export default modal;

