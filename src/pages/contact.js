import React from "react"
import Layout from "../components/layout"
import contactImage from "../images/contactmeimage.jpg"

const ContactPage = props => {
  return (
    <Layout>
      <div className="d-flex flex-align-center flex-row-collapse">
        <div className="d-flex  flex-dir-col  align-end inTouchText">
          <span className="bigText">Be in touch.</span>
          <p>
            <a href="mailto:tyler@tknapp.net">Email me</a> at{" "}
            <em>tyler@tknapp.net</em>
          </p>
          <p>
            Reach out on{" "}
            <a href="https://github.com/knapptr" target="__blank">
              github.
            </a>
          </p>
        </div>
        <img src={contactImage} alt="get in touch" className="largeImage" />
      </div>
    </Layout>
  )
}

export default ContactPage
