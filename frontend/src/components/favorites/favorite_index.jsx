import React from 'react'
import FavoriteIndexItem from './favorite_index_item';
import './favorites.scss'

class FavoriteIndex extends React.Component{
  
  constructor(props){
    super(props)
    
  }

  componentDidMount(){
    this.props.fetchFavorites()
  }

  render(){

    const favoriteRestaurants = this.props.favorites.map((fav,idx)=>{
      return(
        <FavoriteIndexItem restaurant={fav} key = {idx}/>
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




// export default function favorite_index() {

//   return (

//     <div>
//       <h1>all favorites here</h1>
//       <FavoriteIndexItem />
//       <FavoriteIndexItem />
//       <FavoriteIndexItem />
//     </div>
//   )
// }
