import React from "react"
import PropTypes from "prop-types"
import Seo from "../common/Seo"
import "./layout.css"

const Layout = ({ title, children }) => {
  return (
    <div className="py-10 sm:px-10 bg-gray-700 text-gray-300 dark:bg-gray-900 m-0 min-h-screen overflow-x-hidden">
      <Seo title={title} />
      <div className="max-w-6xl xl:w-10/12  m-auto">{children}</div>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
