import React from "react"
import PropTypes from "prop-types"

const Tags = ({ tags }) => {
  return (
    <div>
      <ul className="tags">
        {tags &&
          tags.map((tag, index) => (
            <li
              className="text-white hover:border-gray-600 border-white border p-3 mr-2 text-center inline-flex items-center justify-center h-10 mb-6 shadow-lg rounded-full hover:bg-white hover:text-gray-600 cursor-pointer"
              key={index}
            >
              {tag}
            </li>
          ))}
      </ul>
    </div>
  )
}

Tags.defaultProps = {
  tags: [],
}

Tags.propTypes = {
  tags: PropTypes.array,
}

export default Tags
