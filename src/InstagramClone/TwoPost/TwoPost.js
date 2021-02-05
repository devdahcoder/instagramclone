import React from 'react'
import "./assets/style/index.css"
import TwoPostDisplay from "../TwoPostDisplay/TwoPostDisplay";
const TwoPost = ({posts}) => {
    return (
        <div>
            <TwoPostDisplay posts={posts} />
        </div>
    )
}

export default TwoPost