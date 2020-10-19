import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Header from "../components/header"
import Carousel from "../components/carousel"
import { StaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image-es5"

import "./global-style.scss"

const IndexPage = ({intl}) => (
  
  <StaticQuery
    query={graphql`
      query {
        indexHeader: file(relativePath: { eq: "home-bk.png" }) {
          childImageSharp {
            fluid(quality: 100, maxHeight: 1600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}

    render={data => {
      // Set ImageData.
      const imageData = data.indexHeader.childImageSharp.fluid;

      return (

        <Layout>
          <SEO title="Home" />
          
          <div id="home" className="header">
            <div className="hero is-fullheight-with-navbar">
              <div className="hero-head">
                <Header />
              </div>
              <div className="hero-body">
                <div className="container">
                  <div className="columns is-gapless is-desktop">
                    <div className="column is-half is-hidden-tablet">
                      <BackgroundImage
                        fluid={imageData}
                        className="index-header clearfix">
                      </BackgroundImage>
                    </div>
                    <div className="column is-half">
                      <h2 className="heading-chin">
                        為你提供專業、全面、高品質園藝服務。
                      </h2>
                      <h1 className="heading-us">
                        Professional,Wide Range, High Quality Services.
                      </h1>
                    </div>
                    <div className="column is-half is-hidden-mobile">
                      <BackgroundImage
                        fluid={imageData}
                        className="index-header clearfix">
                      </BackgroundImage>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block-service blocks">
            <div className="service-content container">
              <h5 className="section-subtitle">Four Lines, For Life</h5>
              <h3 className="section-title">
                Serve the best, Make you the best.
              </h3>
              <h2 className="section-title">
                我哋為各大物業管理公司,院校,屋苑提供各類專業園藝服務,咨詢及施工。
              </h2>
            </div>
          </div>

          <div className="block-info blocks">
            <div className="info-content">
              <div className="columns is-gapless is-multiline is-desktop">
                <div className="info-1-img column is-half"></div>
                <div className="column is-half">
                  <div className="text-wrapper info-1">
                    <div className="info-title">
                      <h4>Shape Safety</h4>
                    </div>
                    <div className="container">
                      <h1>Maintain every details in your garden.</h1>
                      <h2>提供安全可靠綠化環境,遠離隱藏危險。</h2>
                    </div>
                  </div>
                </div>

                <div className="info-2-img column is-half is-hidden-tablet"></div>
                <div className="column is-half">
                  <div className="text-wrapper info-1">
                    <div className="info-title">
                      <h4>Shape Safety</h4>
                    </div>
                    <div className="container">
                      <h1>Maintain every details in your garden.</h1>
                      <h2>提供安全可靠綠化環境,遠離隱藏危險。</h2>
                    </div>
                  </div>
                </div>
                <div className="info-2-img column is-half is-hidden-mobile"></div>

              </div>
            </div>
    
          </div>

          <div className="block-client blocks">
            <div className="container">
              <h5 className="section-subtitle">Our Clients</h5>
              <h3 className="section-title">
                Serve the best, Make you the best.
              </h3>
              <h2 className="section-title">
                我哋為各大物業管理公司,院校,屋苑提供各類專業園藝服務,咨詢及施工。
              </h2>
              <div className="client-list columns is-multiline is-2 is-desktop">
                <div className="column is-half-tablet is-one-quarter-widescreen">
                  <h5 className="client-title">HKU</h5>
                </div>
                <div className="column is-half-tablet is-one-quarter-widescreen">
                  <h5 className="client-title">HKU</h5>
                </div>
                <div className="column is-half-tablet is-one-quarter-widescreen">
                  <h5 className="client-title">HKU</h5>
                </div>
                <div className="column is-half-tablet is-one-quarter-widescreen">
                  <h5 className="client-title">HKU</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="block-message blocks">    
            <div className="container">
              <div className="message-wrap">
                <div className="msg-heading">
                  <h2>Our Commit</h2>
                </div>
                  <h3>信譽第一,品質至上,追求完美,不斷創新,為客戶提供高品質的服務。</h3>
              </div>
            </div>
    
          </div>
    
      
        </Layout>
      )
    }}
  />
)


export default injectIntl(IndexPage)
