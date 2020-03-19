import { connect } from "react-redux";
import RestaurantPage from "./restaurant_page";


const mapStateToProps = state => ({
    restaurants: state.restaurants
});

export default connect(mapStateToProps, null)(RestaurantPage);