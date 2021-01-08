import React from "react"
import { Link } from "gatsby"

const Feeds = ({ posts }) => (
  <div className="feed">
    {posts.map(post => (
      <article className="feed-item">
        <div className="feed-meta">
          <h2 className="feed-title">
            <Link className="feed-link" to={post.node.frontmatter.slug}>
              {post.node.frontmatter.title}
            </Link>
          </h2>
          <time className="feed-time" dateTime={post.node.frontmatter.date}>
            {post.node.frontmatter.date}
          </time>
        </div>
        <section>
          <p className="feed-description">{post.node.excerpt}</p>
        </section>
      </article>
    ))}
  </div>
)

export default Feeds
