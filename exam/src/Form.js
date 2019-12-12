  
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Form extends Component {
    state = ''

      
    handleSubmit = (e) =>{
        var dataTopush;
        e.preventDefault();
      let from = document.querySelector('#from').value;
      let to = document.querySelector('#to').value;
      let description = document.querySelector('#description').value
      let team_name = document.querySelector('#team_name').value
      let RoomNum = document.querySelector('#RoomNum').value

      let logDetails = {
        from: from,
      to: to,
      description: description,
      teamname: team_name,
      RoomNum: RoomNum
}
let logJSONED = JSON.stringify(logDetails)

fetch('http://localhost:4000/meet', {
    method: 'POST',
   
    headers:{
        "Content-Type": "application/json"
        
    },
    body:  logJSONED,
    
}).then(response => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    
    return response.text(); // or `.json()` or any of several others, depending on what you expect back
})
.then(data => {
    console.log(data)
})
.catch(error => {
    throw error
});


}
    render() {
        return (
            
            <div className="form">
            <form onSubmit={this.handleSubmit} >
            <input className="form-control" type="datetime-local"  id="from"></input>
            <input className="form-control" type="datetime-local"  id="to"></input>
            <input class="form-control" type="text" placeholder="Description" id="description" /> 
            <input class="form-control" type="text" placeholder="Room Number" id="RoomNum" /> 

            <select multiple class="form-control" id="team_name">
      <option>Food court</option>
      <option>management</option>
      <option>programers</option>
      <option>research and delelope</option>
      <option>Security</option>
    </select>

            <button type="submit" className="registerSubmit"> Oppoint new</button>
            </form>
            </div>
        )
    }
}