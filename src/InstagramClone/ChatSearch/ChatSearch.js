import React from 'react'
import "./assets/style/index.css"
const ChatSearch = () => {
    return (
        <div className="chat-header-search">
            <input className="chat-header-input" type="text" name="search" id="search"/>
            <div className="input-content"><p>search</p></div>
        </div>
    )
}

export default ChatSearch
