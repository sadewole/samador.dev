import React from "react"
import { render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"

import Content from "./Content"

describe("Content", () => {
  const props = {
    title: "test title",
    body: "<p>test</p>",
    date: "test date",
  }

  it("must contain string", () => {
    render(<Content {...props} />)

    expect(screen.getByTestId("publish")).toHaveTextContent("Published on")
  })

  it("render correctly", () => {
    const tree = renderer.create(<Content {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
