
import { useState } from "react"
import "./theme.css"
import {UseLocalStorage} from "./UseLocalStorage"


export const Darktheme = ()=>{
const [value, setValue] = UseLocalStorage("theme","dark")
  const handleThemeToggle = ()=>  setValue( current => current == "dark" ? "light":"dark")

    return<div className="theme-conatainer" data-theme ={value} >
        <div className="content">
            <h2>Hello Dev</h2>
            <button onClick={handleThemeToggle}> Change Theme</button>
            <div>{value}</div>
        </div>
    </div>


    // return 
}