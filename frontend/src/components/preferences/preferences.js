import React from 'react'
import PreferenceForm from './preferences_form'
import $ from 'jquery'

class Preferences extends React.Component {

    componentWillMount() {
        const modal = $(".modal-container")
        modal.removeClass("show")
        modal.addClass("hidden")
    }

    render() {
        return (
            <div className='fadeMe' id="preference-page">
                <div className="preferences">
                   <PreferenceForm {...this.props} receiveRestaurants={this.props.receiveRestaurants}/>
                </div>
            </div>
        )
    }
}

export default Preferences