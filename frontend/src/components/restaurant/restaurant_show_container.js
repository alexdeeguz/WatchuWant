import { connect } from "react-redux";
import React, { Component } from 'react'

import { receiveRestaurant } from '../../actions/restaurant'
import { getRestaurant } from '../../util/yelp_api'
import Loading from "../loading/spinner";

//css imports
// import './restaurant.css';
// import './bootstrap.css';
// import '../../util.scss';



class RestaurantShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currRest: {},
    }
  }

  componentDidMount() {
    const id = { params: {  id: this.props.id } };
    getRestaurant(id).then(res => {
      this.props.receiveRestaurant(res.data);
      this.setState({currRest: res.data});
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const id = { params: { id: this.props.id } };
      getRestaurant(id).then(res => {
        this.props.receiveRestaurant(res.data);
        this.setState({currRest: res.data});
      });
    }
  }

  render() {
    if (this.state.currRest.id === undefined) return <Loading />

    const {
      
    }
    return (
      <div id='w-hundred h-hundred flex-col start-center restaurant-show'>
        <img id="background-image"
          alt='background'
          src="https://images.unsplash.com/photo-1516749622035-ab9e45262e0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
        </img>
        <h3></h3>
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    user: state.session.user,
});

const mDTP = dispatch => ({
    receiveRestaurant: data => dispatch(receiveRestaurant(data)),
})

export default connect(mapStateToProps, mDTP)(RestaurantShow);