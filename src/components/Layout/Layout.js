import React from "react"
import PropTypes from "prop-types"
import Seo from "../seo"
import Sidebar from "../Sidebar"
import "./layout.css"

const Layout = ({ title, children }) => {
  return (
    <div className="py-10 bg-gray-700 text-gray-300 dark:bg-gray-900 m-0 md:flex min-h-screen">
      <Seo title={title} />
      <Sidebar />
      <main className="px-10 layout-body">
        <h1 className="text-5xl font-semibold md:mt-0 mt-8 mb-8">{title}</h1>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
