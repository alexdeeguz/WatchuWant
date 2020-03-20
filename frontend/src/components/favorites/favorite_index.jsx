import React from 'react'
import FavoriteIndexItem from './favorite_index_item';
import './favorites.scss'

class FavoriteIndex extends React.Component{
  
  constructor(props){
    super(props)
    
  }

  componentDidMount(){
    this.props.fetchFavorites(this.props.user.id)
  }

  // componentWillUnmount(){
  //   this.props.fetchFavorites(this.props.user.id)
  // }

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
      <div>
        {favoriteRestaurants}
      </div>
    )
  }

}


export default FavoriteIndex;

