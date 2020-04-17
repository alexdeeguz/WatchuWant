import React from 'react';

//api imports
import { getRestaurant, search } from '../../util/yelp_api'


//react components
import { Map, Marker } from 'google-maps-react';
import Loading from '../loading/spinner';


//css imports
import './restaurant.css';
import './bootstrap.css';
import '../../util.scss';

//carousel import
import Carousel from 'react-bootstrap/Carousel';

class RestaurantResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
        }
        
        this.addToVisited = this.addToVisited.bind(this)
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
        const {query} = this.props;
        search(parse(query)).then(res => {
            this.props.receiveRestaurant(res.data);
            this.setState({restaurants: Object.values(res.data)});
        });  
    }
    
    render() {
        if (this.state.restaurants.length < 1) return <Loading />;

        return (
            <div className='w-hundred flex center-center' id='restaurant-show-page'>
                <img id="background-image"
                    alt='background'
                    src="https://images.unsplash.com/photo-1516749622035-ab9e45262e0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
                </img>
                <Carousel className='w-hundred' id='restaurants'>
                    {createCarouselItems(this.props.restaurants)}
                </Carousel>
                
            </div>
        )
    }
}

const parse = (str) => {
    const keys = str.split('&');
    const values = keys.map((k) => {
        return k.split("=")[1];
    });
    const params = {
        params: {
            latitude: values[0],
            longitude: values[1],
            categories: values[2],
            limit: values[3],
            price: values[4],
            term: values[5],
            radius: values[6],
            rating: values[7],
        }
    }
    return params;
}

const createCarouselItems = (arr) => {
    return null;
    return (
        <Carousel.Item>
            {/* <h1 id="name">{r.name}</h1> */}
            {/* <img alt='restaurant' src={r.image_url}></img> */}
            <Carousel.Caption>
                <h3>different information</h3>
                <p>information</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default RestaurantResults;

{/* <div id="map-container" className="section-container">
    <Map
        google={window.google}
        zoom={15}
        initialCenter={{ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}}
        center={{ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}}
        >
        <Marker position={{ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} />
    </Map>
</div> */}

{/* <div className="choices">
    <p onClick={this.addToVisited}>EAT HERE</p>
    <p onClick={() => this.props.history.push('/user')}>CHOOSE FROM VISITED</p>
    <p onClick={() => this.props.history.push('/preferences')}>CHANGE PREFERENCES</p>
</div> */}