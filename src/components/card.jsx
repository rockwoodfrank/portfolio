import React from "react";
import { useState, useEffect } from "react";
import "../styles/card.css"
import "../styles/fonts.css"
import LanderLink from "./lander-link";
import Position from "./position";

import caltranslogo from '../images/caltrans.png'
import calpolylogo from '../images/calpoly.png'

export default function Card()
{
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Initialize
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="card-container">
            <section id="card" >
                <div id="card-front" style={{"display": scrollY < 500 ? "block" : "none"}}>
                    <h1 className="eb-garamond-bold">ROCKWOOD FRANK</h1>
                    <h2 className="eb-garamond-bold">Recent Computer Engineering Graduate</h2>
                    <LanderLink text={"CONTACT\n@ROCKWOODFRANK.COM"} link={""}/>
                    <LanderLink text={"GITHUB"} link={""}/>
                    <LanderLink text={"LINKEDIN"} link={""}/>
                </div>
                <div id="card-back" style={{"display": scrollY >= 500 ? "block" : "none"}}>
                    <Position image={calpolylogo} title={"Cal Poly SLO"} texts={["Class of 2026", "Computer Engineering, B.S."]}/>
                    <Position image={caltranslogo} title={"Caltrans District 5"} texts={["Intelligent Transportation Services", "Software Engineering Intern"]}/>
                    <div>
                        <h2>Focus</h2>
                        <LanderLink text={"Embedded Systems"} link={""}/>
                        <LanderLink text={"Experimental Controls"} link={""}/>
                        <LanderLink text={"Software Engineering"} link={""}/>
                        <LanderLink text={"Network Devices"} link={""}/>
                    </div>
                </div>
                
            </section>
        </div>
      
    )
}