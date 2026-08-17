import React from "react";
import "../styles/post-preview.css"

export default function PostPreview({title, link, image})
{
    return (
        <div className="post-preview">
            <img src={image} alt="" />
            <h2 className="post-heading">
                {title}
            </h2>
            <a href={link}>View</a>
        </div>
    )
}