
// src/components/main/main_page.js

import React from 'react';
import './main_page.css';
import SplashCarousel from '../carousel/splash';
import Banner from '../carousel/banner';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                < SplashCarousel />
                < Banner />
            </div>
        );
    }
}


export default MainPage;