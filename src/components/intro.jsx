import React from "react";
import "../styles/intro.css"
import '../styles/fonts.css'
import PostPreview from "./post-preview";

export default function Intro()
{
    return (
        <div id = "intro" >
            <h1 data-aos="fade-up">My Projects</h1>
            <div className="posts-container" data-aos="fade-up">
                <PostPreview 
                    title={"Undergraduate Thesis: Digital Laser Control Systems For Neutral Atom Trapping"} 
                    link={""}
                />
            </div>
        </div>
    )
}