import React from 'react'
import "./another.css"

const AnotherTextArea = () => {
    return (
        <div tabindex="-1" className="another-text-area-container">
            <div tabindex="-1" className="another-text-area-display">
                {/* <div className="_2vbn4" >Type a message</div> */}
                <div className="another-text-area _13NKt copyable-text selectable-text" contenteditable="true" data-tab="6" dir="ltr" spellcheck="false">h</div>
            </div>
        </div>
    )
}

export default AnotherTextArea
