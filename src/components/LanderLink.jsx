import React from "react";

export default function LanderLink({text, link, fade_delay, style})
{
    return (
        <p 
            data-aos="fade-up" 
            data-aos-delay={fade_delay} 
            data-aos-duration="100"
            style={style}
        >
            <a href={link} style={{color: "#007400"}}>{text} ➔</a>
        </p>
    )
}