import * as React from "react"
import "../styles/fonts.css"
import "../styles/global.css";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostPreview from "../components/PostPreview";
import robotarm from "../../media/robotarm/robotarm.jpg"

// Page styles
const mainStyle = {
    marginTop: "100px",
    padding: "0 20px",
}

const projectsListStyle = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
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
                <div id = "projects-list" style={projectsListStyle}>
                    <PostPreview 
                        title={"Vision-Based Robotic Arm Controller"}
                        link={"/robotarm"}
                        image={robotarm}
                    />
                </div>
            </section>
            <Footer />
        </>

    )
}

export default IndexPage

export const Head = () => <title>Portfolio for Rockwood Frank</title>
