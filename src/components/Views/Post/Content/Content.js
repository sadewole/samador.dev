import React from "react"
import PropTypes from "prop-types"

const Content = ({ title, body, date }) => {
  return (
    <article className="mb-15">
      <header className="mb-10">
        <h1>{title}</h1>
        <time className="italic" dateTime={date}>
          Published on {date}
        </time>
      </header>
      <section>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </section>
    </article>
  )
}

Content.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string,
}

export default Content
