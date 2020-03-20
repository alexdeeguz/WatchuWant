import React from 'react';
import { Link } from 'react-router-dom'
import './visited.scss';
const VisitedIndexItem = (props) =>{

    const urlString = `url('${props.visitedRestaurant.imageUrl}')`
    return(
        <div className='visited-res-wrap'>
           
            <div className='visited-rest-img-div'>
                <img src={props.visitedRestaurant.imageUrl} alt=""/>
            </div>
            <div className='visited-rest-basic-info-div'>
                <div className='basic-info'>
                    <Link 
                    className='visited-show-link' 
                    to={`/restaurants/${props.visitedRestaurant._id}`}>
                        {props.visitedRestaurant.name}
                    </Link>
                </div>
                <div className='basic-info'>
                    {props.visitedRestaurant.location}
                </div>
            </div>
        </div>
    )
}


export default VisitedIndexItem;