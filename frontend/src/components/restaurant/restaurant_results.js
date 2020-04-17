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

    componentDidMount() {
        const {query} = this.props;
        search(parse(query)).then(res => {
            this.props.receiveRestaurant(res.data);
            this.setState({restaurants: res.data.businesses});
        });  
    }
    
    render() {
        if (this.state.restaurants.length < 1) return <Loading />;
        return (
            <div className='w-hundred h-hundred flex-col start-center' id='restaurant-show-page'>
                <img id="background-image"
                    alt='background'
                    src="https://images.unsplash.com/photo-1516749622035-ab9e45262e0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
                </img>
                <Carousel interval={null} className='w-hundred' id='restaurants'>
                    {createCarouselItems(this.state.restaurants)}
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

const extractCategories = (arr) => {
    return arr.map((kat) => {
        return kat.title
    });
}

// const createImageCarousel = (arr) => {
//     return arr.map((photo, i) => {
//         return (
//             <Carousel.Item key={i}>
//                 <img src={photo.url} alt={i}></img>
//             </Carousel.Item>
//         );
//     });
// }

const createCarouselItems = (arr) => {
    return arr.map((restaurant, i) => {
        const {
            name, image_url, price, rating,
            review_count, transactions, url, 
            categories, display_phone, location,
            distance,
        } = restaurant;
        const {latitude, longitude} = restaurant.coordinates;
        return (
            <Carousel.Item className='w-hundred restaurant-item' key={i}>
                <h1 id="name">{name}</h1>
                <div className='flex center-center image-map'>
                    <img src={image_url}></img>
                    <div className='map-container'>
                        <Map className='google-map'
                            google={window.google}
                            zoom={15}
                            initialCenter={{ lat: latitude, lng: longitude}}
                            center={{ lat: latitude, lng: longitude}}
                        ><Marker position={{ lat: latitude, lng: longitude}} />
                        </Map>
                    </div>
                </div>
                <div className='restaurant-info'>
                    <h3>Details</h3>
                    <a href={url}>Yelp Link</a>
                    <p>{location.display_address}</p>
                    <p>Phone: {display_phone}</p>
                    <p>Rated: {rating} by {review_count} reviews</p>
                    <p>Price: {price}</p>
                    <p>transaction types: {transactions}</p>
                    <p>Categories: {extractCategories(categories).join(", ")}</p>
                    <p>Distance away: {distance / 1000}km</p>
                </div>
            </Carousel.Item>
        );
    });
}

export default RestaurantResults;

{/* <div className="choices">
    <p onClick={this.addToVisited}>EAT HERE</p>
    <p onClick={() => this.props.history.push('/user')}>CHOOSE FROM VISITED</p>
    <p onClick={() => this.props.history.push('/preferences')}>CHANGE PREFERENCES</p>
</div> */}