import * as React from "react"
import "../styles/global.css";
import BackgroundCard from "../components/BackgroundCard";
import Card from "../components/Card";
import Intro from "../components/Intro";
import { useEffect } from "react";

const pageStyles = {
    background: "linear-gradient(45deg, #0c3263, #000f23)",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    paddingTop: "300vh",
}

const IndexPage = () => {
    useEffect(() => {
        const initAOS = async () => {
            const AOS = await import("aos");
            await import("aos/dist/aos.css");

            AOS.default.init({
                duration: 800,
                once: true,
            });
        };

        initAOS();
    }, []);

    return (
        <main style={pageStyles}>
            <BackgroundCard />
            <Card />
            <Intro />
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Portfolio for Rockwood Frank</title>
