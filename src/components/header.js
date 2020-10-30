import React from "react"
import { Link } from "gatsby"
import hStyles from "./header.module.scss"
const Header = props => {
  return (
    <div className={hStyles.header}>
      <nav className={hStyles.nav}>
        <h4 className={hStyles.title}>
          <Link className={hStyles.titleLink} to="/">
            Tyler <br className={hStyles.hideOnCollapse} />
            Knapp
          </Link>
        </h4>
        <ul className={hStyles.navList}>
          <li className={hStyles.navListItem}>
            <Link
              className={hStyles.link}
              to="/posts"
              activeClassName={hStyles.activeLink}
            >
              Posts
            </Link>
          </li>
          {/* <li className={hStyles.navListItem}>
            <Link
              className={hStyles.link}
              to="/projects"
              activeClassName={hStyles.activeLink}
            >
              Projects
            </Link>
          </li> */}
          <li className={hStyles.navListItem}>
            <Link
              className={hStyles.link}
              to="/music"
              activeClassName={hStyles.activeLink}
            >
              Music
            </Link>
          </li>
          {/* Link to contact page? or include contact info in footer? both? */}
          <li className={hStyles.navListItem}>
            <Link
              className={hStyles.link}
              to="/contact"
              activeClassName={hStyles.activeLink}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
