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
              General
            </p>
            <ul className="menu-list">
              <li><a href="/">Dashboard</a></li>
              <li><a href="/">Customers</a></li>
            </ul>
            <p className="menu-label">
              Administration
            </p>
            <ul className="menu-list">
              <li><a href="/">Team Settings</a></li>
              <li>
                <a className="is-active" href="/">Manage Your Team</a>
                <ul>
                  <li><a href="/">Members</a></li>
                  <li><a href="/">Plugins</a></li>
                  <li><a href="/">Add a member</a></li>
                </ul>
              </li>
              <li><a href="/">Invitations</a></li>
              <li><a href="/">Cloud Storage Environment Settings</a></li>
              <li><a href="/">Authentication</a></li>
            </ul>
            <p className="menu-label">
              Transactions
            </p>
            <ul className="menu-list">
              <li><a href="/">Payments</a></li>
              <li><a href="/">Transfers</a></li>
              <li><a href="/">Balance</a></li>
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
