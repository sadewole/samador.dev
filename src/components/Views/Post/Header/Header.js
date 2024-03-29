import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ToggleTheme from "../../../common/ToggleTheme"

const Header = ({ author }) => {
  return (
    <nav className="mb-5 flex items-center justify-between">
      <h3 data-testid="blog-nav" className="mb-12">
        <Link to="/blogs">{author.name}'s blog</Link>
      </h3>
      <ToggleTheme />
    </nav>
  )
}

Header.propTypes = {
  author: PropTypes.object,
}

export default Header
