import React from 'react'
import { Link } from 'react-router-dom'
import './favorites.scss'

class FavoriteIndexItem extends React.Component{


  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deleteFavorite(this.props.restaurant._id)
  }
  
  render(){
    return(
      <div className='most-outter-wrap'>
        <div className='visited-res-wrap'>
          <div className='visited-rest-img-div'>
            <img src={this.props.restaurant.imageUrl} alt=""/>
          </div>
          <div className='visited-rest-basic-info-div'>
              <div className='basic-info'>
                <Link 
                  className='visited-show-link' 
                  to={`/restaurants/${this.props.restaurant._id}`}>
                  {this.props.restaurant.name}
                </Link>
              </div>
              <div className='basic-info'>
                {this.props.restaurant.location}
              </div>
              <div>
                <button className='res-btn' onClick={this.handleDelete}>Remove</button> 
              </div>
          </div>
        </div>
      </div>
    )
  }
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
