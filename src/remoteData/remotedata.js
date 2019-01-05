import React from 'react';
import axios from 'axios';
import Friend from './friend';

class RestAPI extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            friends:[],
            name:"",
            description:"",
            upvote:0,
            downvote:0
        }
        this.getRemoteData=this.getRemoteData.bind(this)
        this.displayDetail = this.displayDetail.bind(this)
        this.getName = this.getName.bind(this)
        this.getUpvote = this.getUpvote.bind(this)
        this.getDownvote = this.getDownvote.bind(this)
        this.getDescription = this.getDescription.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }
    componentWillMount(){
        this.getRemoteData()
    }
    displayDetail(id){
        console.log("Display details of "+ id)
        this.state.friends.map((f)=>{
            if(f.id===id){
                console.log("votes: "
                                +f.upvote
                                +" and "
                                +f.downvote)
            }
        }

        )
        

        
        }
    getRemoteData(){
        console.log("axios will call rest API")
        axios.get("http://localhost:3000/products")
        .then(((responsedata)=>{
            console.log(this.state.friends)
            console.log(responsedata.data)
            this.setState({friends:responsedata.data})
            console.log("Dumping this.state.friends")
            console.log(this.state.friends)
        }))
    }
    displayFriends(){
        //console.log("friedns will be displayed here")
        return this.state.friends.map((f)=>{
        return (<Friend
                    key={f.id}
                    myid={f.id}
                    nm={f.name}
                    em={f.description}
                    detail={this.displayDetail}
                    >
                 </Friend>)
    }
        )

    }

    addProduct(){
        console.log("addProduct Called!")
        var jsonproduct = {
            "name":this.state.name,
            "upvote": this.state.upvote,
            "downvote": this.state.downvote,
            "description":this.state.description
        }
        console.log(jsonproduct)
        axios.post("http://localhost:3000/products",jsonproduct)
        .then((rd)=>{
            console.log(rd)
            this.getRemoteData()
        })
    }
    getName(event){
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
    getUpvote(event){
        console.log(event.target.value)
        this.setState({upvote:event.target.value})
    }
    getDownvote(event){
        console.log(event.target.value)
        this.setState({downvote:event.target.value})
    }
    getDescription(event){
        console.log(event.target.value)
        this.setState({description:event.target.value})
    }
    render() { 
        return (  
            <div>
                <div>
                    Name: <input type="text" onChange= {this.getName}></input><br></br>
                    Descriptiom: <input type="text"onChange={this.getDescription}></input><br></br>
                    upvote: <input type="number" onChange={this.getUpvote}></input><br></br>
                    downvote: <input type="number" onChange={this.getDownvote}></input><br></br>
                    <button onClick={this.addProduct}>Add</button>
                </div>
                <h1>Data coming from Rest API</h1>
                <table border="1">
                {this.displayFriends()}
                </table>
           
            </div>
        );
    }
}
 
export default RestAPI;