import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './restaurant.css';
import keys from '../../keys_dev';
import { getRestaurant } from '../../util/yelp_api'

class RestaurantPage extends React.Component {

    constructor(props) {
        super(props);
        this.test = this.test.bind(this)
    }

    test() {
        console.log("test")
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
            this.props.receiveRestaurant(res.data)
        })
    }

    render() {
        const restaurant = this.props.restaurants.restaurant;
        console.log(restaurant)
        if (restaurant === undefined) return null;
        return (
            <div>
                <img id="background-image" src="https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"></img>
                <div className="container">
                    <h1 id="name">{restaurant.name}</h1>
                    <div id="restaurant-page-container">
                        <div id="restaurant-info-container" className="section-container">
                            <div className="image-container">
                                <img src={restaurant.image_url}></img>
                            </div>
                        </div>
                        <div id="map-container" className="section-container">
                            <Map
                                google={this.props.google}
                                zoom={15}
                                initialCenter={{ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}}
                            >
                                <Marker position={{ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} />
                            </Map>
                        </div>
                    </div>
                    <div className="restaurant-details">
                        <p>{restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</p>
                        <p>{restaurant.display_phone}</p>
                    </div>
                    <div className="choices">
                        <p>EAT HERE</p>
                        <p onClick={this.test}>PICK ANOTHER</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({ apiKey: keys.googleMapsAPIKey })(RestaurantPage);