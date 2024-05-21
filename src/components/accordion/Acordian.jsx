import { useState } from "react"
import "./style.css"

import { data } from "./data"

export const Accordian = (props) => {
    const [selected, setSelected] = useState(null)
    const handleAnswer = (itemId) => {
       setSelected(itemId == selected ? null: itemId);
    }


    console.log(selected)
    return <div className="main-container">
        <div className="accordion">
            {
                data && data.length ?
                    data.map((val) => {
                        return (
                            <div className="items">
                                <div onClick={() => { handleAnswer(val.id) }} className="title">
                                    <h3 className="question"> {val.question}</h3>
                                    <span>+</span>
                                </div>
                               {selected === val.id ? <div className="answer">{val.answer}</div> : null}
                            </div>)
                    })
                    : <div> Data Not Found</div>
            }
        </div>
    </div>

}


