import React from "react"
import "./assets/styles/index.css"
import Facebook from "./assets/images/facebook.svg"

const FaceBookButton = () => {
    return (
        <div className="facebook-auth">
            <button><span><img src={Facebook} alt=""/></span>Log In with facebook</button>
        </div>
    )
}

export default FaceBookButton
