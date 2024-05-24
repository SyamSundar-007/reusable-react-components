import { useState, useEffect } from "react"
import { LoginForm } from "./LoginForm"

export const Modal = () => {

    useEffect(()=>{
        console.log("Modal Re-render")
      })

    const [isClicked, setIsClicked] = useState(false)

    const handleOnclick = () => {
        setIsClicked(true)
    }
    return <div className="main-container" style={{
        height: "100vh"
    }}>
        <div className="main-wrapper" style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap: "20px"
        }}>
             <p style={{
                fontSize:"2rem",
                fontWeight:"bold",
                margin:"0px",
                fontFamily:"sans-serif"
            }}> Click to get the Modal</p>
            <button onClick={handleOnclick} style={{
                cursor: "pointer",
                width: "200px",
                height: "40px",
                color:"white",
                backgroundColor: "black",
                fontSize: "1rem",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "600",
                border: "none",
                borderRadius: "32px",
                textAlign: "center"
            }}>Click me</button>
           
        </div>
        {isClicked && <LoginForm  onClose={setIsClicked}/>}
    </div>
}