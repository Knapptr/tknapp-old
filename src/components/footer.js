import React from "react"
import { Link } from "gatsby"
import footerStyle from "./footer.module.scss"
const Footer = props => (
  <footer className={footerStyle.footer}>
    <span>Tyler Knapp, 2020</span>
    <span className={footerStyle.email}>tyler@tknapp.net</span>
  </footer>
)

export default Footer
