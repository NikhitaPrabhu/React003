import React from 'react';

class Rating extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            score:0,
            rating: this.props.myrating
        }
        this.increaseScore = this.increaseScore.bind(this)
        this.increaseRating = this.increaseRating.bind(this)
        this.DecreaseRating = this.DecreaseRating.bind(this)
    }

    increaseScore(){
        console.log("score value" + this.state.score)
        this.setState({score: this.state.score +1})
        
    }
    increaseRating(){
        console.log("rating value " + this.state.rating)
        this.setState({rating:Number(this.state.rating) +1 })
    }
    DecreaseRating(){
        console.log("rating value " + this.state.rating)
        this.setState({rating:Number(this.state.rating) -1 })
    }
    render() { 
        return (  
            <div>
                <button onClick={this.increaseRating}>+</button>
                {this.state.rating}
                <button onClick={this.DecreaseRating}>-</button>
                Score: {this.state.score}
            </div>
        );
    }
}
 
export default Rating;