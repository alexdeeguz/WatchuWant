import React from 'react';
import './preferences.css';
import { search } from '../../util/yelp_api';

class PreferenceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: "distance",
            distance: 1,
            price: "",
            cuisine: ""
        };

        this.updateDistance = this.updateDistance.bind(this);
        this.updateCuisine = this.updateCuisine.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
    }

    updateDistance(e) {
        this.setState({
            distance: e.target.value
        })
        console.log(this.state.distance)
    }

    updateCuisine(e) {
        this.setState({
            cuisine: e.target.innerHTML
        })
    }

    updatePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    commenceSearch(e) {
        e.preventDefault();
        const preferences = {
            //keys names can't be changed. Yelp api looks specifically for them
            params: {
                location: 'san francisco', //location or coordinates
                categories: [], //array of string, yelp has list of supported categories
                limit: 10, // limits search, max 50
                price: "2", //string "1", "2", "3", or "4"
                term: "",  //specific search term
                radius: 500, //radius in meters, max is 40_000meters approx 25miles
                rating: 2.5, //decminal 1 through 5
            }
        }
        
        //returns an array of businesses
        search(preferences)
            .then(res => console.log(res.data));
    }


    render() {
        if (this.state.form === "distance") {
            return (
                <div className="preference-form">
                    <h1>HOW FAR ARE YOU WILLING TO TRAVEL?</h1>
                    <div>
                    <input type="number" min="1" value={this.state.distance} onChange={this.updateDistance}></input> MILE(S)
                    </div>
                    <div className="back-next-buttons">
                        <button className="next-button">SKIP</button>
                        <button onClick={() => this.setState({ form: "price" })} className="next-button">NEXT</button>
                    </div>

                    <h1>HOW MUCH ARE YOU WILLING TO SPEND?</h1>
                    <div>
                        $<input type="number" min="1"></input>
                    </div>
                    <div className="back-next-buttons">
                        <button onClick={() => this.setState({ form: "distance" })} className="next-button">BACK</button>
                        <button onClick={() => this.setState({ form: "cuisine" })} className="next-button">NEXT</button>
                    </div>
                </div>
            )
        } else if (this.state.form === "price") {
            return (
                <div className="preference-form">
                    <h1>HOW MUCH ARE YOU WILLING TO SPEND?</h1>
                    <div>
                        $<input type="number" min="1"></input> 
                    </div>
                    <div className="back-next-buttons">
                        <button onClick={() => this.setState({ form: "distance" })} className="next-button">BACK</button>
                        <button onClick={() => this.setState({form: "cuisine"})} className="next-button">NEXT</button>
                    </div>
                </div>
            )
        } else if (this.state.form === "cuisine") {
            return (
                <div className="preference-form">
                    <h1>WHAT FOOD DO YOU WANT?</h1>
                    <div className="cuisine-types">
                        <div className="cuisine-one">
                            <button onClick={this.updateCuisine} className={this.state.cuisine === "Asian" ? "selected" : ""}>Asian</button>
                            <button onClick={this.updateCuisine} className={this.state.cuisine === "Mexican" ? "selected" : ""}>Mexican</button>
                            <button onClick={this.updateCuisine} className={this.state.cuisine === "American" ? "selected" : ""}>American</button>
                        </div>
                    </div>
                    <div className="back-next-buttons">
                        <button onClick={() => this.setState({ form: "price" })} className="next-button">BACK</button>
                        <button className="next-button">NEXT</button>
                    </div>
                    <button onClick={this.commenceSearch}>search</button>
                </div>
            )
        }
    }
}

export default PreferenceForm