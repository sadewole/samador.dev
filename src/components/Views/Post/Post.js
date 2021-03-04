import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SiteMetaData } from "../../../hooks"
import Content from "./Content"
import Tags from "./Tags"
import Author from "./Author"
import Header from "./Header"

const Post = ({ post }) => {
  const { author } = SiteMetaData()
  const { title, date, tags } = post.frontmatter

  return (
    <main className="max-w-3xl m-auto layout-body px-10">
      <Header author={author} />
      <Content title={title} date={date} body={post.html} />
      <footer>
        <Tags tags={tags} />
        <hr />
        <Author author={author} />
        <Link to="/blogs" rel="prev">
          ← Read more articles
        </Link>
      </footer>
    </main>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post
