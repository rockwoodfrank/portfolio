import * as React from "react"

/*
    Display tags for a project. May later allow links to view relevant projects
*/
export default function TagsDisplay({tags}: {tags: string[]}): React.JSX.Element
{
    return (
        <p><strong>Tags: </strong>{tags.join(", ")}</p>
    )
}