import React from 'react';
import './navbar.css';
import Modal from '../modal/modal'
import $ from 'jquery'
import './navbar.css'
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
    }

    handleLogoClick(e) {
        e.preventDefault();
        if (this.props.location.pathname !== '/')
            this.props.history.push('/');
    }

    openModal() {
        const modal = $(".modal-container")
        modal.removeClass("hidden")
        modal.addClass("show")
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
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
                <Modal {...this.props} />
                <div className="nav-item logo">
                    <div id='color-wheel'></div>
                    <img onClick={this.handleLogoClick} alt='logo' src='wcw_logo.png'/>
                </div>
                {this.props.location.pathname === "/" ? <Link className='team-link' to='/JAKT_Team'>The Team</Link> : ""}
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;