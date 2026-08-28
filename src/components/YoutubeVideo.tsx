import React from "react"

const containerStyle = {
    display: "flex",
    justifyContent: "center",
}

export default function YoutubeVideo(
    {link, orientation} : 
    {link: string, orientation: "vertical" | "horizontal"}
): React.JSX.Element
{
    let width = orientation === "vertical" ? 315 : 560;
    let height = orientation === "vertical" ? 560 : 315;

    return (
        <div className="video" style={containerStyle}>
            <iframe 
                width={width}
                height={height} 
                src={link}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
        </div>
        
    )
}