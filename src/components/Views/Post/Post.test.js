import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import { useStaticQuery, StaticQuery } from "gatsby"

import Post from "./Post"
import siteMetadata from "../../../../jest/__fixtures__/site-metadata"

describe("Post", () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    )
  })

  const props = {
    post: {
      frontmatter: { title: "test", date: "test", tags: ["test"] },
    },
  }

  it("must contain string", () => {
    render(<Post {...props} />)
    screen.getByRole("link", { name: /← Read more articles/i })
  })

  it("render correctly", () => {
    const tree = renderer.create(<Post {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
