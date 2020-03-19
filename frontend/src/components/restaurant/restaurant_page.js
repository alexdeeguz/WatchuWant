import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './restaurant.css';
import keys from '../../keys_dev';
import { getRestaurant } from '../../util/yelp_api'

class RestaurantPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurant: this.getRestaurant()
        }
        // console.log(this.state.restaurant)
        console.log(this.props)
    }

    getRestaurant() {
        const restaurantId = this.props.match.params.id
        const restaurants = this.props.restaurants
        for (let i = 0; i < restaurants.length; i++) {
            const restaurant = restaurants[i]
            if (restaurant.id === restaurantId) {
                return restaurant
            }
        }
    }

    componentDidMount() {
        const id = {
            params: { 
                id: this.props.match.params.id
            }
        }
        getRestaurant(id).then(res => {
            this.props.receiveRestaurant(res)
        })
    }

    render() {
        const restaurant = this.state.restaurant
        return (
            <div id="restaurant-page-container">
                <div id="restaurant-info-container" className="section-container">
                    <h1>{restaurant.name}</h1>
                    <div className="image-container">
                        <img src={restaurant.image_url}></img>
                    </div>
                    <div className="restaurant-details">
        <p>{restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</p>
                    </div>
                </div>
                <div id="map-container" className="section-container">
                    <Map
                        google={this.props.google}
                        zoom={15}
                        initialCenter={{ lat: 47.444, lng: -122.176}}
                    >
                        <Marker position={{ lat: 47.444, lng: -122.176}} />
                    </Map>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({ apiKey: keys.googleMapsAPIKey })(RestaurantPage);