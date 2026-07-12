import React from "react";
import "../styles/post-preview.css"

import postPreview from "../images/laser.jpeg"

export default function PostPreview({title, link})
{
    return (
        <div className="post-preview">
            <img src={postPreview} alt="" />
            <h2 className="post-heading">
                {title}
            </h2>
            <a href={link}>View</a>
        </div>
    )
}