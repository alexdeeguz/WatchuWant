// src/components/main/main_page.js

import React from 'react';
import './main_page.css';
import SplashCarousel from '../carousel/splash';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                < SplashCarousel />
            </div>
        );
    }
}

export default MainPage;