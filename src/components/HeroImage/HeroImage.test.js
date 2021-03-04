import React from "react"
import renderer from "react-test-renderer"

import HeroImage from "./HeroImage"
import heroImage from "../../../jest/__fixtures__/heroImage"

describe("HeroImage", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: () => ({
        matches: false,
        addListener: () => {},
        removeListener: () => {},
      }),
    })
  })

  test("render correctly", () => {
    const tree = renderer.create(<HeroImage {...heroImage} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
