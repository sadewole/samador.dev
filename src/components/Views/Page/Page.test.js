import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery, StaticQuery } from "gatsby"

import Page from "./Page"
import siteMetadata from "../../../../jest/__fixtures__/site-metadata"

describe("Page", () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    )
  })

  const props = {
    title: "test",
    children: "test",
  }

  it("render correctly", () => {
    const tree = renderer.create(<Page {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
