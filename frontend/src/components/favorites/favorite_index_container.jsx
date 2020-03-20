import { connect } from 'react-redux';
import FavoriteIndex from './favorite_index';
import  { fetchFavorites, deleteFavorite } from '../../actions/favorites'


const mapStateToProps = (state) => ({
    user: state.session.user,
    favorites: Object.values(state.favorites)
})

const mapDispatchToProps = dispatch => ({
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);