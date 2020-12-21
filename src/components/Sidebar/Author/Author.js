import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image from "../../../assets/images/photo2.jpg"

const query = graphql`
  {
    file(relativePath: { eq: "photo2.jpg" }) {
      childImageSharp {
        fixed(height: 150, width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Author = ({ author }) => {
  const { file } = useStaticQuery(query)
  return (
    <div className="mb-4">
      <Link to="/">
        <img
          src={Image}
          width="85"
          height="85"
          className="rounded"
          alt={author.name}
        />
      </Link>
      <div></div>
      <h2 className="text-2xl mb-2 leading-normal font-semibold text-white">
        <Link className="" to="/">
          {author.name}
        </Link>
      </h2>
      <p className="text-sm font-light leading-relaxed mt-0 mb-4 text-gray-300">
        {author.bio}
      </p>
    </div>
  )
}

export default Author
