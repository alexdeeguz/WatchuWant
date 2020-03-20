import React from 'react'
import { Link } from 'react-router-dom'
import './favorites.scss'

 const FavoriteIndexItem = (props) =>{
   
  return(
    <div className='outter-fav-wrap'>
      <div className='fav-rest-img-div'>
        <img src={props.restaurant.imageUrl} alt=""/>
      </div>
      <div className='fav-rest-basic-info-div'>
          <div className='basic-info'>
            <Link 
              className='fav-show-link' 
              to={`/restaurants/${props.restaurant._id}`}>
              {props.restaurant.name}
            </Link>
          </div>
          <div className='basic-info'>
            {props.restaurant.location}
          </div>
      </div>

    </div>
  )
}

export default FavoriteIndexItem;

// export default function FavoriteIndexItem() {
//   return (
//     <div>
//       <div>
//         {props.restaurant}
//       </div>
//     </div>
//   )
// }
