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
import Contact from "./contact"
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
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap" rel="stylesheet" />
    </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Contact></Contact>
        <footer className="footer">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <small>
                © {new Date().getFullYear()} Green Source Gardening Art Co.Ltd
                {` `}
                </small>
              </div>
              <div className="column is-half">
                <ul className="social-list">
                  <li><span ><i className="fi fi-instagram"></i></span></li>
                  <li><span ><i className="fi fi-whatsapp"></i></span></li>
                  <li><span ><i className="fi fi-facebook"></i></span></li>
                </ul>
              </div>            
            </div>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
