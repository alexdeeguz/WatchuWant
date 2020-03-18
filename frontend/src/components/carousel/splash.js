import React from 'react';
// import $ from 'jquery';
import "./splash.scss";

// const foodImages = [
// "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80",
// "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=353&q=80",
// "https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
// ]


class SplashCarousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentIdx: 0,
            foodImageUrls: 
        ['https://images.unsplash.com/photo-1543352634-99a5d50ae78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
        'https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1572098873382-f8e4bf925781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
        // 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        ]
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=> this.changeBackgroundImg(), 4000);
    }

    changeBackgroundImg(){
        let nextIdx = ((this.state.currentIdx + 1) % (this.state.foodImageUrls.length));
        this.setState({currentIdx: nextIdx})
    }

    render(){
        const { currentIdx } = this.state;
        const urlString = `url('${this.state.foodImageUrls[currentIdx]})`
        // debugger
        return(
            <div id='slideshow'>
                {/* <div className='splashbackground'>
                    this is random stuff
                </div> */}
                <div className='splashbackground' style={{ backgroundImage: urlString }}>
                    <h1>Whatchu Want?</h1>
                    {/* this is random stuff */}
                </div>
            </div>
        )
    }

};



export default SplashCarousel;