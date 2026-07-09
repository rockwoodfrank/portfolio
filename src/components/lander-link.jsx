import React from "react";

export default function LanderLink({text, link})
{
    return (
        <p><a href={link} style={{color: "#007400"}}>{text} ➔</a></p>
    )
}