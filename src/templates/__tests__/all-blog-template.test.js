import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery, StaticQuery } from "gatsby"

import AllBlogTemplate from "../all-blog-template"
import siteMetadata from "../../../jest/__fixtures__/site-metadata"

describe("All Blogs Template", () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    )
  })

  const props = {
    data: {
      allMarkdownRemark: {
        nodes: [
          {
            excerpt: "test desc",
            frontmatter: {
              slug: "test-slug",
              title: "test",
              date: "test-date",
            },
          },
        ],
        totalCount: 1,
      },
    },
  }
  it("render correctly", () => {
    const tree = renderer.create(<AllBlogTemplate {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
