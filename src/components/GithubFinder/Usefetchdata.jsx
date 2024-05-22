import { useEffect, useState } from "react"

export const UsefetchData = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        if(url && url =="")return null

        try{
        const response = await fetch(url)
        const jsonData = await response.json()
        setData(jsonData)
        }catch(e){
            setError(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return data
}