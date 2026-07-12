import React from "react";
import '../styles/position.css'

export default function Position({image, title, texts})
{
    return(
        <div className="position">
            <img src={image} alt="" />
            <p><strong>{title}</strong></p>
            {texts.map(text => 
                <p>{text}</p>
            )}
        </div>
    )
}