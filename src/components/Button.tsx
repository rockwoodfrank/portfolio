import React from "react"

/*
Consistent Button Component
*/
export default function Button({children, link}: {children: React.ReactNode, link: string}): React.JSX.Element
{
    return (
        <a href={link} className="bg-cyan-900 hover:bg-cyan-600 transition duration-150 font-bold text-white p-3 rounded">{children}</a>
    )
}