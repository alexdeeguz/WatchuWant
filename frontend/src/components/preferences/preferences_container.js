import {connect} from 'react-redux';
import Preferences from "./preferences";
import {getRestaurants, receiveRestaurants} from "../../actions/restaurant";
import { postPreferences } from '../../actions/preference';


const MSTP = (state, ownProps) => ({

})

const MDTP = (dispatch) => ({
  receiveRestaurants: data => dispatch(receiveRestaurants(data)),
  postPreferences: data => dispatch(postPreferences(data))
})


export default connect(MSTP, MDTP)(Preferences);