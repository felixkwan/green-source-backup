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
        <footer className="footer has-background-white-ter">
          <div className="container">
            <div className="container is-fullhd">
              <div className="columns is-tables-multline">
                <div className="column is-half">
                  <small className="is-flex-wrap-wrap">
                  © {new Date().getFullYear()} Green Source Gardening Art Co.Ltd
                  {` `}
                  </small>
                </div>
                <div className="column is-half">
                  <ul className="footer-navbar is-pulled-right is-flex is-flex-direction-row is-align-items-end">
                      <li className="mr-4">Terms</li>
                      <li className="mr-2">Privacy</li>
                  </ul>
                </div>            
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
