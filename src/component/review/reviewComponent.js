import React from 'react';
import Title from './title';
import Rating from './rating';
import Description from './Description';


class Review extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                Review compoents building blcok
                link - title, description,rating
                <br>
                </br>
                Title: <Title mytitle={this.props.title}></Title>
                <br></br>
                
                <b>Description:</b><Description mydesc={this.props.desc}></Description>
                <Rating myrating={this.props.rating}></Rating>
            </div>
        );
    }
}
 
export default Review;