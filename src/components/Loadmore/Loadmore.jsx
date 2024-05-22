import { useEffect, useState } from "react";

import "./load-styles.css"




export const LoadMore = () => {

    const [products, setProducts] = useState([])
    const [loadCount, setLoadCount] = useState(0)
    const [disable, setDisable] = useState(false)

    // setLoadCount(2)

    const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${loadCount === 0 ? loadCount : loadCount * 20}`)
        const jsonData = await response.json()
        // console.log(jsonData)
        setProducts(   loadCount >0 ?(previous)=> [...previous , ...jsonData.products] : jsonData.products)
    }
    useEffect(() => {
        console.log(loadCount)
        fetchProducts()
    }, [loadCount])


    useEffect(()=>{

       if(products&& products.length===100) setDisable(true) 
       
    },[products])

    console.log(products)

    return <div className="load-more-container">
        <div className="products-container">
            {
                products.map((val, index) => {
                    return <div key={val.id} className="products">
                        <img src={val.thumbnail} alt=""></img>
                        <h4> {val.title}</h4>
                        <h5> {val.description}</h5>
                    </div>
                })
            }
        </div>

        <div className="button-container">

            <button disabled={disable} onClick={()=>{setLoadCount(c=>c+1)}}> Load More Items</button>

            {
                disable ? <p>You have reached limit of 100</p> :null
            }

        </div>

    </div>
}