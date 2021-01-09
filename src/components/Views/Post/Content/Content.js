import React from "react"

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

export default Content
