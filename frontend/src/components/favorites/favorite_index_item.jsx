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
    this.props.removeFavoriteFromState(this.props.restaurant)
  }
  
  render(){
    return(
      <div className='most-outter-wrap'>
        <div className='visited-res-wrap'>
          <div className='visited-rest-img-div'>
            <img src={this.props.restaurant.imageUrl} alt=""/>
          </div>
          <div className='visited-rest-basic-info-div'>
              <div className='hold-text'>
                <div className='basic-info'>
                  <Link 
                    className='visited-show-link' 
                    to={`/restaurants/${this.props.restaurant.restaurantId}`}>
                    {this.props.restaurant.name}
                  </Link>
                </div>
                <div className='basic-info'>
                  {this.props.restaurant.location}
                </div>
              </div>
              
                <div className='res-btn-div'>
                  <button className='res-btn no-outline' onClick={this.handleDelete}>Remove</button> 
                </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FavoriteIndexItem;

