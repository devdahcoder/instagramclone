import React from 'react';
import "./style/chatfriendlist.css";
import "../../styles/global.css"
import ProfileImage from "../ProfileImage/ProfileImage" 



const ChatFriendList = ({friendList}) => {
    return (
        <div className="followers-chat-container">
            <a href="">
                <div className="followers-chat">
                    <div style={{marginRight: "10px"}}>
                        <ProfileImage profile={friendList.picture.medium}  size={"56px"} />
                    </div>
                    
                    <div className="chat-user-details">
                        <div className="chat-user-profile-name-container">
                            <div className="chat-user-profile-name-display">
                                <div className="chat-user-profile-name">
                                    <p>{friendList.login.username}</p>
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
                                    <time className="last-message-time" datetime="2020-11-20T12:58:37.381Z" title="Nov 20, 2020">12w</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="svg-button-container followers-btn-container">
                        <button className="svg-button" type="button">
                            <div className="svg-container ">
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path d="M437.3 117.3h-64c-4.6 0-8.7-2.9-10.1-7.3l-6.7-20.2c-7.3-21.8-27.6-36.5-50.6-36.5h-99.8c-23 0-43.3 14.7-50.6 36.5l-6.7 20.2c-1.5 4.4-5.5 7.3-10.1 7.3h-64C33.5 117.3 0 150.8 0 192v192c0 41.2 33.5 74.7 74.7 74.7h362.7C478.5 458.7 512 425.2 512 384V192C512 150.8 478.5 117.3 437.3 117.3zM490.7 384c0 29.4-23.9 53.3-53.3 53.3H74.7c-29.4 0-53.3-23.9-53.3-53.3V192c0-29.4 23.9-53.3 53.3-53.3h64c13.8 0 26-8.8 30.4-21.9l6.8-20.3c4.4-13.1 16.6-21.9 30.3-21.9h99.8c13.8 0 26 8.8 30.4 21.9l6.7 20.2c4.4 13.1 16.6 21.9 30.4 21.9h64c29.4 0 53.3 23.9 53.3 53.3V384z"/><path d="M256 160c-70.6 0-128 57.4-128 128s57.4 128 128 128 128-57.4 128-128S326.6 160 256 160zM256 394.7c-58.8 0-106.7-47.9-106.7-106.7 0-58.8 47.9-106.7 106.7-106.7S362.7 229.2 362.7 288C362.7 346.8 314.8 394.7 256 394.7z"/><path d="M256 202.7c-47.1 0-85.3 38.3-85.3 85.3 0 5.9 4.8 10.7 10.7 10.7S192 293.9 192 288c0-35.3 28.7-64 64-64 5.9 0 10.7-4.8 10.7-10.7S261.9 202.7 256 202.7z"/></svg>
                                {/* <svg id="Icons" height="30" viewBox="0 0 74 74" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m23.5 63.5h-2.94a1 1 0 0 1 0-2h2.94a1 1 0 0 1 0 2z"/><path d="m66 63.5h-25.56a1 1 0 0 1 0-2h25.56a4 4 0 0 0 4-4v-35a4 4 0 0 0 -4-4h-15.26a2.011 2.011 0 0 1 -1.834-1.193l-1.824-4.207a.994.994 0 0 0 -.912-.6h-18.34a.991.991 0 0 0 -.909.591l-1.821 4.209a2.014 2.014 0 0 1 -1.838 1.2h-15.262a4 4 0 0 0 -4 4v35a4 4 0 0 0 4 4h5.56a1 1 0 1 1 0 2h-5.56a6.006 6.006 0 0 1 -6-6v-35a6.006 6.006 0 0 1 6-6h15.26l1.822-4.2a2.975 2.975 0 0 1 2.748-1.8h18.34a2.977 2.977 0 0 1 2.751 1.81l1.817 4.19h15.262a6.006 6.006 0 0 1 6 6v35a6.006 6.006 0 0 1 -6 6z"/><path d="m33.44 63.5h-2.94a1 1 0 0 1 0-2h2.94a1 1 0 0 1 0 2z"/><path d="m18.219 18.5h-7.667a1 1 0 0 1 -1-1v-5.307a1.7 1.7 0 0 1 1.693-1.693h6.281a1.694 1.694 0 0 1 1.693 1.693v5.307a1 1 0 0 1 -1 1zm-6.667-2h5.667v-4h-5.667z"/><path d="m34 55.562a16.312 16.312 0 1 1 16.312-16.312 16.33 16.33 0 0 1 -16.312 16.312zm0-30.624a14.312 14.312 0 1 0 14.312 14.312 14.328 14.328 0 0 0 -14.312-14.312z"/><path d="m34 49.179a9.929 9.929 0 1 1 9.929-9.929 9.94 9.94 0 0 1 -9.929 9.929zm0-17.858a7.929 7.929 0 1 0 7.929 7.929 7.938 7.938 0 0 0 -7.929-7.929z"/><path d="m63.156 30h-8.312a1.846 1.846 0 0 1 -1.844-1.844v-4a1.846 1.846 0 0 1 1.844-1.844h8.312a1.846 1.846 0 0 1 1.844 1.844v4a1.846 1.846 0 0 1 -1.844 1.844zm-8.156-2h8v-3.688h-8z"/></svg> */}
                            </div>
                        </button>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ChatFriendList
