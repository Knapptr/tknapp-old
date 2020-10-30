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
            <a href="https://github.com/knapptr" target="__blank">
              github.
            </a>
          </p>
          <p>
            I make ambient music as{" "}
            <a href="https://conephl.bandcamp.com/" target="__blank">
              cone
            </a>{" "}
            and make other types of sounds on{" "}
            <a href="https://soundcloud.com/knappt" target="__blank">
              soundcloud.
            </a>
          </p>
          <p>
            I love exploring on my bicycle. I've been a mechanic, a coach, and
            bike racer.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
