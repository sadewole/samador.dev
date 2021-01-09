import React from "react"
import { SiteMetaData } from "../../hooks"
import Menu from "../common/Menu"
import Socials from "../common/Socials"
import ToggleTheme from "../toggle"
import Author from "./Author"

import "./sidebar.css"

const Sidebar = () => {
  const { author, menu } = SiteMetaData()
  return (
    <aside className="w-full min-w-400-px md:w-6/12 px-10 pb-10 relative">
      <div className="sidebar">
        <Author author={author} />
        <div className="">
          <Socials socials={author.contacts} />
          <ToggleTheme />
          <Menu menu={menu} />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
