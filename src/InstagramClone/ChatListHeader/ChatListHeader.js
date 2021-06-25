import React from 'react';
import "./style/chatlistheader.css"

const ChatListHeader = () => {
    return (
        <div className="friends-header-container">
            <div className="friends-header ">
                <div className="svg-button-container">
                    <button className="svg-button" type="button">
                        <div className="svg-container ">
                            <svg height="22" width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11-9-20-20-20 -11 0-20 9-20 20v216H20c-11 0-20 9-20 20s9 20 20 20h216v216c0 11 9 20 20 20s20-9 20-20V276h216c11 0 20-9 20-20C512 245 503 236 492 236z"/></svg>
                        </div>
                    </button>
                </div>

                <div className="header-font">Direct</div>


                <div className="svg-button-container">
                    <button class="svg-button" type="button">
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

            <div className="friend-list-search-container">
                <input autocapitalize="none" className="header-search-input" placeholder="Search" type="text" value="" />

                <div className="unfocused-search-container" role="button" tabindex="0">
                    <div className="unfocused-search-display">
                        <span className="unfocused-search-icon coreSpriteSearchIcon"></span>
                        <span className="unfocused-search-placeholder">Search</span>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default ChatListHeader
