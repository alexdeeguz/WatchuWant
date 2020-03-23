import React from 'react';
import './banner.scss'

const Banner = () =>{
    return(
            <div className='banner-wrap'>
                <div className='opaque-me'></div>
                <div className='logo-title'>
                    WhatChu Want?
                    <p className='app-des'>The app that helps you decide what to eat</p>
                </div>
            </div>
    )
};

export default Banner