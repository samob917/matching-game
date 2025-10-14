export default function Scoreboard({currentScore, bestScore}) {
    return (
        <div>
            <div>Current Score: {currentScore}</div>
            <div>Best Score: {bestScore}</div>
        </div>
    )
}