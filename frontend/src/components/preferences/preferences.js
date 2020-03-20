import React from 'react'
import PreferenceForm from './preferences_form'
// import './preferences.css'
import $ from 'jquery'

class Preferences extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const modal = $(".modal-container")
        modal.removeClass("show")
        modal.addClass("hidden")
    }

    render() {
        return (
            <div id="preference-page">
                <h1 className="logo">Whatchu Want?</h1>
                {/* <img id="home-pic" src="splash-page-pic.jpg"></img> */}
                <div className="preferences">
                   <PreferenceForm {...this.props} receiveRestaurants={this.props.receiveRestaurants}/>
                </div>
            </div>
        )
    }
}

export default Preferences