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
        <h1>Welcome Back</h1>
        </div>
        <div className='collections'>
          <div className='collection'>
            <div className='collection-title'>
              Favorite Restaurants
            </div>
            <div>
               <FavoritesIndexContainer />
            </div>
          </div>
          <div className='collection'>
            <div className='collection-title'>
              Previously Visited Restaurants
            </div>
            <div>
              <VisitedIndexContainer />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default UserShow;
