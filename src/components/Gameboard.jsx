export default function Gameboard({cardOrder}) {

    return (
        <div>
            {cardOrder.map(card => <p key={card}>{card}</p>)}
        </div>
        
    )
}