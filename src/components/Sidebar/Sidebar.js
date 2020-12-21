import React from "react"
import { SiteMetaData } from "../../hooks"
import Menu from "../Menu"
import Socials from "../Socials"
import Author from "./Author"

const Sidebar = () => {
  const { author, menu } = SiteMetaData()
  return (
    <div className="w-full px-20">
      <Author author={author} />
      <div className="">
        <Socials socials={author.contacts} />
        <Menu menu={menu} />
      </div>
    </div>
  )
}

export default Sidebar
