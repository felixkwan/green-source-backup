/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css" />
    </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
        <div className="wrapper">
          <main>{children}</main>
        </div>
        <footer className="footer">
        <small>
          © {new Date().getFullYear()} Green Source Gardening Art Co.Ltd
          {` `}
          </small>
          <ul className="social-list">
            <li><span ><i className="fi fi-instagram"></i></span></li>
            <li><span ><i className="fi fi-whatsapp"></i></span></li>
            <li><span ><i className="fi fi-facebook"></i></span></li>
          </ul>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
