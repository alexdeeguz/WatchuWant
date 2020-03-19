import React from 'react'
import FavoriteIndexItem from './favorite_index_item';

export default function favorite_index() {

  return (

    // favorite items of the user
    <div>
      <h1>all favorites here</h1>
      <FavoriteIndexItem />
      <FavoriteIndexItem />
      <FavoriteIndexItem />
    </div>
  )
}
