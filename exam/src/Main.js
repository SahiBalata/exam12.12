import React, { Component } from 'react'
import TeamBTN from './TeamBTN'
import Form from './Form'
import Show from './Show'
import Card from './Card'
import Allbtn from './Allbtn'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { throws } from 'assert';


 class Main extends Component {

  state = {newARR: [], meetings: []}

createBTN = () =>{
    return  this.state.name.map(x => console.log(x))
  }
    loadBTN =  () => {
        
        fetch('http://localhost:4000/getteams') // Call the fetch function passing the url of the API as a parameter
.then((response) => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
   
    return response.text(); 
}).then(data =>{
    
   let JsonedData = JSON.parse(data) 
return JsonedData
}).then(ret =>{
    
    let arr = []
    for(let i=0; i < ret.length; i++){
arr.push(ret[i].team_name)
var newARR = arr;
    }
    
this.setState({newARR})


})   
.catch(function() {
   throw console.error("Eror");
   
});


return(this.state.newARR.map(x=><TeamBTN id={x} name={x} click={this.handleRandomClick} />))
}
    
handleClick = (e) =>{
    
fetch('http://localhost:4000/getmeets')
.then((response) => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
   
    return response.text(); 
}).then(data =>{
    var meetings;
    meetings = JSON.parse(data) 

   this.setState({meetings})
   console.log(this.state)

}).catch(function() {
    throw console.error("Eror");
    
 });
 
}

handleRandomClick = (e) =>{
    // e.persist()
var name = e.target.value;
fetch(`http://localhost:4000/${name}`)
.then((response) => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
   
    return response.text(); 
}).then(data =>{
    var meetings;
    meetings = JSON.parse(data) 

   this.setState({meetings})
   console.log(this.state)
}).catch(function() {
    throw console.error("Eror");
    
 });

}

handleCards = () =>{
 return   this.state.meetings.map(x => <Card  start={x.start} end={x.end} description={x.description} room={x.room} team_name={x.team_name}/>)
}

    render() {
        return (
          
            <div className="Main">
         <Allbtn name="All"  Sclick={this.handleClick} />
              {this.loadBTN()}
              {this.handleCards()}
              
                <Form />
            </div>
           
        )
    }
}
export default Main;