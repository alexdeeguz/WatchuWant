import React from 'react';
import './preferences.scss';
import { search } from '../../util/yelp_api';


class PreferenceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: "distance",
            distance: "",
            price: "",
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

    updatePrice(e) {
        this.setState({
            price: e.target.innerHTML
        })
    }

    getLocation(e) {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition((pos) => {
            this.commenceSearch(pos)
        })
    }

    commenceSearch(pos) {
        const preferences = {
            //keys names can't be changed. Yelp api looks specifically for them
            params: {
                // location: 'san francisco', //location or coordinates
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                categories: ["Food", "food", this.state.cuisine], //array of string, yelp has list of supported categories
                limit: 10, // limits search, max 50
                price: String(this.state.price.length), //string "1", "2", "3", or "4"
                term: this.state.cuisine,  //specific search term
                radius: (Number(this.state.distance) * 1609), //radius in meters, max is 40_000meters approx 25miles
                rating: 4.5, //decminal 1 through 5
            }
        }

        search(preferences)
            .then(res => { 
                if (res.data.total === 0) throw "no restaurants";
                this.props.receiveRestaurants(res.data);
                const rests = res.data.businesses;
                if (rests.length !== 0) {
                    let idx = Math.floor(Math.random() * rests.length);
                    this.props.history.push(`/restaurants/${rests[idx].id}`);
                }
             })
            .catch(errors => alert('No restuarants found with entered preferences'));
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
                                    <button onClick={this.updatePrice} className={this.state.price === "$" ? "selected" : ""}>$</button>
                                    <button onClick={this.updatePrice} className={this.state.price === "$$" ? "selected" : ""}>$$</button>
                                    <button onClick={this.updatePrice} className={this.state.price === "$$$" ? "selected" : ""}>$$$</button>
                                    <button onClick={this.updatePrice} className={this.state.price === "$$$$" ? "selected" : ""}>$$$$</button>
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