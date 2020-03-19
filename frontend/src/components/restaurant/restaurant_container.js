import { connect } from "react-redux";
import RestaurantPage from "./restaurant_page";


const mapStateToProps = state => ({
    restaurant: state.restaurant
});

export default connect(mapStateToProps, null)(RestaurantPage);