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
      <Header />
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
                  <li><FontAwesomeIcon icon={faTwitter} /></li>
                  <li><FontAwesomeIcon icon={faInstagram} /></li>
                  <li className="facebook"><FontAwesomeIcon icon={faFacebookF} /></li>
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
