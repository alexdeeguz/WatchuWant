import { connect } from "react-redux";
import RestaurantPage from "./restaurant_page";


const mapStateToProps = (state, ownProps) => ({
    restaurant: ownProps.state
});

const mapDispatchToProps = dispatch => {
    
};

export default connect(mapStateToProps, null)(RestaurantPage);