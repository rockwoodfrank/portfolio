import React from "react";
import Button from "./Button";

export default function PostPreview({title, link, image} : {title: string, link: string, image: string}): React.JSX.Element
{
    return (
        <div className="w-100 bg-gray-200 p-10 rounded-lg flex flex-col justify-between items-start my-3">
            <img src={image} alt="" className="w-full h-50 object-cover rounded-md"/>
            <h2 className="post-heading">
                {title}
            </h2>
            <Button link={link}>View</Button>
        </div>
    )
}