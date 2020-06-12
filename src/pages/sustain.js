import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Tabs from "../tabs/tabs";



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
      <div className="tab-wrapper">
        <Tabs>
          <div label="People Development">People Development</div>
          <div label="Events">Events</div>
          <div label="Social Responsibility">Social Responsibility</div>
        </Tabs>
      </div>
    </div>

  </Layout>
)

export default Sustainability
