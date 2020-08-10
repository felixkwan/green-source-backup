import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Sustainability = () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "sustain.title" })} />
      <div className="header-bk top">
        <div className="header-wrapper sustain-header">
          <div className="section">
            <h1 className="heading-title">{intl.formatMessage({ id: "sustain.header" })}</h1>
          </div>
        </div>
      </div>

      <div className="sustain-wrapper pages-wrapper container">

        <div className="container block-title">
          <h2 className="section-title sustain-footer-title">{intl.formatMessage({ id: "sustain.subheader" })}</h2>
          <div className="paragraph section-text">
              <article>
                <p>{intl.formatMessage({ id: "sustain.subheader-desc" })}</p>
              </article>
          </div>
          <div className="divider"></div>
        </div>

        <div className="tab-wrapper">
          <div className="tab-content">
            <div label="People" className="container">
              <div className="container">
                  <div className="paragraph-img ppl-img"></div>
              </div> 
              <div className="columns tap-content-inner">
                <div className="column is-offset-4 is-8">
                  <div className="tab-title">
                    <h2>{intl.formatMessage({ id: "sustain.dev" })}</h2>
                  </div>
                  <div className="paragraph">
                      <article>
                        <p>{intl.formatMessage({ id: "sustain.dev-desc" })}</p>
                      </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-content">
            <div label="Health" className="container">
              <div className="container">
                <div className="paragraph-img health-img"></div>
              </div>
              <div className="columns tap-content-inner">
                <div className="column is-offset-4 is-8">
                  <div className="tab-title">
                    <h2 className="health-title">{intl.formatMessage({ id: "sustain.health" })}</h2>
                  </div>
                  <div className="paragraph">
                      <article>
                        <p>{intl.formatMessage({ id: "sustain.health-desc" })}</p>
                      </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="tab-content">
              <div label="Society" className="container">
                <div className="container">
                  <div className="paragraph-img society-img"></div>
                </div>
                <div className="columns tap-content-inner">
                  <div className="column is-offset-4 is-8">
                    <div className="tab-title">
                      <h2>{intl.formatMessage({ id: "sustain.social" })}</h2>
                    </div>
                    <div className="paragraph">
                        <article>
                          <p>{intl.formatMessage({ id: "sustain.social-desc" })}</p>
                        </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>

    </Layout>
  )
}

export default Sustainability
