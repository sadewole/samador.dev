import React from "react"
import renderer from "react-test-renderer"

import Socials from "./Socials"

describe("Socials", () => {
  const props = {
    socials: {
      email: "test",
      telegram: "test",
      twitter: "test",
      github: "test",
    },
  }
  test("render correctly", () => {
    const tree = renderer.create(<Socials {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
