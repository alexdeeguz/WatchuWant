import { connect } from 'react-redux';
import FavoriteIndex from './favorite_index';
import  { fetchFavorites } from '../../actions/favorites'


const mapStateToProps = (state) => ({
    user: state.session.user,
    favorites: Object.values(state.favorites)
})

const mapDispatchToProps = dispatch => ({
    fetchFavorites: () => dispatch(fetchFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);