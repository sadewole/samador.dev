import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery, StaticQuery } from "gatsby"

import PageTemplate from "../page-template"
import siteMetadata from "../../../jest/__fixtures__/site-metadata"

describe("Page Template", () => {
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
          title: "test title",
          layout: "test",
        },
      },
    },
  }

  it("render correctly", () => {
    const tree = renderer.create(<PageTemplate {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
