import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"

const Service = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "flower-1920.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 512) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <p>Hello world.</p>
  )
}

export default Service
