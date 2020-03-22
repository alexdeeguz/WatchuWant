import React from 'react';
import $ from 'jquery';
import Banner from './banner'
import "./splash.scss";

class SplashCarousel extends React.Component{


    componentDidMount(){
        const delay = 6000;

        $("#slideshow > div:gt(0)").hide();

        setInterval(function() { 
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        },  delay);
    }


    render(){
        return(
            <div className='fadeMe outer-slide-wrap'>
                < Banner />
                <div id='slideshow'>
                    <div>
                        <img className="food-slide-pic" src='https://images.unsplash.com/photo-1530990457142-bb18a441c52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80' alt='food-1'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src='https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='food-2'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src='https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='food-3'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src='https://images.unsplash.com/photo-1530904613557-b405de3fb731?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80' alt='food-4'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt='food-5'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80" alt='food-6'></img>
                    </div> 
                </div>
                {/* < Banner /> */}
            </div>
        )
    }

};


export default SplashCarousel;