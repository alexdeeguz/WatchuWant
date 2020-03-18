import React from 'react';
import $ from 'jquery';
import "./splash.scss";

// const foodImages = [
// "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80",
// "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=353&q=80",
// "https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
// ]


class SplashCarousel extends React.Component{


    componentDidMount(){
        $("#slideshow > div:gt(0)").hide();

        setInterval(function() { 
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        },  4000);
    }


    render(){
        return(
            <div className='outter-slide-wrap'>
                <div id='slideshow'>
                    <div>
                        <img className="food-slide-pic" src='https://images.unsplash.com/photo-1543352634-99a5d50ae78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src='https://images.unsplash.com/photo-1572098873382-f8e4bf925781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src="https://images.unsplash.com/photo-1543352634-99a5d50ae78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src="https://images.unsplash.com/photo-1572098873382-f8e4bf925781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"></img>
                    </div>
                    <div>
                        <img className="food-slide-pic" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></img>
                    </div>
                </div>
            </div>
        )
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         currentIdx: 0,
    //         foodImageUrls: 
    //     ['https://images.unsplash.com/photo-1543352634-99a5d50ae78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
    //     'https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    //     'https://images.unsplash.com/photo-1572098873382-f8e4bf925781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
    //     'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    //     ]
    //     }
    // }

    // componentDidMount(){
    //     this.interval = setInterval(()=> this.changeBackgroundImg(), 5000);
    // }

    // changeBackgroundImg(){
    //     let nextIdx = ((this.state.currentIdx + 1) % (this.state.foodImageUrls.length));
    //     this.setState({currentIdx: nextIdx})
    // }

    // render(){
    //     const { currentIdx } = this.state;
    //     const urlString = `url('${this.state.foodImageUrls[currentIdx]})`
    //     // debugger
    //     return(
    //         <div id='slideshow'>
    //             {/* <div className='splashbackground'>
    //                 this is random stuff
    //             </div> */}
    //             <div className='splashbackground' style={{ backgroundImage: urlString }}>
    //             </div>
    //             <div>
    //                 contacts
    //             </div>
    //         </div>
    //     )
    // }

};



export default SplashCarousel;