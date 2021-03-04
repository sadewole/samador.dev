import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery, StaticQuery } from "gatsby"

import BlogTemplate from "../blog-template"
import siteMetadata from "../../../jest/__fixtures__/site-metadata"

describe("Blog Template", () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    )
  })

  const props = {
    data: {
      markdownRemark: {
        id: "1",
        html: "<p>test</p>",
        frontmatter: {
          date: "test-date",
          tags: ["test tag"],
          title: "test",
        },
      },
    },
  }
  it("render correctly", () => {
    const tree = renderer.create(<BlogTemplate {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
