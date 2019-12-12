import React from 'react'

export default function TeamBTN(props) {


    return (
        
<button type="button" value={props.id} className="btn btn-primary" id="TeamBTN" onClick={props.click}>{props.name}</button>

    )
}
