import {connect} from 'react-redux';
import Preferences from "./preferences";
import { receiveRestaurants} from "../../actions/restaurant";
import { postPreferences } from '../../actions/preference';


const MDTP = (dispatch) => ({
  receiveRestaurants: data => dispatch(receiveRestaurants(data)),
  postPreferences: data => dispatch(postPreferences(data))
})


export default connect(null, MDTP)(Preferences);