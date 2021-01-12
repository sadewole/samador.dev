import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Author from "./Author"

describe("Author", () => {
  const props = {
    author: {
      name: "test name",
      photo: "/photo.jpg",
      bio: "test",
      contacts: { twitter: "test twitter" },
    },
  }

  it("must be string", () => {
    const { getByText } = render(<Author {...props} />)
    getByText("Written by")
  })

  it("render correctly", () => {
    const tree = renderer.create(<Author {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
