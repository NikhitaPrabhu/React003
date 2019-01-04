import React from 'react';

class  Description extends React.Component {
    state = {  }
    render() { 
        return ( 
            <span>
               {this.props.mydesc}
            </span>
         );
    }
}
 
export default Description;