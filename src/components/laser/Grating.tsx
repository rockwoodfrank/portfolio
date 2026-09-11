import React from "react"

import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import Grating from "/media/laser/frames/diffraction.inline.svg";
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
        gsap.timeline({
            repeat: -1,
            yoyo: true,
            // duration: 3,
        })
        .from("#beam_pre_polarized", {
            drawSVG: "0%",
            ease: "power1.in"
        }).from(".diff_light", {
            drawSVG: "0%",
            ease: "power1.Out"
        });
    });

    return (
        <div>
            <Grating />
        </div>
    )
}