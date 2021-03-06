import React from "react"
import PropTypes from "prop-types"
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
          activeClassName="no-underline"
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
          activeClassName="no-underline"
        >
          → next
        </Link>
      </h2>
    </div>
  )
}

Pagination.propTypes = {
  nextPagePath: PropTypes.string,
  prevPagePath: PropTypes.string,
  hasPrevPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
}

export default Pagination
