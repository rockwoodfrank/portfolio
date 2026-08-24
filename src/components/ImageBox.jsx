import * as React from "react"

/*
    Function for image placed on a post that is centered,
    and has a max width of 80% of full. May include a caption.
*/
export default function ImageBox({src, alt})
{
    return (
        <div className="flex flex-col w-full items-center">
            <img src={src} alt={alt} className="max-w-8/10"/>
            <p className="italic text-center">{alt}</p>
        </div>
    )
}