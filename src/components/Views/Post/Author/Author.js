import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"
import { getContact } from "../../../../utils"

const Author = ({ author }) => {
  return (
    <div className="my-5 flex items-center">
      <img
        src={withPrefix(author.photo)}
        width="60"
        height="60"
        className="rounded mr-3"
        alt={author.name}
      />
      <div>
        <p>
          Written by{" "}
          <a
            className=""
            href={getContact("twitter", author.contacts.twitter)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <strong>{author.name}</strong>
          </a>{" "}
        </p>
        <p className="text-sm font-light leading-relaxed mt-0 mb-4 text-gray-300">
          {author.bio}.
        </p>
      </div>
    </div>
  )
}

Author.propTypes = {
  author: PropTypes.object,
}

export default Author
