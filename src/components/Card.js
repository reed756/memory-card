import React from "react"

function Card(props) {
    return (
        <div className="card">
            <img 
                alt="" 
                src={ props.image }
                onClick={ props.onClick }
                id={ props.id }
            />
        </div>
    )
}

export default Card