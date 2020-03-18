import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
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
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    {/* <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link> */}
                </div>
            );
        }
    }

    render() {
        return (
            <nav>
                <h1>i am nav bar</h1>
                {this.getLinks()}
            </nav>
        );
    }
}

export default NavBar;