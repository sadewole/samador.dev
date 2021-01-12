import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery, StaticQuery } from "gatsby"

import Sidebar from "./Sidebar"
import siteMetadata from "../../../jest/__fixtures__/site-metadata"

describe("Sidebar ", () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    )
  })

  it("renders correctly", () => {
    const tree = renderer.create(<Sidebar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
