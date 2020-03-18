import { connect } from 'react-redux';
import React, { Component } from 'react';

class RestaurantShow extends Component {
    render() {
        return (
            <div>
                i am restaurant show.
            </div>
        )
    }
}



const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps, null)(RestaurantShow);