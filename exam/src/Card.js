import React, { Component,useState
} from 'react'

export default function Card(props) {
    return (
        <div className="card">
<h3> From :{props.start}</h3> 

<h3>To: {props.end}</h3>
<h3> description :{props.description}</h3>
<h3> room :{props.room}</h3>
<h3> Team: :{props.team_name}</h3>

        </div>
    )
}


