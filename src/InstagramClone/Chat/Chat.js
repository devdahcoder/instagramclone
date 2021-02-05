import React from 'react'
import "./assets/style/index.css"
import ChatHeader from "../ChatHeader/ChatHeader"
import ChatSearch from "../ChatSearch/ChatSearch"
import ChatAlert from "../ChatAlert/ChatAlert"
import Friend from "../Friend/Friend"
const Chat = ({posts}) => {
    return (
        <section className="main-chat-section">
            <div className="friend-list">
                <div className="friend-list-display">
                    <div className="friend-list-ul">
                        <div className="friend-li">
                            <div className="">
                                <ChatHeader />
                                <ChatSearch />
                                <ChatAlert />
                            </div>

                            <Friend posts={posts} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat-area">
                
            </div>
        </section>
    )
}

export default Chat
