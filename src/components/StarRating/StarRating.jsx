import { FaStar } from "react-icons/fa";
import "./styles.css"
import { useState } from "react";
export const StarRating = () => {
   
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)


     function handleClick(index){
        setRating(index)
     }

     function handleEnter(index){
        setHoverRating(index)
     }

     function handleLeave(){
        setHoverRating(rating)
     } 


  console.log(`Clicked Rating is ${rating}`)
  console.log(`HoverRating is ${hoverRating}`)
    return <div className="star-rating">

        {[...Array(5)].map( (_,index)=>{
            let required_index = index+1
          return <FaStar className= {required_index <= (hoverRating|| rating) ? 'active' :"inactive"}
          key={required_index}
          onClick={()=>{handleClick(required_index)}}
          onMouseEnter={()=>{ handleEnter(required_index)}}
          onMouseLeave={()=>{handleLeave()}}
          size={50}
          ></FaStar>
        })}
        
    </div>

}