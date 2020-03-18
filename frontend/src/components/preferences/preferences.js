import React from 'react'
import PreferenceForm from './preferences_form'
import './preferences.css'

class Preferences extends React.Component {
    constructor(props) {
        super(props)
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