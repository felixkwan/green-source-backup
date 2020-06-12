import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

    <div className="pages-wrapper container">

    <div className="columns side-menu">

        <div className="column">
          <aside className="menu">
            <p className="menu-label">
              Gardening
            </p>
            <ul className="menu-list">
              <li><p>ABC</p></li>
              <li><p>ABC</p></li>
            </ul>
            <p className="menu-label">
              Management
            </p>
            <ul className="menu-list">
              <li><p>ABC</p></li>
              <li>
                <p className="is-active">ABC</p>
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

        <div className="column is-four-fifths">
          Second column
        </div>

      </div>

    </div>

  </Layout>
)

export default Service
