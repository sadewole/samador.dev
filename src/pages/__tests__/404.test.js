import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import { StaticQuery, useStaticQuery } from "gatsby"

import NotFound from "../404"
import siteMetaData from "../../../jest/__fixtures__/site-metadata"

describe("404 page", () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => render(siteMetaData),
      useStaticQuery.mockReturnValue(siteMetaData)
    )
  })

  test("must be subtitle", () => {
    const { getByTestId } = render(<NotFound />)
    expect(getByTestId("subtitle")).toHaveTextContent(
      "You just hit a route that doesn't exist... the sadness."
    )
  })

  test("render correctly", () => {
    const tree = renderer.create(<NotFound />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
