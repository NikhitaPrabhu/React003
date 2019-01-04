import React from 'react';
import ReactDOM from 'react-dom';

class  Lifecycle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            lifecycle:0
        }
        this.changeLifecyle = this.changeLifecyle.bind(this)
       
    }

    componentWillMount(){
        console.log("Lifecyle will be mounted!!")
        //alert("component will mount now!")
    }
    componentDidMount(){
        console.log("Lifecyle is has counted!!")
        
    }
    componentWillUpdate(){
        console.log("Lifecyle will updated!!")
    }
    componentDidUpdate(){
        console.log("Lifecyle is updated!!")
    }
    
    changeLifecyle(){
        this.setState({lifecycle: this.state.lifecycle +1})
        if(this.state.lifecycle>10)
        {
            ReactDOM.unmountComponentAtNode(document.getElementById('lifecycle'))
        }

    }
    componentWillUnmount(){
        console.log("ls component will unmount")
        alert("ls willl unmount from view")
    }
    render() { 
        return ( 
            <div>
                <h1>Exploring component Life cycle 
                {this.state.lifecycle}</h1>
                <button onClick={this.changeLifecyle}>change state</button>
            </div>
         );
    }
}
 
export default Lifecycle;