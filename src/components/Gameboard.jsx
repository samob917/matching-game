import Card from "./card"


export default function Gameboard({cardOrder}) {

    return (
        <div>
            {cardOrder.map(id => <Card key={id} id={id}/>)}
        </div>
        
    )
}