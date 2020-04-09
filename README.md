# WatchuWant
[View the live site](https://watchuwant.herokuapp.com/#/)

![Alt text](readme_images/watchuwant.png)

Hungry? Don't know what to eat? WatchuWant is a web application that will decide which restaurant to go to based on user 
current location and preferences.

### Backend
* Express.js
* MongoDB
### Frontend
* React
### Other
* Yelp API
* Google Maps API
* Node.js
* SCSS
* Heroku

# Features
* User Authentication
* Favorites
* Restaurant Picker
* Visited Restaurants History
* Restaurant Show Page

### User Authentication
Users can create an account and log in. User authentication for this web application was made using the BCrypt gem and SecureRandom module. 
***

### Code

```
class FavoriteIndex extends React.Component{
  componentDidMount(){
    this.props.fetchFavorites(this.props.user.id)
  }
  render(){
    const favoriteRestaurants = this.props.favorites.map((fav,idx)=>{
      return(
        <FavoriteIndexItem 
          restaurant={fav} key={idx} 
          deleteFavorite={this.props.deleteFavorite}
          removeFavoriteFromState ={this.props.removeFavoriteFromState}
        />
      )
    })

    return(
      <div className='scroll'>
        {favoriteRestaurants}
      </div>
    )
  }
```
Favorite restaurants react component is a collection of Favorite Items react component to keep things DRY

```
export const search = params => {
    return axios.get('/api/yelp', params)
};
```
Send an axios async calls to the backend for data

```
router.get('/', (req, res) => {
  let {location, latitude, longitude, categories, limit, price, term, radius, rating} = req.query;
  const config = {
    headers: {'Authorization': `Bearer ${yelpKey}`},
    params: {
      location,
      latitude,
      longitude,
      categories,
      limit, price, term, radius, rating
    }
  };
```
The backend calls Yelp API bypassing CORS and protecting frontend API key exposure

### Favorites
Users can add past visited restaurants to their favorites. 

![Alt text](readme_images/index.png)
***


### Restaurant Picker
Users fill out and submit a preferences form. Yelp API is used to search for restaurants and Google Maps API is used to display
map information and get a user's current location. This web application will pick one restaurant at random and a user has an option to choose another.
![Alt text](readme_images/form.png)
![Alt text](readme_images/show.png)

***
