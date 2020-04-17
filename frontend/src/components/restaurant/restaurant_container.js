import { connect } from "react-redux";
import RestaurantResults from "./restaurant_results";
import { receiveRestaurant } from '../../actions/restaurant'
import { postVisited } from '../../actions/visited'

const mapStateToProps = (state, ownProps) => ({

    query: ownProps.match.params.query,
    restaurants: state.restaurants,
    user: state.session.user,
    nextRestaurants: Object.values(state.restaurants),
});

const mDTP = dispatch => ({
    receiveRestaurant: data => dispatch(receiveRestaurant(data)),
    addToVisited: data => dispatch(postVisited(data))
})

export default connect(mapStateToProps, mDTP)(RestaurantResults);