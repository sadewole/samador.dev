import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Pagination from "./Pagination"

describe("Pagination", () => {
  const props = {
    nextPagePath: "/test",
    prevPagePath: "/test",
    hasPrevPage: false,
    hasNextPage: false,
  }

  it("must be string", () => {
    const { getByText } = render(<Pagination {...props} />)

    getByText("← prev")
    getByText("→ next")
  })

  it("render correctly", () => {
    const tree = renderer.create(<Pagination {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
