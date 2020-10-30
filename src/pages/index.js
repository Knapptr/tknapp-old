import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import tkHalloween from "../../public/static/TKhalloweenkid.jpg"
const IndexPage = () => (
  <Layout>
    <div>
      <div className="d-flex flex-align-center flex-row-collapse">
        <img src={tkHalloween} alt="Ah! A vampire" className="largeImage" />

        <div className="d-flex flex-align-center flex-dir-col flex-align-base">
          <span className="bigText">Hello!</span>
          <p>
            My name is Tyler. I am a web developer, summer camp director,
            cyclist and musician. I love a good (bad) joke.
          </p>
          <p>
            I enjoy working with javascript, node, express and react. This site
            was built while learning gatsby. You can see my code on{" "}
            <a href="">github.</a>
          </p>
          <p>
            I make ambient music as <a href="">cone</a>. I sometimes put
            together mixes you can find on <a href="">soundcloud.</a>
          </p>
          <p>
            I love exploring on my bicycle. I've worked as a mechanic, a coach,
            and have raced road, cx and xc.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
