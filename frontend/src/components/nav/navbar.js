import React from 'react';
// import { Link } from 'react-router-dom';
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
                    <button className='nav-item' onClick={this.logoutUser}>LOGOUT</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button className='nav-item' onClick={this.openModal}>LOGIN</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-container">
                <div className="logo"><img src='wcw_logo.png'></img></div>
                {this.getLinks()}
                <Modal {...this.props} />
            </div>
        );
    }
}

export default NavBar;