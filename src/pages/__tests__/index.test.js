import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import { StaticQuery, useStaticQuery } from "gatsby"

import Home from "../index"
import siteMetaData from "../../../jest/__fixtures__/site-metadata"
import heroImage from "../../../jest/__fixtures__/heroImage"

describe("Home page", () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => render(siteMetaData),
      useStaticQuery.mockReturnValue(siteMetaData)
    )
  })

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: () => ({
        matches: false,
        addListener: () => {},
        removeListener: () => {},
      }),
    })
  })

  test("must be text", () => {
    const { getByTestId, getByText } = render(<Home {...heroImage} />)

    expect(getByText("Hi, I'm")).not.toBeNull()

    expect(getByTestId("author")).toHaveTextContent("Test name")
  })

  test("render correctly", () => {
    const tree = renderer.create(<Home {...heroImage} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
