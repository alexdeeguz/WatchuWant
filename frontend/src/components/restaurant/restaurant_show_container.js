import { connect } from "react-redux";
import React, { Component } from 'react'

import { receiveRestaurant } from '../../actions/restaurant'
import { getRestaurant } from '../../util/yelp_api'
import Loading from "../loading/spinner";


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
    return (
      <div>
        i am restaurant show
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