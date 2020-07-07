import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cases from "../components/cases"

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

    <div className="pages-wrapper client-wrapper container">
      
    </div>
    <Cases></Cases>

  </Layout>
)

export default Clients
