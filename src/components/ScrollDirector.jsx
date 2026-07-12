import React from "react"
import "../styles/ScrollDirector.css"

export default function ScrollDirector({scrollFunctions, scrollY})
{
    // Maximum offset of down arrows
    let offset = scrollY < 500 ? (scrollY * 0.02) + "vh" : "1vh"

    let scrollFunction =  scrollY < 500 ? scrollFunctions[0] : scrollFunctions[1]

    return (
        <div className="toscroll" onClick={scrollFunction} style={{marginTop: offset}}>
            <p>⏷</p>
            <p>⏷</p>
            <p>⏷</p>
        </div>
    )
}