import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"

import Author from "./Author"
import { author } from "../../../../config"

describe("Author", () => {
  const props = {
    author: {
      name: author.name,
      photo: "/photo.jpg",
      bio: "test",
    },
  }

  test("must be author name", () => {
    const { getByTestId } = render(<Author {...props} />)
    expect(getByTestId("author")).toHaveTextContent("Samuel Adewole")
  })

  test("render correctly", () => {
    const tree = renderer.create(<Author {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
