import React from 'react';

class Title extends React.Component {
    state = {  }
    render() { 
        return ( 
<span>
    {this.props.mytitle}
</span>

         );
    }
}
 
export default Title;