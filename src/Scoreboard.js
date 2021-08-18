import React, {useState} from "react"

function Scoreboard() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <div className="scoreboard">
            <div>
                Current Score: { score }
            </div>
            <br/>
            <div>
                Best Score: { bestScore }
            </div>
        </div>
    )
}

export default Scoreboard