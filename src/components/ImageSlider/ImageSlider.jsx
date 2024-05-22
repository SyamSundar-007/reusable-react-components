import { useEffect, useState } from "react"
import axios, { Axios } from "axios"
import "./image-styles.css"

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"


export const ImageSlider = () => {

    const [images, setImages] = useState([])
    const [isloading, setLoading] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    async function getApiData() {
        const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=5")
        const data = response.data
        setImages(data)
    }


    useEffect(() => {

        setLoading(true)
        getApiData()
        setLoading(false)
    }, [])


    console.log(images)

    const handleleft = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    }

    const handleRight = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    }

    const handleIndiactor = ()=>{

    }


    console.log(`Right Click index${currentIndex}`)
    console.log(`left Click index${currentIndex}`)

    if(isloading){
        return<div><h3>Page is loading please wait</h3></div>
    }


    return <div className="main-container">

        {images.map((val, index) => {
            return <img
                key={val.id}
                src={val.download_url}
                alt={val.author}
                className={index == currentIndex ? "current-image" : "current-image inactive-image"} />
        })}

        <BsArrowLeftCircleFill
            className="arrow arrow-left"
            onClick={() => { handleleft() }}></BsArrowLeftCircleFill>

        <BsArrowRightCircleFill
            className="arrow arrow-right"
            onClick={() => { handleRight() }}></BsArrowRightCircleFill>

            <span className="indiactor-container">
                {
                    images && images.length? 
                    images.map((val, index)=>{
                        return<button 
                        key={val.id} 
                        className= {index === currentIndex ?"btn" :"btn hihgligt-btn"}

                        onClick={()=>{ setCurrentIndex(index)}}
                        
                        
                        >
                        </button>
                    })
                    :null
                }
            </span>
    </div>

}