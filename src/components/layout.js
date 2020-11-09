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

import ser1Icon from "../images/icons8-tree-planting-64.png"
import ser2Icon from "../images/icons8-worker-64.png"
import ser3Icon from "../images/icons8-wheelbarrow-64.png"
import ser4Icon from "../images/icons8-lotus-64.png"
import logo from "../images/logo-gs-footer.svg"

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
            <div className="container is-fullhd">
              <div className="columns is-touch is-gapless is-vcentered">

              <div className="column is-half">
                <img src={logo} className="logo-svg-footer is-hidden-mobile" alt=""></img>
                <img src={logo} className="logo-svg-footer is-hidden-tablet mb-5" alt=""></img>
              </div>

              <div className="column is-half is-hidden-tablet">
                  <ul className="is-flex is-flex-direction-row is-align-items-end">
                    <li className="mr-4 "><Link to="/terms" className="has-text-white-bis">條款及細則</Link></li>
                    <li className="mr-2 "><Link to="/privacy" className="has-text-white-bis">私隱政策</Link></li>
                  </ul>
                  <small className="is-flex-wrap-wrap has-text-white">
                  © {new Date().getFullYear()} GSGA Co.Ltd. All rights reserved.
                  {` `}
                  </small>
                </div>
                <div className="column is-half is-hidden-mobile has-text-right">
                  <ul className="is-flex is-flex-direction-row-reverse is-align-items-start">
                    <li><Link to="/terms" className="has-text-white-bis">條款及細則</Link></li>
                    <li className="mr-3"><Link to="/privacy" className="has-text-white-bis">私隱政策</Link></li>
                  </ul>
                  <small className="is-flex-wrap-wrap has-text-white">
                  © {new Date().getFullYear()} GSGA Co.Ltd. All rights reserved.
                  {` `}
                  </small>
                </div>

                

              </div>
            </div>
          </div>
        </footer>
        <nav className="navbar-bottom is-hidden-desktop">
          <div className="container is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-space-between">
            <Link to="/services/category1" className="navbar-item has-text-centered">
              <img src={ser1Icon} className="image is-48x48-tablet is-24x24-mobile service-icon" alt="" />
              園藝保養</Link>
            <Link to="/services/category2" className="navbar-item has-text-centered">
              <img src={ser2Icon} className="image is-48x48-tablet is-24x24-mobile service-icon" alt="" />
              樹木移除</Link>
            <Link to="/services/category3" className="navbar-item has-text-centered">
              <img src={ser3Icon} className="image is-48x48-tablet is-24x24-mobile service-icon" alt="" />
              草坪工程</Link>
            <Link to="/services/category4" className="navbar-item has-text-centered">
              <img src={ser4Icon} className="image is-48x48-tablet is-24x24-mobile service-icon" alt="" />
              綠化工程</Link>
          </div>
        </nav>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
