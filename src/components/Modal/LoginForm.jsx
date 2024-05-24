import { X } from 'lucide-react';

import "./login-styles.css"
import { useRef, useEffect } from 'react';

export const LoginForm = ({ onClose }) => {


    useEffect(()=>{
        console.log("Login Re-render")
      })


    const modalRef = useRef()


    const handleOnClose=(e)=>{
        modalRef.current == e.target && onClose(false)
    }

    return <div className="login-contanier" ref={modalRef} onClick={handleOnClose}>
        <div className="form-container">
            <div className="heading">
                <h3>Login</h3>
                <div className='cross-icon' onClick={()=>onClose(false)}>
                    <X/>
                    </div>
            </div>
            <div className="input-container">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
            <button> Login</button>
        </div>

    </div>
}