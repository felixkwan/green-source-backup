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


    <div className="sustain-tabs tabs is-centered">
    <Tabs>
      <div label="ppl">People Development</div>
      <div label="events">Events</div>
      <div label="social">Social Responsibility</div>

    </Tabs>
    </div>

    <div className="container">
    </div>

    </div>

  </Layout>
)

const container = document.createElement('div');
document.body.appendChild(container);

export default Sustainability
