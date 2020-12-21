import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Menu = ({ menu }) => {
  const pathname = window.location.pathname
  let links =
    pathname === "/" ? menu.filter(item => item.label !== "Home") : menu

  return (
    <nav className="">
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
