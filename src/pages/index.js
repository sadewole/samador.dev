import React, { Fragment } from "react"
import { graphql } from "gatsby"
// components imports
import Image from "../components/HeroImage"
import SEO from "../components/common/Seo"
import ToggleTheme from "../components/common/ToggleTheme"
import Menu from "../components/common/Menu"
import Socials from "../components/common/Socials"

import { SiteMetaData } from "../hooks"

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

const IndexPage = ({ data }) => {
  const { author, menu } = SiteMetaData()
  return (
    <Fragment>
      <SEO title="Home" />
      <section className="relative py-10 bg-gray-700 dark:bg-gray-900 m-0 overflow-hidden h-screen">
        <div className="container h-full mx-auto flex items-center justify-center">
          <div className="w-full px-14 z-3">
            <h3 className="leading-snug text-white font-light">
              Hi, I'm{" "}
              <span role="img" aria-label="emoji">
                ⛷️
              </span>
            </h3>
            <h1
              className="md:text-5xl text-3xl mb-2 leading-normal font-semibold text-white"
              data-testid="author"
            >
              {author.name}
            </h1>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-300">
              {author.bio}
            </p>

            {/** Social links */}
            <Socials socials={author.contacts} />
            {/** Theme */}
            <ToggleTheme />
            {/** Portfolio Links */}
            <Menu menu={menu} />
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative hidden md:block">
            <Image data={data} />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default IndexPage
