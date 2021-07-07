import React from 'react'
import "./style/likedby.css"

const LikedBy = () => {
    return (
        <section className="post--liked--by--container">
            <div className="post--liked--by--display">
                <div className="post--liked--by">
                    Liked by {""}
                    <span className="post--liked--by--span">
                        <a className="post--liked--by--span--link" title="monrenikeike" href="/monrenikeike/" tabindex="0">monrenikeike</a>
                    </span> and {""}
                    <a className="post--liked--by--other--link" href="/p/CQ_2tR8nypO/liked_by/" tabindex="0">others</a>
                </div>
            </div>
        </section>
    )
}

export default LikedBy
