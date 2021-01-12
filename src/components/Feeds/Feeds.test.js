import React from "react"
import renderer from "react-test-renderer"

import Feeds from "./Feeds"

describe("Feeds", () => {
  const props = {
    posts: [
      {
        excerpt: "test excerpt",
        frontmatter: {
          slug: "test slug",
          title: "test title",
          date: "tesst date",
        },
      },
    ],
  }
  it("render correctly", () => {
    const tree = renderer.create(<Feeds {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
