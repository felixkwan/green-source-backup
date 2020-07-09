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

      <div className="pages-wrapper client-wrapper container">
        <div className="container block-title">
          <h2 className="section-title sustain-footer-title">{intl.formatMessage({ id: "client.subheader" })}</h2>
          <div className="paragraph section-text">
              <article>
                <p>
                {intl.formatMessage({ id: "client.subheader-desc" })}
                </p>
              </article>
          </div>
          <div className="divider"></div>
        </div>
      </div>
      <Cases></Cases>

    </Layout>
  )
}

export default Clients
