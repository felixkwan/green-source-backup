import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Clients = () => (
  <Layout>
    <SEO title="Clients" />
    <div className="header-bk top">
      <div className="header-wrapper client-header">
        <div className="section">
          <h1 className="heading-title">Clients</h1>
        </div>
      </div>
    </div>

    <div className="pages-wrapper container">

    <div className="container block-title">
      <h2 className="section-title">We're Waiting For You.</h2>
      <div className="divider"></div>
    </div>

    <div className="columns client-list">

      <div className="column is-one-third">
        <div className="client-thumb"></div>
        <div className="client-content">
          <h4 className="client-title">Company</h4>
          <small className="client-date">2017-09-20</small>
        </div>
      </div>

      <div className="column is-one-third">
        <div className="client-thumb"></div>
        <div className="client-content">
          <h4 className="client-title">School</h4>
          <small className="client-date">2017-09-20</small>
        </div>
      </div>

      <div className="column is-one-third">
        <div className="client-thumb"></div>
        <div className="client-content">
          <h4 className="client-title">Building</h4>
          <small className="client-date">2017-09-20</small>
        </div>
      </div>

    </div>

    </div>

  </Layout>
)

export default Clients
