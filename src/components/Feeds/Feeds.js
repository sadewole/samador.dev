import React from "react"
import { Link } from "gatsby"

import "./feeds.css"

const Feeds = ({ posts }) => (
  <div className="feed">
    {posts.map(post => (
      <article className="feed-item" key={post.frontmatter.slug}>
        <div className="feed-meta mb-5">
          <h2 className="feed-title">
            <Link className="feed-link" to={post.frontmatter.slug}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <time className="feed-time" dateTime={post.frontmatter.date}>
            {post.frontmatter.date}
          </time>
        </div>
        <section>
          <p className="feed-description">{post.excerpt}</p>
        </section>
      </article>
    ))}
  </div>
)

export default Feeds
