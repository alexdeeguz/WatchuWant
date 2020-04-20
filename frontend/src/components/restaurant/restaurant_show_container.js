import { connect } from "react-redux";
import React, { Component } from 'react'

import { Map, Marker } from 'google-maps-react';
import { receiveRestaurant } from '../../actions/restaurant'
import { getRestaurant } from '../../util/yelp_api'
import Loading from "../loading/spinner";

//css imports
import './restaurant.css';
import './bootstrap.css';
import '../../util.scss';

import { 
  extractCategories,
  extractHours,
  extractPhotos
 } from '../../util/function_util';



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
      categories, hours, display_phone, coordinates,
      location, name, photos, price,
      rating, review_count, transactions, url,
    } = this.state.currRest;
    const { latitude, longitude } = coordinates;
    return (
      <div className='w-hundred h-hundred flex-col center-center' id='restaurant-show'>
        <img id="background-image"
          alt='background'
          src="https://images.unsplash.com/photo-1516749622035-ab9e45262e0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
        </img>
        <h1 id="name">{name}</h1>

        <div className='photos'>
          {extractPhotos(photos)}
        </div>

        <div className='map-container'>
          <Map className='google-map'
              google={window.google}
              zoom={15}
              initialCenter={{ lat: latitude, lng: longitude}}
              center={{ lat: latitude, lng: longitude}}
          ><Marker position={{ lat: latitude, lng: longitude}} />
          </Map>
        </div>

        <div className='flex-col center-center restaurant-info'>
            <a href={url} target='_blank' rel="noopener noreferrer">Yelp Link</a>
            <p>{location.display_address.join(", ")}</p>
            <p>Phone: {display_phone}</p>
            <p>Rated: {rating} by {review_count} reviews</p>
            <p>Price: {price}</p>
            <p>{(extractHours(hours).is_open_now) ? "Currently Open" : "Currently Closed"}</p>
            <div id='hours' className='flex-col start-center'>
              <p>Hours: </p>
              {extractHours(hours).times}
            </div>
            <p>Other transaction types: {transactions.join(", ")}</p>
            <p>Categories: {extractCategories(categories).join(", ")}</p>
        </div>

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