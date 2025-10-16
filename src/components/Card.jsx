import { useEffect, useState } from "react"

export default function Card({id, url}) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                console.log(url)
                const response = await fetch(url);
                console.log(response)
                if (!response.ok) {
                    throw new Error("URL didnt load right")
                }
                const result = await response.json()
                setData(result)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchImage()
    }, [])
    console.log(data)
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error {error.message}</div>
    return (
        <div>
            <img src={data.sprites.front_default} alt={data.name} />
        </div>
    )
}