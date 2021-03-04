import React from "react"
import PropTypes from "prop-types"
import { getContact, getIcon } from "../../../utils"

const Socials = ({ socials }) => {
  return (
    <ul>
      {Object.keys(socials).map((name, index) => {
        if (!socials[name] || socials[name] === "#") {
          return null
        } else {
          const Icon = getIcon(name)
          return (
            <li
              key={index}
              className="text-white hover:border-gray-600 border-white border p-3 mr-2 text-center inline-flex items-center justify-center w-10 h-10 mb-6 shadow-lg rounded-full hover:bg-white hover:text-gray-600 cursor-pointer"
            >
              <a
                href={getContact(name, socials[name])}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            </li>
          )
        }
      })}
    </ul>
  )
}

Socials.propTypes = {
  socials: PropTypes.object,
}

export default Socials
