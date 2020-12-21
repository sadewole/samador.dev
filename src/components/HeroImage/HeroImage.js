import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Image = ({ data }) => {
  const sources = [
    data.mobileImage.childImageSharp.fixed,
    {
      ...data.desktopImage.childImageSharp.fixed,
      media: `(min-width: 800px)`,
    },
  ]

  return (
    <Img
      fixed={sources}
      objectFit="cover"
      objectPosition="50% 50%"
      className="bg-gray-800 absolute -top-225-px -right-225-px rounded-full opacity-80 hidden md:block"
    />
  )
}

Image.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Image
