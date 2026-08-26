import React from "react"
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import { useGSAP } from "@gsap/react"

gsap.registerPlugin(MorphSVGPlugin, useGSAP);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(DrawSVGPlugin);


export default function Animation1({})
{
    // Travel paths
    const travelPaths = [
        "M93.9663 115.771C100.966 119.271 115.466 127.971 117.466 134.771C119.966 143.271 90.9663 157.271 93.9663 169.771C96.9663 182.271 124.966 228.771 124.966 260.271C124.966 286.271 134.445 388.82 88.9663 419.771C52.9663 444.271 47.4663 445.771 20.9663 453.271",
        "M98.5 114.5C116.667 131.5 159.8 177.8 187 227C214.2 276.2 279 409.167 308 469.5",
        "M121 115.5C127.667 120.167 147.2 131.5 172 139.5C196.8 147.5 235.667 187.167 252 206L469 451.5",
        "M119.5 115.5C123.333 118.833 136.8 127.8 160 137C189 148.5 202.492 143 218 143C240.5 143 249.5 146.5 308 182C360 212.8 458.333 235.167 501 242.5C598.033 268.5 683.5 183 725.5 139"
    ]
    useGSAP(() => {
        MorphSVGPlugin.convertToPath("circle");

        travelPaths.forEach((path, i) => {
            gsap.timeline({
                repeat: 20,
                yoyo: false,
                delay: i,
                defaults: { ease: "power1.inOut" }
            }).to(`#traveler-${i}`, {
                duration: 5,
                motionPath:{
                    path: `#travel-path-${i}`,
                    align: `#travel-path-${i}`,
                    autoRotate: true,
                    alignOrigin: [0.5, 0.5]
                }
            }).fromTo(`#travel-path-${i}`, 
                {
                    drawSVG: "0%"
                },
                {
                    drawSVG: "100%",
                    duration: 5,
                }, 0)
        })

    })
    return (
        <>
            <div className="bg-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
                    <defs>
                    </defs>
                    {/* Pavement */}
                    <path d="M467.124 147.628L97.6241 296.628L76.1003 166.84L233.258 103.345L467.124 147.628Z" fill="#373737"/>
                    {/* Lines */}
                    <path d="M97.8863 296.576L166.498 268.855M513.911 154.376L69.1149 353.499M166.498 268.855L113.041 168.579M166.498 268.855L245.772 236.826M245.772 236.826L157.546 150.597M245.772 236.826L305.112 212.851M305.112 212.851L223.282 150.462M305.112 212.851L365.842 188.315M365.842 188.315L465.515 148.044L232.128 104.286M365.842 188.315L253.415 138.288L171.22 131.052L148.813 122.309" stroke="white" stroke-width="4"/>
                    {travelPaths.map((travelPath, i) => 
                        <>
                            <path id={`travel-path-${i}`} d={travelPath} fill="none" stroke="#00FF44" stroke-width="4"/>
                            <circle id={`traveler-${i}`} cx="-10" cy="-10" r="5" fill="#FF0000"/>
                        </>
                        
                    )}
                </svg>
            </div>
        </>
    )
}