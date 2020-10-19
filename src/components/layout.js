/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

import Header from "./header"
import Contact from "./contact"
import "./layout.css"

const Layout = ({ children }) => {
  
  return (
    <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Helmet>
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
