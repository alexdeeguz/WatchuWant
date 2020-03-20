import { connect } from 'react-redux';
import VisitedIndex from './visited_index';
import { fetchAllVisited } from '../../actions/visited';
import { postFavorite } from '../../actions/favorites';

const mapStateToProps = state =>({
    user: state.session.user,
    visitedRestaurants: Object.values(state.visited)
})

const mapDispatchToProps = dispatch =>({
    fetchAllVisited: ((userId) => dispatch(fetchAllVisited(userId))),
    postFavorite: (favorite => dispatch(postFavorite(favorite)))
})


export default connect(mapStateToProps, mapDispatchToProps)(VisitedIndex);