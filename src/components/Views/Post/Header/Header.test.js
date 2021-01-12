import React from "react"
import { render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"

import Header from "./Header"

describe("Header", () => {
  const props = {
    author: { name: "test" },
  }

  it("must contain string", () => {
    render(<Header {...props} />)
    const name = `${props.author.name}'s blog`

    expect(screen.getByTestId("blog-nav")).toHaveTextContent(name)
  })

  it("render correctly", () => {
    const tree = renderer.create(<Header {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
