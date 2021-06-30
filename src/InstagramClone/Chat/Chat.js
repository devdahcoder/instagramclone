import React, {useState} from 'react'
import "./assets/style/index.css"
import "../../styles/global.css"
import ChatFriendListDisplay from "../ChatFriendListDisplay/ChatFriendListDisplay" 
import Header from "../Header/Header";
import ChatListHeader from "../ChatListHeader/ChatListHeader"
import MainChat from "../MainChat/MainChat"



const Chat = () => {

    const [vanish, setVanish] = useState("false")


    return (
        <div className="global-section main-chat-section">
            <div className="chat-container">
                <Header />

                
                <div className="chat-chat">
                    <div className="chat-div">


                        <div className="user-chat">
                            {/* chat friend list container */}
                            <div className="chat-friends-container">

                                <ChatListHeader />

                                {/* chat friend list main messages list */}
                                <div className="people-chat-container">
                                    <div className="people-chat-div">
                                        <div className="people-chat">
                                            <div className="classs">
                                                <div className="chat-id">

                                                    {/* chat messages request */}
                                                    <div className="message-request-container">
                                                        <div className="message-text">
                                                            <p>Messages</p>
                                                        </div>

                                                        <button>
                                                            <p>1 Request</p>
                                                        </button>
                                                    </div>
                                                    {/* end of message request */}

                                                    {/* <ChatFriendList /> */}
                                                    <ChatFriendListDisplay />
                                                    
                                                    {/* end of chat friend list */}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of chat friend list main messages list */}
                            </div>
                            {/* end of chat list container */}






                            {/* main messages section */}
                            
                            {/* end of main messages section */}
                            <MainChat />

                            {/* chat side bar for easy navigation to post content */}

                            {/* <div className="chat-side-bar">

                                <div className="side-btn-container" style={{marginTop: "auto"}}>
                                    <button>
                                        <div className="svg-container">
                                            <img height="34" src={Plus} alt="" />
                                        </div>
                                    </button>
                                </div>
                                
                            </div> */}

                            {/* enf of post navigation */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Chat
