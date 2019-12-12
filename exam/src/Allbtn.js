import React from 'react'

export default function Allbtn(props) {


    return (
<button type="button" className="btn btn-primary" id="ALLBTN" onClick={props.Sclick}>{props.name}</button>
    )
}
