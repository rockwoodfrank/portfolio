import * as React from "react"
import "../styles/fonts.css"
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectsList from "../components/ProjectsList";

// Page styles
const mainStyle = {
    padding: "0 20px",
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
        <>
            <Header />
            <section style={mainStyle}>
                <h1>My Projects</h1>
                <ProjectsList />
            </section>
            <Footer />
        </>

    )
}

export default IndexPage

export const Head = () => <title>Portfolio for Rockwood Frank</title>
