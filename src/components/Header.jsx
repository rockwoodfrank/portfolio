import React from "react"

export default function Header()
{
    return (
        <>
            <header className="flex justify-center bg-cyan-900 h-20">
                <div className="w-full max-w-250 mx-10 flex items-center">
                    <a className="font-bold text-3xl text-white" href="/">Rockwood Frank</a>
                </div>
                <div className="absolute top-0 right-0 w-40 h-20 bg-amber-600 border-l-25 border-white"/>
            </header>
            
        </>
   
    )
}