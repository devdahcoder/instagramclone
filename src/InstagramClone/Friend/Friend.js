import React from 'react'
import "./assets/style/index.css"
import FriendDisplay from "../FriendDisplay/FriendDisplay"
const Friend = ({posts}) => {
    return (
        <div className="friend">
            <FriendDisplay posts={posts} />
        </div>
    )
}

export default Friend
