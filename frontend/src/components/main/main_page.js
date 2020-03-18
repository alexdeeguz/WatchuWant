// src/components/main/main_page.js

import React from 'react';
import './main_page.css';
import Modal from '../modal/modal'
import SplashCarousel from '../carousel/splash';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {/* <div className="main-page">
                    <h1>Whatchu Want?</h1>
                    <img id="home-pic" src="splash-page-pic.jpg"></img>
                </div>
                {/* <Modal {...this.props}/> */}
                {/* <footer>
                    Copyright &copy; 2020 JAKT
                </footer> */}
                < SplashCarousel />
                
            </div>
        );
    }
}

export default MainPage;