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
                <div id="card-front" style={{"display": scrollY < 500 ? "" : "none"}}>
                    <h1 className="eb-garamond-bold" data-aos="fade-up" style={{opacity: (100 - (scrollY * 5) + "%")}} data-aos-duration="100">ROCKWOOD FRANK</h1>
                    <h2 className="eb-garamond-bold" data-aos="fade-up" data-aos-delay="150" style={{opacity: (110 - (scrollY * 5) + "%")}} data-aos-duration="100">Recent Computer Engineering Graduate</h2>
                    <LanderLink text={"CONTACT\n@ROCKWOODFRANK.COM"} link={"mailto:contact@rockwoodfrank.com"} fade_delay={300} style={{opacity: (((100) - (scrollY * 5)) + "%")}}/>
                    <LanderLink text={"GITHUB"} link={"https://github.com/rockwoodfrank"} fade_delay={450} style={{opacity: (((100) - (scrollY * 5)) + "%")}}/>
                    <LanderLink text={"LINKEDIN"} link={"https://www.linkedin.com/in/rockwood-frank-194054193/"} fade_delay={600} style={{opacity: (((100) - (scrollY * 5)) + "%")}}/>
                </div>
                <div id="card-back" style={{"display": scrollY >= 500 ? "block" : "none"}} data-aos="fade-up">
                    <div style={{opacity: ((scrollY-500) * 1.3) + "%"}}>
                        <h2>Education</h2>
                        <Position image={calpolylogo} title={"Cal Poly SLO"} texts={["Class of 2026", "Computer Engineering, B.S."]}/>
                    </div>
                    <div style={{opacity: ((scrollY-600) * 1.3) + "%"}}>
                         <h2>Current Position</h2>
                        <Position image={caltranslogo} title={"Caltrans District 5"} texts={["Intelligent Transportation Services", "Software Engineering Intern"]}/>
                    </div>
                    <div>
                        <h2 style={{opacity: ((scrollY-700) * 1.3) + "%"}}>Focus</h2>
                        <LanderLink text={"Embedded Systems"} link={""} style={{opacity: ((scrollY-750) * 1.3) + "%"}}/>
                        <LanderLink text={"Experimental Controls"} link={""} style={{opacity: ((scrollY-800) * 1.3) + "%"}}/>
                        <LanderLink text={"Software Engineering"} link={""} style={{opacity: ((scrollY-850) * 1.3) + "%"}}/>
                        <LanderLink text={"Network Devices"} link={""} style={{opacity: ((scrollY-900) * 1.3) + "%"}}/>
                    </div>
                </div>
                <ScrollDirector scrollFunctions={[(e) => animateScroll.scrollTo(1000), (e) => animateScroll.scrollTo(1800)]} scrollY={scrollY}/>
            </section>
        </div>
      
    )
}