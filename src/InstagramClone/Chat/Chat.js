import React from 'react'
import "./assets/style/index.css"
import ChatHeader from "../ChatHeader/ChatHeader"
import ChatSearch from "../ChatSearch/ChatSearch"
import ChatAlert from "../ChatAlert/ChatAlert"
import Friend from "../Friend/Friend"
import Search from "../Header/assets/images/search.svg"
import ProfileImage from "../ProfileImage/ProfileImage" 
const Chat = ({posts}) => {
    return (
        <section className="main-chat-section">
            <div className="chat-container">
                <div className="chat-div">
                    <div className="chat-friends-container">



                        <div className="friends-header-container">
                            <div className="friends-header ">
                                <div class="friends-header-btn-container">
                                    <button class="wpO6b ZQScA" type="button">
                                        <div class="svg-container ">
                                            <svg id="Layer" enable-background="new 0 0 64 64" height="24" viewBox="0 0 64 64" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="header-font">Direct</div>
                                <div className="friends-header-btn-container">
                                    <button class="wpO6b ZQScA" type="button">
                                        <div class="svg-container">
                                            <svg aria-label="New Message" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 44 44" width="24">
                                                <path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path>
                                                <path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path>
                                                <path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div className="search-container">
                            <form action="">
                                <div className="form-display">
                                    <label className="form-display">
                                        <input type="text" name="" id="" />
                                        <span><img style={{height: "10px"}} src={Search} alt=""/> Search</span>
                                    </label>
                                </div>
                            </form>
                        </div>




                        <div className="people-chat-container">
                            <div className="people-chat-div">
                                <div className="people-chat">
                                    <div className="classs">

                                        <div className="message-request-container">
                                            <div className="message-text">
                                                <p>Messages</p>
                                            </div>

                                            <button>
                                                <p>1 Request</p>
                                            </button>
                                        </div>


                                        <div className="followers-chat-container">
                                            <a href="">
                                                <div className="followers-chat">
                                                    <div style={{marginRight: "10px"}}>
                                                        <ProfileImage  size={"56px"} />
                                                    </div>
                                                    
                                                    <div className="chat-user-details">
                                                        <div className="chat-user-profile-name-container">
                                                            <div className="chat-user-profile-name-display">
                                                                <div className="chat-user-profile-name">
                                                                    <p>Stephencurry30</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="active-container">
                                                            <div className="active-display">
                                                                <div className="active">
                                                                    <span className="last-message-or-active">
                                                                        <p>Hey Bode i'm pregnant</p>
                                                                    </span>
                                                                    <span className="spot">.</span>
                                                                    <time class="last-message-time" datetime="2020-11-20T12:58:37.381Z" title="Nov 20, 2020">12w</time>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="followers-btn-container">
                                                        <button class="wpO6b ZQScA" type="button">
                                                            <div class="svg-container ">
                                                                <svg id="Icons" height="30" viewBox="0 0 74 74" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m23.5 63.5h-2.94a1 1 0 0 1 0-2h2.94a1 1 0 0 1 0 2z"/><path d="m66 63.5h-25.56a1 1 0 0 1 0-2h25.56a4 4 0 0 0 4-4v-35a4 4 0 0 0 -4-4h-15.26a2.011 2.011 0 0 1 -1.834-1.193l-1.824-4.207a.994.994 0 0 0 -.912-.6h-18.34a.991.991 0 0 0 -.909.591l-1.821 4.209a2.014 2.014 0 0 1 -1.838 1.2h-15.262a4 4 0 0 0 -4 4v35a4 4 0 0 0 4 4h5.56a1 1 0 1 1 0 2h-5.56a6.006 6.006 0 0 1 -6-6v-35a6.006 6.006 0 0 1 6-6h15.26l1.822-4.2a2.975 2.975 0 0 1 2.748-1.8h18.34a2.977 2.977 0 0 1 2.751 1.81l1.817 4.19h15.262a6.006 6.006 0 0 1 6 6v35a6.006 6.006 0 0 1 -6 6z"/><path d="m33.44 63.5h-2.94a1 1 0 0 1 0-2h2.94a1 1 0 0 1 0 2z"/><path d="m18.219 18.5h-7.667a1 1 0 0 1 -1-1v-5.307a1.7 1.7 0 0 1 1.693-1.693h6.281a1.694 1.694 0 0 1 1.693 1.693v5.307a1 1 0 0 1 -1 1zm-6.667-2h5.667v-4h-5.667z"/><path d="m34 55.562a16.312 16.312 0 1 1 16.312-16.312 16.33 16.33 0 0 1 -16.312 16.312zm0-30.624a14.312 14.312 0 1 0 14.312 14.312 14.328 14.328 0 0 0 -14.312-14.312z"/><path d="m34 49.179a9.929 9.929 0 1 1 9.929-9.929 9.94 9.94 0 0 1 -9.929 9.929zm0-17.858a7.929 7.929 0 1 0 7.929 7.929 7.938 7.938 0 0 0 -7.929-7.929z"/><path d="m63.156 30h-8.312a1.846 1.846 0 0 1 -1.844-1.844v-4a1.846 1.846 0 0 1 1.844-1.844h8.312a1.846 1.846 0 0 1 1.844 1.844v4a1.846 1.846 0 0 1 -1.844 1.844zm-8.156-2h8v-3.688h-8z"/></svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Chat
