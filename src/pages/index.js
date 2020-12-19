import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Image from "../components/HeroImage"
import SEO from "../components/seo"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import ToggleTheme from "../components/toggle"

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

const icons = [
  { icon: FaTwitter, href: "https://www.twitter.com/samador9" },
  { icon: FaGithub, href: "https://github.com/sadewole" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/samador9" },
  { icon: FaEnvelope, href: "mailto:samueladewole15@gmail.com" },
]

const links = [
  { to: "#", text: "About me" },
  { to: "#", text: "Blog" },
]

const IndexPage = ({ data }) => (
  <Fragment>
    <SEO title="Home" />
    <section className="relative py-10 bg-gray-700 dark:bg-gray-900 m-0 overflow-hidden h-screen">
      <div className="container h-full mx-auto flex items-center justify-center">
        <div className="w-full px-14 z-3">
          <h3 className="leading-snug text-white font-light">Hi, I'm ⛷️</h3>
          <h1 className="md:text-5xl text-3xl mb-2 leading-normal font-semibold text-white">
            Samuel Adewole
          </h1>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-300">
            Software engineer, Vezeti.
          </p>

          {/** Social links */}
          <ul>
            {icons.map(({ icon: Icon, href }, index) => (
              <li
                key={index}
                className="text-white hover:border-gray-600 border-white border p-3 mr-2 text-center inline-flex items-center justify-center w-10 h-10 mb-6 shadow-lg rounded-full hover:bg-white hover:text-gray-600 cursor-pointer"
              >
                <a href={href} target="_blank">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
          {/** Theme */}
          <ToggleTheme />
          {/** Portfolio Links */}
          <ul>
            {links.map((link, index) => (
              <li key={index} className="text-gray-300">
                -{" "}
                <Link
                  to={link.to}
                  className="hover:underline font-light leading-snug mr-2"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative hidden md:block">
          <Image data={data} />
        </div>
      </div>
    </section>
  </Fragment>
)

export default IndexPage
