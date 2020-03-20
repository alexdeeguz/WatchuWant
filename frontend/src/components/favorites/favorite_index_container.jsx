import { connect } from 'react-redux';
import FavoriteIndex from './favorite_index';
import  { fetchFavorites, deleteFavorite, removeFavorite } from '../../actions/favorites'


const mapStateToProps = (state) => ({
    user: state.session.user,
    favorites: Object.values(state.favorites)
})

const mapDispatchToProps = dispatch => ({
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
    removeFavoriteFromState: (favorite) => dispatch(removeFavorite(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);