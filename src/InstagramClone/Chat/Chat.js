import React, {useState} from 'react'
import "./assets/style/index.css"
import ChatHeader from "../ChatHeader/ChatHeader"
import ChatSearch from "../ChatSearch/ChatSearch"
import ChatAlert from "../ChatAlert/ChatAlert"
import Friend from "../Friend/Friend"
import Search from "../Header/assets/images/search.svg"
import ProfileImage from "../ProfileImage/ProfileImage" 
import Plus from "./assets/images/button.svg"
import Photo from "./assets/images/instagram.svg"
import Smile from "./assets/images/smile.svg"
import Gif from "./assets/images/gif.svg"
import Gallery from "./assets/images/gallery.svg"
import Option from "./assets/images/options-lines.svg"
import Arrow from "./assets/images/leftdirect.svg"

const Chat = ({posts}) => {

    const [vanish, setVanish] = useState("false")
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
                                            <img height="24" width="24" src={Arrow} alt=""/>
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
                                        <input onFocus={() => setVanish("true")} type="text" name="" id="" />
                                        <span style={{display: vanish === "true" ? "none": ""}}><img style={{height: "10px"}} src={Search} alt=""/> Search</span>
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

                                                        <div className="padding-div"></div>

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

                                                        <div className="padding-div"></div>

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

                                                        <div className="padding-div"></div>

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

                                                        <div className="padding-div"></div>

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

                                                        <div className="padding-div"></div>

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

                                                        <div className="padding-div"></div>

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

                                                        <div className="padding-div"></div>

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

                                                        <div className="padding-div"></div>

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

                                                        <div className="padding-div"></div>

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
                                                                <div>
                                                                    <button>
                                                                        <div>
                                                                            <img height="10px" src={Option} alt=""/>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                                <div>
                                                                    <button>
                                                                        <div>
                                                                            <img height="10px" src={Option} alt=""/>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                                <div>
                                                                    <button>
                                                                        <div>
                                                                            <img height="10px" src={Option} alt=""/>
                                                                        </div>
                                                                    </button>
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            {/* <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            <div class="">
                                                <div class="JI_ht                                                                      ">
                                                    <div class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              " style={{height: "24px", width: "24px"}}>
                                                    
                                                    </div>
                                                </div>
                                                <div class="DMBLb" role="listbox" tabindex="0">
                                                    <div>
                                                        <div class="VdURK e9_tN JRTzd">
                                                            <div class="PaBnr  eFVJg" role="listbox" tabindex="0">
                                                                <div class="iXTil  ">
                                                                    <div class="  _6FEQj CMoMH    RQUXn _8_yLp  ">
                                                                        <div role="button" class="ZyFrc" tabindex="-1">
                                                                            <div class="                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               " style={{minHeight: "44px"}}>
                                                                                <div class="_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB">
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
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </div>















                    <div className="chat-side-bar">

                        <div className="side-btn-container" style={{marginTop: "auto"}}>
                            <button>
                                <div className="svg-container">
                                    <img height="34" src={Plus} alt=""/>
                                </div>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Chat
