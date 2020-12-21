import React from "react"
import { SiteMetaData } from "../../hooks"
import Menu from "../Menu"
import Socials from "../Socials"
import ToggleTheme from "../toggle"
import Author from "./Author"

const Sidebar = () => {
  const { author, menu } = SiteMetaData()
  return (
    <div className="w-full md:w-4/12 px-10 pb-10 border-b-2 md:border-b-0 md:border-r-2 border-gray-600">
      <Author author={author} />
      <div className="">
        <Socials socials={author.contacts} />
        <ToggleTheme />
        <Menu menu={menu} />
      </div>
    </div>
  )
}

export default Sidebar
