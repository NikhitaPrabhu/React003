import React from 'react';

class Friend extends React.Component {
  

    getFriendDetail(){
        console.log("get frinds detail" + this.props.myid)
        this.props.detail
    }
    render() { 
        return ( 

    <tr onClick={this.getFriendDetail}>
    <td>{this.props.nm}</td>
    <td>{this.props.em}</td>
    </tr>


         );
    }
}
 
export default Friend;