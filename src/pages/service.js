import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Service = () => (
  <Layout>
    <SEO title="Service" />
    <div className="header-bk top">
      <div className="header-wrapper service-header">
        <div className="section">
          <h1 className="heading-title">Services</h1>
        </div>
      </div>
    </div>

    <div className="pages-wrapper service-wrapper container clearfix">
      <div className="service-content">
      <div className="columns side-menu">

          <div className="column">
            <aside className="menu">
              <p className="menu-label">
                Gardening
              </p>
              <ul className="menu-list">
                <li ><AnchorLink to="#item-1">item-1</AnchorLink></li>
                <li><AnchorLink to="#item-2">item-2</AnchorLink></li>
              </ul>
              <p className="menu-label">
                Management
              </p>
              <ul className="menu-list">
                <li><p>ABC</p></li>
                <li>
                  <ul>
                    <li><p>ABC</p></li>
                    <li><p>ABC</p></li>
                    <li><p>ABC</p></li>
                  </ul>
                </li>
                <li><p>ABC</p></li>
                <li><p>ABC</p></li>
                <li><p>ABC</p></li>
              </ul>
            </aside>
          </div>

          <div className="column is-four-fifths service-details">
            <div id="item-1">
              <p>Garden</p>
            </div>
            <div id="item-2">
              <p>Item-2</p>
            </div>
          </div>
      </div>
    </div>

    </div>

  </Layout>
)

export default Service
