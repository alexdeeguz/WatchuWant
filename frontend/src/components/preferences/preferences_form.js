import React from 'react';
import './preferences.scss';
import { search } from '../../util/yelp_api';


class PreferenceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: "distance",
            distance: "",
            price: undefined,
            cuisine: ""
        };
        this.updateDistance = this.updateDistance.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.commenceSearch = this.commenceSearch.bind(this)
        this.updateCuisine = this.updateCuisine.bind(this)
        this.getLocation = this.getLocation.bind(this)
    }

    updateCuisine(e) {
        this.setState({
            cuisine: e.target.value
        })
    }

    updateDistance(e) {
        if(e.target.value === '') {
            this.setState({
                distance: ''
            })
        } else {
            const checkNum = Number(e.target.value);
            if(!isNaN(checkNum)) {
                this.setState({
                    distance: checkNum
                })
            }
        }
    }

    updatePrice(price) {
        return (e) => {
            const priceButtons = document.getElementsByClassName("price-button");
            for (let i = 0; i < priceButtons.length; i++) {
                priceButtons[i].classList.remove('selected');
            }
            e.target.classList.add("selected");
            this.setState({ price: price })
        }
    }

    getLocation(e) {
        e.preventDefault();
        if (Number(this.state.distance > 24)) {
            alert("Sorry, can only search up to 24 miles")
            return
        }
        navigator.geolocation.getCurrentPosition((pos) => {
            this.commenceSearch(pos)
        })
    }

    commenceSearch(pos) {
        const price = this.state.price || "1,2,3,4";
        const distance = (this.state.distance !== "")
            ? Number(this.state.distance) * 1609
            : 40000;
        const { cuisine } = this.state;

        const preferences = {
            //keys names can't be changed. Yelp api looks specifically for them
            params: {
                // location: 'san francisco', //location or coordinates
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                categories: "food", //string delimited by commas
                limit: 15, // limits search, max 50
                price: price, //optional inclusive less, string "1", "2", "3", or "4"
                term: cuisine,  //specific search term
                radius: distance, //radius in meters, max is 40_000meters approx 25miles
                rating: 4.25, //min decminal 1 through 5
            }
        }

        search(preferences)
            .then(res => { 
                if (res.data.total === 0) throw RangeError;
                this.props.receiveRestaurants(res.data);
                const rests = res.data.businesses;
                if (rests.length !== 0) {
                    let idx = Math.floor(Math.random() * rests.length);
                    this.props.history.push(`/restaurants/${rests[idx].id}`);
                }
             })
            .catch(() => alert('No restuarants found with entered preferences'));
    }


    render() {
        return (
            <div  id="preference-form">
                <div className='form-opacity-holder'>
                    <div className='form-opacity'>
                        <div className='pref-form-container'>
                            <h1>Please Fill Out Your Preferences</h1>
                            <div className="question">
                                <label>How far would you like to travel?</label>
                                <div id="distance-input-container">
                                    <input className='miles' value={this.state.distance} onChange={this.updateDistance} placeholder="mile(s)"/>
                                </div>
                            </div>
                            <div className="question">
                                <label>What's your price range?</label>
                                <div id="price-container">
                                    <button onClick={this.updatePrice("1,2,3,4")} className="price-button">Any</button>
                                    <button onClick={this.updatePrice("1")} className="price-button">$</button>
                                    <button onClick={this.updatePrice("2")} className="price-button">$$</button>
                                    <button onClick={this.updatePrice("3")} className="price-button">$$$</button>
                                    <button onClick={this.updatePrice("4")} className="price-button">$$$$</button>
                                </div>
                            </div>
                            <div className="question">
                                <label>What type of food are you craving?</label>
                                <div id="distance-input-container">
                                    <input className='cuisine' value={this.state.cuisine} onChange={this.updateCuisine} placeholder="ex. asian food" />
                                </div>
                            </div>
                            <div id="find-restaurant">
                                <button id="find-button" onClick={() => this.props.history.push('/user')}>Past visited restaurants</button>
                                <button id="find-button" onClick={this.getLocation}>Let's find a place!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreferenceForm