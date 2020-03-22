import React from 'react';
import { Link } from 'react-router-dom'
import './visited.scss';
class VisitedIndexItem extends React.Component{

    constructor(props){
        super(props);
        this.handlePost = this.handlePost.bind(this);
    }

    handlePost(){
        this.props.postFavorite(this.props.visitedRestaurant)
    }

    // const urlString = `url('${props.visitedRestaurant.imageUrl}')`
    render(){
        // console.log(this.props.visitedRestaurant)
        return(
            <div className='most-outter-wrap'>
                <div className='visited-res-wrap'>
                    <div className='visited-rest-img-div'>
                        <img src={this.props.visitedRestaurant.imageUrl} alt=""/>
                    </div>
                    <div className='visited-rest-basic-info-div'>
                        <div className='hold-text'>
                            <div className='basic-info'>
                                <Link 
                                className='visited-show-link' 
                                to={`/restaurants/${this.props.visitedRestaurant.restaurantId}`}>
                                    {this.props.visitedRestaurant.name}
                                </Link>
                            </div>
                            <div className='basic-info'>
                                {this.props.visitedRestaurant.location}
                            </div>
                         </div>
                            <div className='res-btn-div'>
                                <button 
                                className='res-btn' 
                                onClick={this.handlePost}>
                                    Add To Favorites
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default VisitedIndexItem;