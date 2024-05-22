import { useState } from "react"
import { QRCode } from "react-qrcode"

export const GenerateQr = () => {
    const [value, setValue] = useState("")
    const [qrCode, setQrCode] = useState(null)
    
    const getQrCode = ()=>{
         return <QRCode id ="qr-code-1" value={value} size={400} bgColor ="#fffff"></QRCode>
    }

    return <div className="main-container">
        <div className="content">
            <div className="input-area">

                <input onChange={(e)=>{
                 setValue(e.target.value)
                }} placeholder="Enter your String here"></input>

                <button onClick={()=>{setQrCode(getQrCode)}}>Generate Qr Code</button>
            </div>

              <div>{qrCode}</div>
            
        </div>
    </div>
}