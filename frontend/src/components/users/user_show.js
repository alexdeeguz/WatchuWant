import React, { Component } from 'react'
import FavoritesIndexContainer from '../favorites/favorite_index_container';

class UserShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id='user-show'>
        <h1>i am user show</h1>

        <FavoritesIndexContainer />

        <div className='visited-container'>
          <h2>Visited</h2>
          <div className='visited'>
            <div>visited rest</div>
            <div>visited rest</div>
            <div>visited rest</div>
          </div>
        </div>

      </div>
    )
  }
}

export default UserShow;
