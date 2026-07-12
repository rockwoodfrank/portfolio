import React from "react"
import "../styles/ScrollDirector.css"

export default function ScrollDirector({scrollFunction})
{
    return (
        <div className="toscroll" onClick={scrollFunction}>
            <p>⏷</p>
            <p>⏷</p>
            <p>⏷</p>
        </div>
    )
}