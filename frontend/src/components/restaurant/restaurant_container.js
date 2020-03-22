import { connect } from "react-redux";
import RestaurantPage from "./restaurant_page";
import { receiveRestaurant } from '../../actions/restaurant'
import { postVisited } from '../../actions/visited'

const mapStateToProps = state => ({

    restaurants: state.restaurants,
    restaurant: state.restaurants.restaurant,
    user: state.session.user,
    nextRestaurants: Object.values(state.restaurants)
});

const mDTP = dispatch => ({
    receiveRestaurant: data => dispatch(receiveRestaurant(data)),
    addToVisited: data => dispatch(postVisited(data))
})

export default connect(mapStateToProps, mDTP)(RestaurantPage);