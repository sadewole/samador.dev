import React, { Fragment } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/HeroImage"
import SEO from "../components/seo"
import { fa } from "react-icons/fa"

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "photo2.jpg" }) {
      childImageSharp {
        fixed(width: 700, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    desktopImage: file(relativePath: { eq: "photo2.jpg" }) {
      childImageSharp {
        fixed(width: 900, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Fragment>
    <SEO title="Home" />
    <section className="relative py-10 bg-gray-700 m-0 overflow-hidden h-screen">
      <div className="container h-full mx-auto flex items-center justify-center">
        <div className="w-full px-12 md:px-4 z-3">
          <h3 className="leading-snug text-white font-light">Hi, I'm ⛷️</h3>
          <h1 className="md:text-5xl text-3xl mb-2 leading-normal font-semibold text-white">
            Samuel Adewole
          </h1>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500">
            Software engineer, Vezeti
          </p>
        </div>
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative hidden md:block">
          <Image data={data} />
        </div>
      </div>
    </section>
  </Fragment>
)

export default IndexPage
