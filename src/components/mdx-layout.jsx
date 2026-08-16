// src/components/mdx-layout.jsx
import * as React from "react"

import "../styles/layout.css"
import { graphql } from "gatsby"
import Footer from "./Footer";
import Header from "./Header";

import postPreview from "../../media/robotarm/robotarm.jpg"

export default function MdxLayout({ children, pageContext }) {
    return (
    <>
        <Header />
        <main>
            <div id="container">
                <img src={postPreview} alt="" className="post-banner"/>
                <h1>{pageContext.frontmatter.title}</h1>
                <p><strong>Date of Project Completion:</strong> {pageContext.frontmatter.date}</p>
                {children}
            </div>
        </main>
        <Footer />
    </>
    )
}
