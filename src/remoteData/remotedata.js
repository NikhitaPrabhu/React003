import React from 'react';
import axios from 'axios';
import Friend from './friend';

class RestAPI extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            friends:[]
        }
        this.getRemoteData=this.getRemoteData.bind(this)
        //this.getRemoteData=this.displayFriends.bind(this)
        
    }
    componentWillMount(){
        this.getRemoteData()
    }
    displayDetail(id){
        console.log("Display details of "+ id)
    }
    getRemoteData(){
        console.log("axios will call rest API")
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(((responsedata)=>{
            console.log(this.state.friends)
            console.log(responsedata.data)
            this.setState({friends:responsedata.data})
            console.log("Dumping this.state.friends")
            console.log(this.state.friends)
        }))
    }
    displayFriends(){
        console.log("friedns will be displayed here")
        return this.state.friends.map((f)=>{
        return (<Friend
                    key={f.id}
                    myid={f.id}
                    nm={f.name}
                    em={f.email}
                    detail={this.displayDetail(id)}
                    >
                 </Friend>)
    }
        )

    }
    render() { 
        return (  
            <div><h1>Data coming from Rest API</h1>
                <table border="1">
                {this.displayFriends()}
                </table>
           
            </div>
        );
    }
}
 
export default RestAPI;