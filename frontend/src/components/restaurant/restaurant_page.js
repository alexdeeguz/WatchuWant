import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './restaurant.css';
import keys from '../../keys_dev';

class RestaurantPage extends React.Component {

    componentDidMount() {
        console.log(this.props);   
    }

    render() {
        return (
            <div id="restaurant-page-container">
                <div id="restaurant-info-container" className="section-container">

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