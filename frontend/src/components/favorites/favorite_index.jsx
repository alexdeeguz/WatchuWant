import React from 'react'
import FavoriteIndexItem from './favorite_index_item';

class FavoriteIndex extends React.Component{
  componentDidMount(){
    this.props.fetchFavorites(this.props.user.id);
  }
  render(){
    const favoriteRestaurants = this.props.favorites.map((fav,idx)=>{
      return(
        <FavoriteIndexItem 
          restaurant={fav} key={idx} 
          deleteFavorite={this.props.deleteFavorite}
          removeFavoriteFromState ={this.props.removeFavoriteFromState}
        />
      )
    })

    return(
      <div className='scroll'>
        {favoriteRestaurants}
      </div>
    )
  }

}


export default FavoriteIndex;

