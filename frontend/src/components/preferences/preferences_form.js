import React from 'react';
import './preferences.css';
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
    }

    updateCuisine(e) {
        this.setState({
            cuisine: e.target.value
        })
    }

    updateDistance(e) {
        this.setState({
            distance: Number(e.target.value) 
        })
    }

    updatePrice(e) {
        this.setState({
            price: e.target.innerHTML
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
                price: String(this.state.price.length), //string "1", "2", "3", or "4"
                term: this.state.cuisine,  //specific search term
                radius: (Number(this.state.distance) * 1609), //radius in meters, max is 40_000meters approx 25miles
                rating: 4.5, //decminal 1 through 5
            }
        }
        
        search(preferences)
            .then(res => this.props.receiveRestaurants(res.data)) //dispatches to store the res
            .catch(errors => console.log(errors));
        //check state to see restaurants 
        
        //TODO:
            //redirect to restaurant page
            //mapstate to props the res
            //pick a res, render restaurant show
    }


    render() {
        return (
            <div className="preference-form">
                <h1>HOW FAR ARE YOU WILLING TO TRAVEL?</h1>
                <div>
                <input type="number" value={this.state.distance} onChange={this.updateDistance}></input> MILE(S)
                </div>

                <h1>HOW MUCH ARE YOU WILLING TO SPEND?</h1>
                <div>
                    <button onClick={this.updatePrice} className={this.state.price === "$" ? "selected" : ""}>$</button>
                    <button onClick={this.updatePrice} className={this.state.price === "$$" ? "selected" : ""}>$$</button>
                    <button onClick={this.updatePrice} className={this.state.price === "$$$" ? "selected" : ""}>$$$</button>
                    <button onClick={this.updatePrice} className={this.state.price === "$$$$" ? "selected" : ""}>$$$$</button>
                </div>

                <h1>WHAT FOOD DO YOU WANT?</h1>
                <select onChange={this.updateCuisine}>
                    <option disabled selected>--Please select an option--</option>
                    <option value="asian">Asian</option>
                    <option value="mexican">Mexican</option>
                    <option value="american">American</option>
                    <option value="indian">Indian</option>
                    <option value="italian">Italian</option>
                    <option value="mediterranean">Mediterranean</option>
                </select>
                {/* <div className="cuisine-types">
                    <div className="cuisine-one">
                        <button onClick={this.updateCuisine} className={this.state.cuisine === "Asian" ? "selected" : ""}>Asian</button>
                        <button onClick={this.updateCuisine} className={this.state.cuisine === "Mexican" ? "selected" : ""}>Mexican</button>
                        <button onClick={this.updateCuisine} className={this.state.cuisine === "American" ? "selected" : ""}>American</button>
                    </div>
                    <div className="cuisine-two">
                        <button onClick={this.updateCuisine} className={this.state.cuisine === "Indian" ? "selected" : ""}>Indian</button>
                        <button onClick={this.updateCuisine} className={this.state.cuisine === "Italian" ? "selected" : ""}>Italian</button>
                        <button onClick={this.updateCuisine} className={this.state.cuisine === "Mediteranean" ? "selected" : ""}>Mediteranean</button>
                    </div>

                </div> */}
                <button onClick={this.commenceSearch}>CHOOSE A PLACE!</button>
            </div>
        )
    }
}

export default PreferenceForm