import * as React from "react"
import "../styles/global.css";
import BackgroundCard from "../components/background-card";
import Card from "../components/card";
import Intro from "../components/intro";

const pageStyles = {
    background: "linear-gradient(45deg, #0c3263, #000f23)",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    paddingTop: "300vh",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
        <BackgroundCard />
        <Card />
        <Intro />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
