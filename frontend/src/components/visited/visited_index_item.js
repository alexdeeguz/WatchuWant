import React from 'react';
import { Link } from 'react-router-dom'


const VisitedIndexItem = (props) =>{
    return(
        <div className='visited-res-wrap'>
            <div className='visited-rest-img-div'>
                <img src={props.visitedRestaurant.imageUrl} alt=""/>
            </div>
            <div className='visited-rest-basic-info-div'>
                <div>
                    <Link className='visited-show-link' to='/'>{props.visitedRestaurant.name}</Link>
                </div>
                <div>
                    {props.visitedRestaurant.location}
                </div>
            </div>
        </div>
    )
}


export default VisitedIndexItem;