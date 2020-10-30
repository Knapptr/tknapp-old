import React from "react"
import { Link } from "gatsby"
import hStyles from "./header.module.scss"
const Header = props => {
  return (
    <div className={hStyles.header}>
      <nav className={hStyles.nav}>
        <h3 className={hStyles.title}>
          <Link className={hStyles.titleLink} to="/">
            Tyler Knapp
          </Link>
        </h3>
        <ul className={hStyles.navList}>
          <li className={hStyles.navListItem}>
            <Link className={hStyles.link} to="/posts">
              Posts
            </Link>
          </li>
          <li className={hStyles.navListItem}>
            <Link className={hStyles.link} to="/music">
              Music
            </Link>
          </li>
          <li className={hStyles.navListItem}>
            <Link className={hStyles.link} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
