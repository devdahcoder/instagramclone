import React, {useState} from 'react';
import "./style/headersearch.css"


//imported components
import SearchInputButton from "../SearchInputButton/SearchInputButton"
import SearchInputIcon from "../SearchInputIcon/SearchInputIcon"


const HeaderSearch = () => {

    const [showInput, setShowInput] = useState(false);

    const toggleShowInput = () => {
        setShowInput(true)
    }


    return (
        <div>
            <div className="header-search-input-container" onClick={toggleShowInput}>
                <input autocapitalize="none" className="header-search-input" placeholder="Search" type="text" value="" />

                

                {
                    showInput && showInput ? <SearchInputIcon /> : <SearchInputButton />
                }

                

                
                {/* <div className="yPP5B">
                    <div aria-hidden="false" className="uo5MA  _2ciX tWgj8 XWrBI ">
                        <div className="AvhYw nLL4f"></div>
                        <div className="_01UL2">
                            <div className="fuqBx ">
                                <div className="_43CKF">
                                    <h4 className="_7UhW9    vy6Bb      qyrsm KV-D4          uL8Hv        T0kll ">Recent</h4>
                                </div>
                                <div className="lWmzy" data-testid="no-recent-results-section">
                                    <div className="_7UhW9   xLCgt       qyrsm  _0PwGv         uL8Hv     l4b0S    ">No recent searches.</div>
                                </div>
                            </div>
                        </div>
                        <div className="TOh1s"></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default HeaderSearch
