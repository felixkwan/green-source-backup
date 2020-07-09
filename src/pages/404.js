import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const NotFoundPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "notfound.title" })} />
      <h1>{intl.formatMessage({ id: "notfound.header" })}</h1>
      <p>{intl.formatMessage({ id: "notfound.desc" })}</p>
    </Layout>
  )
}

export default NotFoundPage
