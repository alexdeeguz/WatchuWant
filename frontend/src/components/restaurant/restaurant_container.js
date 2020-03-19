import { connect } from "react-redux";
import RestaurantPage from "./restaurant_page";
import { receiveRestaurant } from '../../actions/restaurant'

const mapStateToProps = state => ({
    restaurants: Object.values(state.restaurants)
});

const mDTP = dispatch => ({
    receiveRestaurant: data => dispatch(receiveRestaurant(data))
})

export default connect(mapStateToProps, mDTP)(RestaurantPage);