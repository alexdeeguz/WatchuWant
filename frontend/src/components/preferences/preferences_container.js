import {connect} from 'react-redux';
import Preferences from "./preferences";
import {getRestaurants, receiveRestaurants} from "../../actions/restaurant";

const MSTP = (state, ownProps) => ({

})

const MDTP = (dispatch) => ({
  receiveRestaurants: data => dispatch(receiveRestaurants(data)),
})


export default connect(MSTP, MDTP)(Preferences);