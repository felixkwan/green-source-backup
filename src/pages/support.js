import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Support = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      officeImage: file(relativePath: { eq: "ppl-2-768.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640, maxHeight:640) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      deployImage: file(relativePath: { eq: "dirt-640.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640, maxHeight:640) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      equipImage: file(relativePath: { eq: "equip-1024.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640, maxHeight:640) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      vehicleImage: file(relativePath: { eq: "santa-low.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, maxHeight:640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (

  <Layout>
    <SEO title={intl.formatMessage({ id: "support.title" })} />
    <div className="header-bk top">
      <div className="header-wrapper sustain-header">
        <div className="section">
          <h1 className="heading-title">{intl.formatMessage({ id: "support.header" })}</h1>
        </div>
      </div>
    </div>

    <div className="pages-wrapper support-wrapper">
      <div className="container">

        <div className="container block-title">
          <h2 className="section-title sustain-footer-title">{intl.formatMessage({ id: "support.equipment-support" })}</h2>
          <div className="paragraph section-text">
                <article>
                  <p>{intl.formatMessage({ id: "support.equipment-support-desc" })}</p>
                </article>
          </div>
          <div className="divider"></div>
         </div>


          <div id="vehicles" className="section section-row row-1">
            <div className="hero">
              <div className="hero-body">
                <div className="columns">
                    <div className="column is-one-third">
                      <Img className="support-img" fluid={data.vehicleImage.childImageSharp.fluid} />
                    </div>

                    <div className="column support-content">
                      <div className="support-content-text">
                        <div className="container">
                          <div className="bk-icon vehicle-icon"></div>
                          <h3 className="section-title align-left">{intl.formatMessage({ id: "support.vehicles" })}</h3>
                          <article>
                            <p>
                              {intl.formatMessage({ id: "support.vehicles-desc" })}
                            </p>
                          </article>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div id="equipment" className="section section-row row-2">
            <div className="hero">
              <div className="hero-body">
                <div className="columns">
                    <div className="column is-one-third">
                      <Img className="support-img" fluid={data.equipImage.childImageSharp.fluid} />
                    </div>

                    <div className="column support-content">
                      <div className="support-content-text">
                        <div className="container">
                          <div className="bk-icon equip-icon"></div>
                          <h3 className="section-title align-left">{intl.formatMessage({ id: "support.equipment" })}</h3>
                          <article>
                            <p>
                              {intl.formatMessage({ id: "support.equipment-desc" })}
                            </p>
                          </article>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div id="deploy" className="section section-row row-3">
            <div className="hero">
              <div className="hero-body">
                <div className="columns">
                    <div className="column is-one-third">
                      <Img className="support-img" fluid={data.deployImage.childImageSharp.fluid} />
                    </div>

                    <div className="column support-content">
                      <div className="support-content-text">
                        <div className="container">
                          <div className="bk-icon deploy-icon"></div>
                          <h3 className="section-title align-left">{intl.formatMessage({ id: "support.deploy" })}</h3>
                          <article>
                            <p>{intl.formatMessage({ id: "support.deploy-desc" })}</p>
                          </article>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div id="human-resource" className="section section-row row-4">
            <div className="hero">
              <div className="hero-body">
                <div className="columns">
                    <div className="column is-one-third">
                      <Img className="support-img" fluid={data.officeImage.childImageSharp.fluid} />
                    </div>

                    <div className="column support-content">
                      <div className="support-content-text">
                        <div className="container">
                          <div className="bk-icon society-icon"></div>
                          <h3 className="section-title align-left">{intl.formatMessage({ id: "support.hr" })}</h3>
                          <article>
                            <p>{intl.formatMessage({ id: "support.hr-desc" })}</p>
                          </article>
                        </div>
                      </div>
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

export default Support
