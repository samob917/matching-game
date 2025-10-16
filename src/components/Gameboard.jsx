import Card from "./card"


export default function Gameboard({cardOrder, urlList}) {

    return (
        <div>
            {cardOrder.map((id) => {
                return (
                    <Card key={id} id={id} url={urlList[id]}/>
                )
            })}
        </div>
    )
}