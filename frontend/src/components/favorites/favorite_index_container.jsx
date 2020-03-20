import { connect } from 'react-redux';
import FavoriteIndex from './favorite_index';
import  { fetchFavorites } from '../../actions/favorites'


const mapStateToProps = (state) => ({
    user: state.session.user,
    favorites: Object.values(state.favorites)
})

const mapDispatchToProps = dispatch => ({
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);