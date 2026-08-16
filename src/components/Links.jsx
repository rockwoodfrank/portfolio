import React from "react"
import "../styles/links.css"

export default function Links({})
{
    return (
        <nav>
            {/* The hamburger menu */}
            <label for='menu' tabindex="0">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 12L20 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 6L20 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </label>
            <input id='menu' type='checkbox' />
            {/* The collapsable menu */}
            <ul id = "links">
                <li><a href="index.html">Home</a></li>
                <li><a href="familytree.html">Family Tree</a></li>
                <li><a href="creed.html">Values</a></li>
                <li><a href="members.html">Members</a></li>
                <li><a href="history.html">History</a></li>
                <li><a href="photos.html">Photos</a></li>
                <li><a href="resources.html">Resources</a></li>
            </ul>
        </nav>
    )
}