import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"

const Menu = ({ menu }) => {
  const pathname = globalHistory.location.pathname
  let links =
    pathname === "/" ? menu.filter(item => item.label !== "Home") : menu

  return (
    <nav style={{ marginTop: "-50px" }}>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="text-gray-300">
            -{" "}
            <Link
              to={link.path}
              className="hover:underline font-light leading-snug mr-2"
              activeClassName="underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Menu
