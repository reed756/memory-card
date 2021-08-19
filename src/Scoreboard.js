import React from "react"

function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <div>
                <p>Current Score: { props.score }</p>
            </div>
            <br/>
            <div>
                <p>Best Score: { props.bestScore }</p>
            </div>
        </div>
    )
}

export default Scoreboard