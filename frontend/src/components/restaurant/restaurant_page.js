import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './restaurant.css';
import keys from '../../keys_dev';
import { getRestaurant } from '../../util/yelp_api'
import Loading from '../loading/spinner';

class RestaurantPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nextRestaurants: this.props.nextRestaurants,
            currRest: undefined,
        }
        this.addToVisited = this.addToVisited.bind(this)
        this.handlePickAnother = this.handlePickAnother.bind(this);
    }

    addToVisited() {
        const { id, name, image_url, location } = this.props.restaurant
        const visitedRestaurant = {
            restaurantId: id,
            name: name,
            imageUrl: image_url,
            userId: this.props.user.id,
            location: location.address1
        }
        this.props.addToVisited(visitedRestaurant)
            .then(() => this.props.history.push('/user'),
            () => this.props.history.push('/user'))
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
            this.props.receiveRestaurant(res.data);
            this.setState({currRest: Object.assign({}, res.data)});
        })  
    }

    handlePickAnother(){
        let nextRest = this.state.nextRestaurants.pop();
        if (nextRest){
            this.props.receiveRestaurant(nextRest);
            this.setState({currRest: nextRest});
        } else{
            alert('Out of restaurants with those specified preferences')
            window.location.replace('http://localhost:3000/#/preferences')
        }
    }
    
    render() {
        
        if (this.state.currRest === undefined) return <Loading />;
        let restaurant = this.state.currRest;
        return (
            <div>
                <img alt='background' id="background-image" src="https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"></img>
                <div className="container">
                    <h1 id="name">{restaurant.name}</h1>
                    <div id="restaurant-page-container">
                        <div id="restaurant-info-container" className="section-container">
                            <div className="image-container">
                                <img alt='restaurant' src={restaurant.image_url}></img>
                            </div>
                        </div>
                        <div id="map-container" className="section-container">
                            <Map
                                google={this.props.google}
                                zoom={15}
                                initialCenter={{ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}}
                                center={{ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}}
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
                        <p onClick={this.addToVisited}>EAT HERE</p>
                        {/* <Link path={`/restaurants/${nextRest.id}`}></Link> */}
                        <p onClick={this.handlePickAnother}>PICK ANOTHER</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({ apiKey: keys.googleMapsAPIKey })(RestaurantPage);