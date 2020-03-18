import React from 'react'
import PreferenceForm from './preferences_form'
import './preferences.css'
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
            <div>
                <div className="preferences-modal">
                </div>
                <div className="preferences-modal-content" onClick={(e) => e.stopPropagation()}>
                   <PreferenceForm />
                </div>
            </div>
        )
    }
}

export default Preferences