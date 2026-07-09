import React from "react";
import "../styles/intro.css"
import '../styles/fonts.css'
import PostPreview from "./post-preview";

export default function Intro()
{
    return (
        <div id = "intro">
            <h1>My Projects</h1>
            <div className="posts-container">
                <PostPreview 
                    title={"Undergraduate Thesis: Digital Laser Control Systems For Neutral Atom Trapping"} 
                    link={""}
                />
            </div>
        </div>
    )
}