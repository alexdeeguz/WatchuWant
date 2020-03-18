import { connect } from 'react-redux';
import FavoriteIndex from './favorite_index';
import  { fetchFavorites, fetchFavorite} from '../../actions/favorites'

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    fetchFavorites: () => dispatch(fetchFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);