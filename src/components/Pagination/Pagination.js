import React from "react"
import { Link } from "gatsby"

const Pagination = ({
  nextPagePath,
  prevPagePath,
  hasPrevPage,
  hasNextPage,
}) => {
  return (
    <div className="my-10 flex items-center justify-between">
      <h2>
        <Link
          rel="prev"
          to={hasPrevPage ? prevPagePath : "/blogs"}
          className={`uppercase hover:text-white font-semibold hover:no-underline ${
            !hasPrevPage && "pointer-events-none text-white"
          }`}
        >
          ← prev
        </Link>
      </h2>
      <h2>
        <Link
          rel="next"
          to={hasNextPage ? nextPagePath : "/blogs"}
          className={`uppercase hover:text-white font-semibold hover:no-underline ${
            !hasNextPage && "pointer-events-none text-white"
          }`}
        >
          → next
        </Link>
      </h2>
    </div>
  )
}

export default Pagination
