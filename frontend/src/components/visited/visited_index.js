import React from 'react';
import VisitedIndexItem from './visited_index_item';

class VisitedIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllVisited(this.props.user.id)
    }

    // componentWillUnmount(){
    //     this.props.fetchAllVisited(this.props.user.id)
    // }


    render(){

        const visitedRestaurants = this.props.visitedRestaurants.map((visitedRes, idx)=>{
            return(
                <VisitedIndexItem visitedRestaurant={visitedRes} key={idx} postFavorite={this.props.postFavorite}/>
            )
        })

        return(
            <div>
                {visitedRestaurants}
            </div>
        )
    }
};

export default VisitedIndex;