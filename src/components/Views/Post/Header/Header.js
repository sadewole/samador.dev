import React from "react"
import ToggleTheme from "../../../toggle"

const Header = ({ author }) => {
  return (
    <nav className="mb-5 flex items-center justify-between">
      <h2>{author.name}'s blog</h2>
      <ToggleTheme />
    </nav>
  )
}

export default Header
