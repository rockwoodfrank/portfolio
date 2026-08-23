import React from "react"

export default function Header()
{
    return (
        <>
            <header className="flex justify-center h-20 bg-linear-to-r from-cyan-900 from-50% to-amber-600 to-50%">
                <div className="w-full max-w-250 mx-10 flex items-center bg-cyan-900">
                    <a className="font-bold text-3xl text-white" href="/">Rockwood Frank</a>
                </div>
            </header>
            
        </>
   
    )
}