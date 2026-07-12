import React from "react";

export default function LanderLink({text, link, fade_delay})
{
    return (
        <p data-aos="fade-up" data-aos-delay={fade_delay}><a href={link} style={{color: "#007400"}}>{text} ➔</a></p>
    )
}