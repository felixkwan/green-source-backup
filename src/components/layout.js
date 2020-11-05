/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

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
              <div className="columns is-touch is-gapless">

              <div className="column is-half is-hidden-tablet">
                  <ul className="footer-navbar is-flex is-flex-direction-row is-align-items-end">
                      <li className="mr-4">Terms</li>
                      <li className="mr-2">Privacy</li>
                  </ul>
                </div>

                <div className="column is-half">
                  <small className="is-flex-wrap-wrap">
                  © {new Date().getFullYear()} Green Source Gardening Art Co.Ltd
                  {` `}
                  </small>
                </div>
                <div className="column is-half is-hidden-mobile">
                  <ul className="footer-navbar is-pulled-right is-flex is-flex-direction-row is-align-items-end">
                      <li className="mr-4">條款及細則</li>
                      <li className="mr-2">私隱政策</li>
                  </ul>
                </div>

                

              </div>
            </div>
          </div>
        </footer>
        <nav className="navbar navbar-bottom is-hidden-desktop">
          <div className="container">
            <Link to="/services/category1" className="navbar-item">園藝保養</Link>
            <Link to="/services/category2" className="navbar-item">樹木移除</Link>
            <Link to="/services/category3" className="navbar-item">草坪工程</Link>
            <Link to="/services/category4" className="navbar-item">綠化工程</Link>
          </div>
        </nav>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
