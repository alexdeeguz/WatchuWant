import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Modal from '../modal/modal'
import $ from 'jquery'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        const modal = $(".modal-container")
        modal.removeClass("hidden")
        modal.addClass("show")
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <button onClick={this.logoutUser}>LOGOUT</button>
                </div>
            );
        } else {
            return (
                <div>
<<<<<<< HEAD
                    <Link to={'/signup'}>Signup</Link>
                    {/* <Link to={'/login'}>Login</Link> */}
=======
                    <button onClick={this.openModal}>LOGIN</button>
>>>>>>> master
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-container">
                {this.getLinks()}
                <Modal {...this.props} />
            </div>
        );
    }
}

export default NavBar;