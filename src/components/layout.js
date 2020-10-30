import React from "react"
import Header from "./header"
import "../styles/master.scss"
const Layout = props => {
  return (
    <div>
      <Header />
      <div className="container">
        <div>{props.children}</div>
      </div>
    </div>
  )
}
export default Layout
