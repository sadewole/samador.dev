import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../../Sidebar"

const Page = ({ title, children }) => {
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="px-10 layout-body">
        <header>
          <h1 className="md:text-5xl text-3xl md:mt-0 mt-8 mb-8">{title}</h1>
        </header>
        {children}
      </main>
    </div>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Page
