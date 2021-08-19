import React from "react"

function Card(props) {
    return (
        <div className="card">
            <img alt="" src={props.image}/>
        </div>
    )
}

export default Card