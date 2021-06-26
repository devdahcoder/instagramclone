import React, {useState} from 'react'
import "./assets/style/index.css"
import "../../styles/global.css"
import Search from "../Header/assets/images/search.svg"
import ChatFriendList from "../ChatFriendList/ChatFriendList" 
import ChatFriendListDisplay from "../ChatFriendListDisplay/ChatFriendListDisplay" 
import Plus from "./assets/images/button.svg"
import Photo from "./assets/images/instagram.svg"
import Smile from "./assets/images/smile.svg"
import Gif from "./assets/images/gif.svg"
import Arrow from "./assets/images/leftdirect.svg"
import Reply from "./assets/images/reply.svg"
import Align from "./assets/images/align.svg"
import Header from "../Header/Header";
import ChatListHeader from "../ChatListHeader/ChatListHeader"
import ProfileImage from "../ProfileImage/ProfileImage" 




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
                            <div className="message-container">
                                <div className="a">
                                    <div className="b">



                                    
                                        <div className="c">
                                            <div className="dele">
                                                <div className="inner">











                                                    <div className="inner-chat-container">
                                                        <div class="JI_ht                                                                      ">
                                                            <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                            
                                                            </div>
                                                        </div>



                                                        <div className="inner-chat" role="listbox" tabindex="0">
                                                            <div>
                                                                <div className="bolu">
                                                                    <div className="kari" role="listbox" tabindex="0">
                                                                        <div style={{display: "none"}}>
                                                                            <div className="kari-btn-container">
                                                                                <button>
                                                                                    <div className="svg-container">
                                                                                        <img height="16px" src={Align} alt=""/>
                                                                                    </div>
                                                                                </button>
                                                                            </div>
                                                                            <div className="kari-btn-container">
                                                                                <button>
                                                                                    <div className="svg-container">
                                                                                        <img height="16px" src={Reply} alt=""/>
                                                                                    </div>
                                                                                </button>
                                                                            </div>
                                                                            <div className="kari-btn-container">
                                                                                <button>
                                                                                    <div className="svg-container">
                                                                                        <img height="16px" src={Smile} alt=""/>
                                                                                    </div>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="kunle">
                                                                            <div className="samuel">
                                                                                <div role="button" className="hassan" tabindex="-1">
                                                                                    <div className="collins" style={{minHeight: "44px"}}>
                                                                                        <div className="ola">
                                                                                            <span>Fine fine bro and yours</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>









                                        {/* text-area container */}
                                        <div className="text-container">
                                            <div className="text-a">
                                                <div className="profile-img">
                                                    <ProfileImage />
                                                </div>
                                                <div className="d">
                                                    <div className="chat-btn-container">
                                                        <button>
                                                            <div className="svg-container">
                                                                <img height="24" width="24" src={Photo} alt=""/>
                                                            </div>
                                                        </button>
                                                    </div>

                                                    <div className="message-text-area-container">
                                                        <textarea className="textarea" placeholder="Messages..." name="" id="" ></textarea>
                                                    </div>

                                                    <div className="chat-btn-container">
                                                        <button>
                                                            <div className="svg-container">
                                                                <img height="24" src={Smile} alt=""/>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="chat-btn-container">
                                                        <button>
                                                            <div className="svg-container">
                                                                <img height="24" src={Gif} alt=""/>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="chat-btn-container">
                                                        <button>
                                                            <div className="svg-container">
                                                                <svg aria-label="Add Photo or Video" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M38.5 0h-29C4.3 0 0 4.3 0 9.5v29C0 43.7 4.3 48 9.5 48h29c5.2 0 9.5-4.3 9.5-9.5v-29C48 4.3 43.7 0 38.5 0zM45 38.5c0 3.6-2.9 6.5-6.5 6.5h-29c-3.3 0-6-2.5-6.4-5.6l8.3-8.3c.1-.1.3-.2.4-.2.1 0 .2 0 .4.2l6.3 6.3c1.4 1.4 3.6 1.4 5 0L35.9 25c.2-.2.6-.2.8 0l8.3 8.3v5.2zm0-9.4l-6.2-6.2c-1.3-1.3-3.7-1.3-5 0L21.3 35.3c-.1.1-.3.2-.4.2-.1 0-.2 0-.4-.2L14.2 29c-1.3-1.3-3.7-1.3-5 0L3 35.2V9.5C3 5.9 5.9 3 9.5 3h29C42.1 3 45 5.9 45 9.5v19.6zM11.8 8.2c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"></path></svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="chat-btn-container">
                                                        <button class="wpO6b " type="button">
                                                            <div class="QBdPU ">
                                                                <svg aria-label="Like" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                                                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end of text-area */}









                                    </div>
                                </div>
                            </div>
                            {/* end of main messages section */}


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
