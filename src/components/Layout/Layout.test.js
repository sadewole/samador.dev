import React from "react"
import { StaticQuery, useStaticQuery } from "gatsby"
import renderer from "react-test-renderer"

import siteMetaData from "../../../jest/__fixtures__/site-metadata"
import Layout from "./Layout"

describe("Layout", () => {
  const props = {
    ...siteMetaData,
    title: "test",
    children: "test",
  }

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => render(props),
      useStaticQuery.mockReturnValue(props)
    )
  })

  test("render correctly", () => {
    const tree = renderer.create(<Layout {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
