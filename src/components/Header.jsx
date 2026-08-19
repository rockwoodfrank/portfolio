import React from "react"
import { colors } from "../standards"
import "../styles/header.css"

const headerStyle = {
    display: "grid",
    gridTemplateColumns: "auto 20px 20vw",
    backgroundColor: "white",
}

const headerSections = [
    {
        backgroundColor: colors.primary,
        padding: "20px 40px",
        color: "white",
        // fontWeight: "bold",
        // fontSize: "24px"
    },
    {
        backgroundColor: colors.secondary,
        padding: "10px",
    }
]

const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
}

export default function Header()
{
    return (
        <header style={headerStyle}>
            <div style={headerSections[0]}>
                <a style={titleStyle} href="/">Rockwood Frank</a>
            </div>
            {/* Whitespace */}
            <div></div>
            <div style={headerSections[1]}></div>
        </header>
    )
}