import { useEffect, useState } from "react"
import { data } from "./serachData"

export const AutoComplete = () => {


    const [inputValue, setInputValue] = useState("")
    const [filterData, setFilterData] = useState([])
    const [isSelected, setIsSelected] = useState(false)


    const handleOnChange = (e) => {
        setInputValue(e.target.value)
        setIsSelected(false)
    }

    const filteredData = () => {
        if(!isSelected ){
        const arr = data.filter(item => inputValue !== "" && item.indexOf(inputValue.toLowerCase()) > -1)
        setFilterData(arr)
        }
    }

    const handleOnClick = (e) => {
        setInputValue(e.target.innerText)
        setFilterData([])
        setIsSelected(true)
    }


    useEffect(() => {
        filteredData()

    }, [inputValue])


    console.log(filterData)


    return <div className="main-container" style={{
        display:"flex",
        flexDirection:"column"
    }}>
        <div className="input-container">
            <input value={inputValue} onChange={handleOnChange} placeholder="Search..."></input>
            <button>Search</button>
        </div>

        <div className="result-container">
            {
                filterData.map((val) => {
                    return <div onClick={handleOnClick}>{val}</div>
                })
            }
        </div>

        {/* Syam */}
    </div>
}