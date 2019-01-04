import React from 'react';
//import Community from './community';

class Welcome extends React.Component {
    render(){
        return(
            <div>
            <h1>
               {this.props.msg} from {this.props.msg2}
            </h1>
        
            </div>
        )
    }

}

export default Welcome 