import React from 'react'
import "./style/mainmessage.css"
import MessageSent from "../MessageSent/MessageSent"


const MainMessage = () => {
    return (
        <div className="c">
            <div className="dele">
                <div className="inner">
                    <MessageSent />

                </div>
            </div>
        </div>
    )
}

export default MainMessage
