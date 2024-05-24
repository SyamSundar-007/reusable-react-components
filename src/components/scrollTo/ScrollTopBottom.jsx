

// https://dummyjson.com/products

import { useRef } from "react"
import { UsefetchData } from "../GithubFinder/Usefetchdata"


export const ScrollTopBottom = () => {
    const data = UsefetchData("https://dummyjson.com/products?limit=100")

     const bottomRef = useRef()

     const handleScrollTop = ()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
     }

     const handleScrollBottom =(e)=>{
        bottomRef.current.scrollIntoView({behavior:"smooth"})
     }
    return <div className="main-container" style={{
        width: "100vW",
        height: "100%"
    }}>
        <div className="container-wrapper">
            <h2>This is the Top Section</h2>
            <button onClick={handleScrollBottom}>Go to bottom</button>
            <div className="data-wrapper">
                {
                    data && data.products && data && data.products.length ?
                        <ul style={{
                            listStyle: "none",
                            padding: "0px",
                            // display:"flex"
                        }}>
                            {
                                data.products.map(item => <li key={item.id} style={{ padding: "4px" }}>{item.title}</li>)
                            }
                        </ul>
                        : <div> Data is loading Please Wait </div>
                }
            </div>

            <h2 ref={bottomRef}> This is the bottom Section</h2>
            <button onClick={handleScrollTop}>Go to Top</button>
        </div>
    </div>
}