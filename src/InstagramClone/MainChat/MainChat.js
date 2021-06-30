import React from 'react'
import "./style/mainchat.css"
import ChatTextArea from '../ChatTextArea/ChatTextArea'
import MainMessage from "../MainMessage/MainMessage"

const MainChat = () => {
    return (
        <div className="message-container">
            <div className="a">
                <div className="b">
                    

                    <MainMessage />









                    {/* text-area container */}
                    <ChatTextArea />
                    {/* end of text-area */}









                </div>
            </div>
        </div>
    )
}

export default MainChat
