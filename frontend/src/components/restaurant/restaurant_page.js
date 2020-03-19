import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './restaurant.css';
import keys from '../../keys_dev';

class RestaurantPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: null
        }
    }

    componentDidMount() {
        const { restaurants } = this.props;
        const restaurantChoices = Object.values(restaurants);
        const randomIndex = Math.floor(Math.random() * restaurantChoices.length);
        const restaurantPick = restaurantChoices[randomIndex];
        this.setState({info: restaurantPick});
    }

    render() {
        const { info } = this.state;
        if(!info) return null;
        const { latitude, longitude } = info.coordinates;
        return (
            <div id="restaurant-page-container">
                <div id="restaurant-info-container" className="section-container">

                </div>
                <div id="map-container" className="section-container">
                    <Map
                        google={this.props.google}
                        zoom={15}
                        initialCenter={{ lat: latitude, lng: longitude}}
                    >
                        <Marker position={{ lat: latitude, lng: longitude}} />
                    </Map>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({ apiKey: keys.googleMapsAPIKey })(RestaurantPage);