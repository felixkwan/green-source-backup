import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cases from "../components/cases"

const Clients = () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "client.title" })} />

      <div className="header-bk top">
        <div className="header-wrapper client-header">
          <div className="section">
            <h1 className="heading-title">{intl.formatMessage({ id: "client.header" })}</h1>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Clients
