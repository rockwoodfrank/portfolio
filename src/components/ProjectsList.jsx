import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import PostPreview from "../components/PostPreview";

export default function ProjectsList()
{
    // Access all mdx posts to get information
    const data = useStaticQuery(graphql`
         query {
            allMdx {
                nodes {
                id
                frontmatter {
                    title
                    date
                    slug
                    cover
                    tags
                }
                internal {
                    contentFilePath
                }
                }
            }
            allFile(
                filter: {
                    sourceInstanceName: { eq: "media" }
                    extension: { regex: "/(jpg|jpeg|png)/" }
                }
                ) {
                nodes {
                    relativePath
                    publicURL
                }
            }
        }
    `)

    // Direct access
    let posts = data.allMdx.nodes
    let images = data.allFile.nodes

    return (
        <div id = "projects-list" className="flex w-full flex-wrap justify-around">
        {posts.map(post => {
            // Find the image
            let coverImage = images.find(image => post.frontmatter.cover === image.relativePath)
            
            return (
            <PostPreview 
                title={post.frontmatter.title}
                link={`/${post.frontmatter.slug}`}
                image={coverImage ? coverImage.publicURL : ""}
            />
            )
        })}
        </div>
    )
}