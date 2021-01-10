import React from "react"
import PropTypes from "prop-types"
import { withPrefix, Link } from "gatsby"

const Author = ({ author }) => {
  return (
    <div className="mb-4">
      <Link to="/">
        <img
          src={withPrefix(author.photo)}
          width="85"
          height="85"
          className="rounded transform hover:scale-105"
          alt={author.name}
        />
      </Link>
      <div></div>
      <h2 className="text-2xl mb-2 leading-normal font-semibold text-white">
        <Link className="" to="/" data-testid="author">
          {author.name}
        </Link>
      </h2>
      <p className="text-sm font-light leading-relaxed mt-0 mb-4 text-gray-300">
        {author.bio}
      </p>
    </div>
  )
}

Author.propTypes = {
  author: PropTypes.object,
}

export default Author
