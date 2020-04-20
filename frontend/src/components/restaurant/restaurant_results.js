import React from 'react';

//api imports
import { search } from '../../util/yelp_api'


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
            index: 0,
        }
        
        this.addToVisited = this.addToVisited.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    addToVisited() {
        console.log('add to visited clicked');
        const { id, name, image_url, location } = this.state.restaurants[this.state.index];
        const visitedRestaurant = {
            restaurantId: id,
            name: name,
            imageUrl: image_url,
            userId: this.props.user.id,
            location: location.address1
        }
        this.props.addToVisited(visitedRestaurant)
            .then(() => this.props.history.push('/user'))
            .catch((res) => {
                // console.log(res);
                console.log("Error adding restaurant");
                console.log("try again later");
            });
    }

    componentDidMount() {
        const {query} = this.props;
        search(parse(query)).then(res => {
            this.props.receiveRestaurant(res.data);
            this.setState({restaurants: res.data.businesses});
        });  
    }
    
    handleSelect(selectedIndex, e) {
        this.setState({index: selectedIndex});
    }

    render() {
        if (this.state.restaurants.length < 1) return <Loading />;
        return (
            <div className='w-hundred h-hundred flex-col start-center' id='restaurant-show-page'>
                <img id="background-image"
                    alt='background'
                    src="https://images.unsplash.com/photo-1516749622035-ab9e45262e0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
                </img>
                <Carousel
                    activeIndex={this.state.index}
                    onSelect={this.handleSelect}
                    interval={null} 
                    id='restaurants'
                    className='w-hundred'>
                    {createCarouselItems(this.state.restaurants)}
                </Carousel>
                <div className="choices">
                    <p onClick={this.addToVisited}>ADD TO VISITED</p>
                    <p onClick={() => this.props.history.push('/user')}>SEE VISITED RESTAURANTS</p>
                    <p onClick={() => this.props.history.push('/preferences')}>CHANGE PREFERENCES</p>
                </div>
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
                <a href={url} target='_blank' rel="noopener noreferrer"><h1 id="name">{name}</h1></a>
                <div className='flex center-center image-map'>
                    <a href={url} target='_blank' rel="noopener noreferrer"><img src={image_url} alt={name}></img></a>
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
                <div className='flex-col start-center restaurant-info'>
                    <h3>Details</h3>
                    <a href={url} target='_blank' rel="noopener noreferrer">Yelp Link</a>
                    <p>{location.display_address.join(", ")}</p>
                    <p>Phone: {display_phone}</p>
                    <p>Rated: {rating} by {review_count} reviews</p>
                    <p>Price: {price}</p>
                    <p>Other transaction types: {transactions.join(", ")}</p>
                    <p>Categories: {extractCategories(categories).join(", ")}</p>
                    <p>Distance away: {(distance / 1000).toFixed(2)}km</p>
                </div>
            </Carousel.Item>
        );
    });
}

export default RestaurantResults;
