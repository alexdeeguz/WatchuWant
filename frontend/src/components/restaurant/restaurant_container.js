import { connect } from "react-redux";
import RestaurantPage from "./restaurant_page";
import { receiveRestaurant } from '../../actions/restaurant'

const mapStateToProps = state => ({
    restaurants: state.restaurants,
    restaurant: state.restaurants.restaurant,
});

const mDTP = dispatch => ({
    receiveRestaurant: data => dispatch(receiveRestaurant(data))
})

export default connect(mapStateToProps, mDTP)(RestaurantPage);