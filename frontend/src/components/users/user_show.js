import React, { Component } from 'react'
import FavoritesIndexContainer from '../favorites/favorite_index_container';
import VisitedIndexContainer from '../visited/visited_index_container';
import './user.scss'

class UserShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id='user-show'>
        <div className='user-background-img'>
          <div className='banner-holder'>
            <div className='banner'></div>
            <h1 className='welcome-header'>Welcome Back</h1>
          </div>
        </div>
        <div className='collections'>
          <div className='collection'>
            <div className='collection-title'>
              Favorite Restaurants
            </div>
              <FavoritesIndexContainer />
          </div>
          <div className='collection'>
            <div className='collection-title'>
              Visited Restaurants
            </div>
            <VisitedIndexContainer />
          </div>
        </div>
      </div>

    )
  }
}

export default UserShow;
