import React from "react"

import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import { useGSAP } from "@gsap/react"

gsap.registerPlugin(MorphSVGPlugin, useGSAP);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(DrawSVGPlugin);


/*
    Boilerplate frame for gsap animation
*/
export default function GSAPframe({})
{
    useGSAP(() => {

    })

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
                <defs>
                </defs>
                
            </svg>
        </div>
    )
}