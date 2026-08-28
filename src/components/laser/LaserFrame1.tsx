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
export default function LaserFrame1({})
{
    useGSAP(() => {
        gsap.to(".redbar", {
            fill: "#ff0095",
            duration: 1,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
        });

        // gsap.to(".bluebar", {
        //     fill: "#ff00ff",
        //     duration: 1,
        //     ease: "power2.inOut",
        //     repeat: -1,
        //     yoyo: true,
        // });
    })

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
                <defs>
                </defs>
                {/* <rect class = "redbar" x="479" y="71" width="52" height="130" fill="#ff0000" fill-opacity="0.5"/>
                <rect class = "redbar" x="485" y="71" width="52" height="130" fill="#ff0000" fill-opacity="0.5"/> */}
                <rect x="38" y="457" width="162" height="268" transform="rotate(-90 38 457)" fill="#D9D9D9"/>
                <rect x="172" y="387" width="134" height="70" fill="#535353"/>
                <path d="M108 457L38 387V457H108Z" fill="#AFAFAF"/>
                <path d="M38 365L108 295L38 295L38 365Z" fill="#AFAFAF"/>
                <rect x="442" y="309" width="152" height="42" fill="#F2F2F2" stroke="#CDCDCD" stroke-width="6" stroke-linejoin="round"/>
                <rect x="352" y="303" width="52" height="53" fill="#FFE7D3"/>
                <rect x="637" y="303" width="52" height="53" fill="#FFE7D3"/>
                <rect x="158" y="407" width="14" height="32" fill="#535353"/>
                <path d="M158.324 423L74 423L74 329H352.5" stroke="#BF609F" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M354 330L727.5 330" fill="none" stroke="#0000FF" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M354 328H662V261" fill="none" stroke="#FF4040" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="761.5" y="313.5" width="33" height="34" transform="rotate(90 761.5 313.5)" fill="black" stroke="black" stroke-linejoin="round"/>
                <path d="M728 329.5C728.276 329.5 728.5 329.724 728.5 330V337C728.5 337.215 728.362 337.407 728.158 337.475L719.158 340.475C719.006 340.525 718.838 340.499 718.708 340.405C718.578 340.311 718.5 340.161 718.5 340V330C718.5 329.724 718.724 329.5 719 329.5H728Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M728 330.5C728.276 330.5 728.5 330.276 728.5 330V323C728.5 322.785 728.362 322.593 728.158 322.525L719.158 319.525C719.006 319.475 718.838 319.501 718.708 319.595C718.578 319.689 718.5 319.839 718.5 320V330C718.5 330.276 718.724 330.5 719 330.5H728Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="645.5" y="218.5" width="33" height="34" fill="black" stroke="black" stroke-linejoin="round"/>
                <path d="M661.5 252C661.5 251.724 661.724 251.5 662 251.5L669 251.5C669.215 251.5 669.407 251.638 669.475 251.842L672.475 260.842C672.525 260.994 672.499 261.162 672.405 261.292C672.311 261.422 672.161 261.5 672 261.5L662 261.5C661.724 261.5 661.5 261.276 661.5 261L661.5 252Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M662.5 252C662.5 251.724 662.276 251.5 662 251.5L655 251.5C654.785 251.5 654.593 251.638 654.525 251.842L651.525 260.842C651.475 260.994 651.501 261.162 651.595 261.292C651.689 261.422 651.839 261.5 652 261.5L662 261.5C662.276 261.5 662.5 261.276 662.5 261L662.5 252Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M232 220L232 64" stroke="black" stroke-width="6" stroke-linecap="round"/>
                <path fill="none" d="M232 203C264.809 192.836 266.722 89.7462 291.653 90.0005C320.32 90.293 319.094 185.064 339.973 179.085C360.851 173.106 358.163 154.201 373.975 156.365C396.302 159.422 399.127 192.012 420.505 197.021C429.493 199.127 430.646 194.032 443.77 192.836C456.894 191.64 473 197.021 473 197.021" stroke="#0000FF" stroke-width="6" stroke-linecap="round"/>
                <path fill="none" d="M276 203C308.716 192.836 310.623 89.7461 335.483 90.0005C364.067 90.2929 362.845 185.064 383.664 179.085C404.483 173.106 401.802 154.201 417.569 156.365C439.832 159.422 442.649 192.012 463.966 197.021C472.928 199.127 473.483 198.814 483 200.608" stroke="#FF0000" stroke-width="6" stroke-linecap="round"/>
                <path d="M207 180L496 180" stroke="black" stroke-width="6" stroke-linecap="round"/>
                <rect x="513" y="310" width="11" height="62" rx="3" transform="rotate(90 513 310)" fill="white"/>
                <text x="300" y="220">Response</text>
                <text x="125" y="375">Laser Diode</text>
                <text x="450" y="375">Rubidium Sample</text>
            </svg>
        </div>
    )
}