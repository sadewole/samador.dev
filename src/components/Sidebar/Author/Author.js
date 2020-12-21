import React from "react"
import { withPrefix, Link } from "gatsby"

const Author = ({ author }) => {
  return (
    <div className="mb-4">
      <Link to="/">
        <img
          src={withPrefix(author.photo)}
          className="rounded"
          width="75"
          height="75"
          alt={author.name}
        />
      </Link>
      (
      <h2 className="text-3xl mb-2 leading-normal font-semibold text-white">
        <Link className="" to="/">
          {author.name}
        </Link>
      </h2>
      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-300">
        {author.bio}
      </p>
    </div>
  )
}

export default Author
