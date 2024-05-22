import { useEffect, useState } from "react"

export const  UseLocalStorage  = (key,defaultValue)=>{

    const [value, setValue] = useState(()=>{
        let currentValue;
        try{
            currentValue = localStorage.getItem(key)
        }catch(e){
            console.log(e)
            currentValue = defaultValue
        }

        return currentValue
    });

    useEffect(()=>{
        localStorage.setItem(key,value)
        console.log("Effect")
    },[key,value])
    return [value, setValue]

}