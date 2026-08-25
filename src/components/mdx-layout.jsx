// src/components/mdx-layout.jsx
import * as React from "react"

import "../styles/layout.css"
import Footer from "./Footer";
import Header from "./Header";
import NewTabLink from "./NewTabLink";
import TagsDisplay from "./TagsDisplay";

export default function MdxLayout({ children, pageContext, coverImage }) {
    // console.log(pageContext.frontmatter.tags);
    
    return (
    <>
        <Header />
        <main className="flex justify-center">
            <div id="container" className="max-w-250 mx-10">
                {/* Title */}
                <div>
                    <img src={coverImage} alt="" className="post-banner w-full"/>
                    <h1 className="py-2">{pageContext.frontmatter.title}</h1>
                    <p><strong>Date of Project Completion:</strong> {pageContext.frontmatter.date}</p>
                    <TagsDisplay tags={pageContext.frontmatter.tags} />
                    <p><NewTabLink href={pageContext.frontmatter.repository}>View Project</NewTabLink></p>
                </div>
                {children}
            </div>
        </main>
        <Footer />
    </>
    )
}
