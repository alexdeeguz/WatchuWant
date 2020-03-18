import React, { Component } from 'react'
import RestaurantItem from '../restauraunts/restaurant_item';

export default class UserShow extends Component {
    render() {
      return (
        <div id='user-show'>
          <h1>i am user show</h1>

          <div className='favorites-container'>
              <h2>Favorites</h2>
              <div className='favorites'>
                  <RestaurantItem />
                  <RestaurantItem />
                  <RestaurantItem />
              </div>
          </div>

          <div className='visited-container'>
              <h2>Visited</h2>
              <div className='visited'>
                  <RestaurantItem />
                  <RestaurantItem />
                  <RestaurantItem />
              </div>
          </div>

        </div>
      )
  }
}
