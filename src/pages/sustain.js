import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import People from "../templates/ppl"
import Health from "../templates/health"
import Social from "../templates/social"

const Sustainability = () => (
  <Layout>
    <SEO title="Sustainability" />
    <div className="header-bk top">
      <div className="header-wrapper sustain-header">
        <div className="section">
          <h1 className="heading-title">Sustainability</h1>
        </div>
      </div>
    </div>

    <div className="pages-wrapper container">

    <div className="sustain-tabs tabs is-centered">
      <ul>
        <li className="is-active"><a href="#ppl">People Development</a></li>
        <li><a href="#health">Health & Safety</a></li>
        <li><a href="#social">Social Responsibility</a></li>
      </ul>
    </div>

    <div className="container">
      <div id="ppl"><People></People></div>
      <div id="health"><Health></Health></div>
      <div id="social"><Social></Social></div>
    </div>

    </div>

  </Layout>
)

export default Sustainability
