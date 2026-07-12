import React from "react";
import { useState, useEffect } from "react";
import "../styles/card.css"
import "../styles/fonts.css"
import LanderLink from "./LanderLink";
import Position from "./Position";
import { animateScroll } from "react-scroll"

import caltranslogo from '../images/caltrans.png'
import calpolylogo from '../images/calpoly.png'
import ScrollDirector from "./ScrollDirector";

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
                <div id="card-front" style={{"display": scrollY < 500 ? "" : "none", opacity: (100 - (scrollY * 0.7) + "%")}}>
                    <h1 className="eb-garamond-bold" data-aos="fade-up">ROCKWOOD FRANK</h1>
                    <h2 className="eb-garamond-bold" data-aos="fade-up" data-aos-delay="200">Recent Computer Engineering Graduate</h2>
                    <LanderLink text={"CONTACT\n@ROCKWOODFRANK.COM"} link={"mailto:contact@rockwoodfrank.com"} fade_delay={400}/>
                    <LanderLink text={"GITHUB"} link={"https://github.com/rockwoodfrank"} fade_delay={600}/>
                    <LanderLink text={"LINKEDIN"} link={"https://www.linkedin.com/in/rockwood-frank-194054193/"} fade_delay={800}/>
                    <ScrollDirector scrollFunction={(e) => animateScroll.scrollTo(700)}/>
                </div>
                <div id="card-back" style={{"display": scrollY >= 500 ? "block" : "none", opacity: ((scrollY-500) * 1.3) + "%"}} data-aos="fade-up">
                    <h2>Education</h2>
                    <Position image={calpolylogo} title={"Cal Poly SLO"} texts={["Class of 2026", "Computer Engineering, B.S."]}/>
                    <h2>Current Position</h2>
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