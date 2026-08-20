// src/components/mdx-layout.jsx
import * as React from "react"

import "../styles/layout.css"
import Footer from "./Footer";
import Header from "./Header";

export default function MdxLayout({ children, pageContext, coverImage }) {
    // console.log(pageContext.frontmatter.tags);
    
    return (
    <>
        <Header />
        <main>
            <div id="container">
                <img src={coverImage} alt="" className="post-banner"/>
                <h1>{pageContext.frontmatter.title}</h1>
                <p><strong>Date of Project Completion:</strong> {pageContext.frontmatter.date}</p>
                <p></p>
                {children}
            </div>
        </main>
        <Footer />
    </>
    )
}
