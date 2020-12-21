import React from "react"
import Seo from "../seo"
import Sidebar from "../Sidebar"

const Layout = ({ title, children }) => {
  return (
    <div className="container py-10 bg-gray-700 dark:bg-gray-900 m-0">
      <Seo title={title} />
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
