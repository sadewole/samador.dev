import React from "react"
import renderer from "react-test-renderer"
import Tags from "./Tags"

describe("Tags", () => {
  const props = {
    tags: ["test"],
  }

  it("render correctly", () => {
    const tree = renderer.create(<Tags {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
