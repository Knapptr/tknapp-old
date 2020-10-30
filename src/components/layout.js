import React from "react"
import Header from "./header"
import "../styles/master.scss"
import Footer from "./footer"
import layoutStyle from "./layout.module.scss"
const Layout = props => {
  return (
    <div className={layoutStyle.page}>
      <Header />
      <div className={layoutStyle.container}>
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
