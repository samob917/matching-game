import Card from "./card"
import "./Gameboard.css"

export default function Gameboard({cardOrder, urlList, onClick}) {

    return (
        <div className="gameboard">
            {cardOrder.map((id) => {
                return (
                    <Card key={id} id={id} url={urlList[id]} onClick={onClick}/>
                )
            })}
        </div>
    )
}