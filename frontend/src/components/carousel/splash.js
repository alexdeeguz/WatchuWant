import React from 'react';
import $ from 'jquery';
import "./splash.scss";
import Modal from '../modal/modal';

// const foodImages = [
// "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80",
// "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=353&q=80",
// "https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
// ]


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
            <div className='outer-slide-wrap'>
                <div id='slideshow'>
                    <div>
                        <img className="food-slide-pic" src='https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='food-1'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src='https://images.unsplash.com/photo-1530990457142-bb18a441c52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80' alt='food-1'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src='https://images.unsplash.com/photo-1530904613557-b405de3fb731?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80' alt='food-1'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt='food-4'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"></img>
                    </div> 
                    
                </div>
            </div>
        )
    }

};


export default SplashCarousel;