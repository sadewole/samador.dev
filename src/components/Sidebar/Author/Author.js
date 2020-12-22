import React from "react"
import { withPrefix, Link } from "gatsby"

const Author = ({ author }) => {
  return (
    <div className="mb-4">
      <Link to="/">
        <img
          src={withPrefix(author.photo)}
          width="85"
          height="85"
          className="rounded"
          alt={author.name}
        />
      </Link>
      <div></div>
      <h2 className="text-2xl mb-2 leading-normal font-semibold text-white">
        <Link className="" to="/">
          {author.name}
        </Link>
      </h2>
      <p className="text-sm font-light leading-relaxed mt-0 mb-4 text-gray-300">
        {author.bio}
      </p>
    </div>
  )
}

export default Author
