import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Header from "../components/header"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import "./global-style.scss"
import "./index.scss"

const IndexPage = ({intl}) => (
  
  <StaticQuery
    query={graphql`
      query {
        headerImage: file(relativePath: { eq: "home-bk.png" }) {
          childImageSharp {
            fluid(quality: 100, maxHeight: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        ser1Image: file(relativePath: { eq: "icons8-tree-planting-64.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}

    render={data => {
      // Set ImageData.
      const imageData = data.headerImage.childImageSharp.fluid;
      const serIcon1 = data.ser1Image.childImageSharp.fluid;

      return (

        <Layout>
          <SEO title="Home" />
          <div id="home" className="header">
            <div className="hero is-fullheight-with-navbar">
              <div className="hero-head">
                <Header />
              </div>
              <div className="hero-body header-body">
                <div className="container is-fullhd">
                  <div className="columns is-gapless is-widescreen">
                    <div className="column is-half is-hidden-tablet">
                      <div className="img-wrapper">
                          <Img
                            fluid={imageData}
                            className="index-header"
                          />
                      </div>
                    </div>
                    <div className="column is-half">
                      <div className="container is-max-desktop header-content px-4 mx-2">
                        <h2 className="heading-chin is-size-3">
                          為你提供專業、全面、高品質園藝服務。
                        </h2>
                        <h1 className="heading-us eng mt-2 mb-6">
                          Professional,Wide Range, High Quality Services.
                        </h1>
                        <button className="view-more">
                          <h4>了解更多</h4>
                        </button>
                      </div>
                    </div>
                    <div className="column is-half is-hidden-mobile">
                      <div className="img-wrapper">
                        <Img
                          fluid={imageData}
                          className="index-header"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="service" className="block-service py-6">
            <div className="hero is-fullHeight">
              <div className="hero-body">
                <div className="container">
                  <div className="block-heading has-text-centered mb-4">
                    <h5 className="eng mb-4">Four Lines, For Life</h5>
                    <h3 className="eng mb-2">
                      Experienced, Skilful Teams.
                    </h3>
                    <h2>
                      綠源擁有專業技術顧問及施工團隊, 如樹藝師, 攀樹師,園林設計師,保養技工等等。
                    </h2>
                  </div>
                  
                  <div className="columns is-multiline is-6 service-list">
                    <div className="column is-one-quarter-desktop is-half-tablet">
                      <Img
                            fluid={serIcon1}
                            className="index-header"
                      />
                      <div className="divider"></div>
                      <h3 className="category-title">園藝保養</h3>
                      <article className="category-content">
                        <p>Hello World</p>
                      </article>
                      <button className="read-more">Read more.</button>
                    </div>
                    <div className="column is-one-quarter-desktop is-half-tablet">
                      <Img
                            fluid={serIcon1}
                            className="index-header"
                      />
                      <div className="divider"></div>
                      <h3 className="category-title">樹木移除</h3>
                      <article className="category-content eng">
                        <p>Hello World</p>
                      </article>
                      <button className="read-more">Read more.</button>
                    </div>
                    <div className="column is-one-quarter-desktop is-half-tablet">
                      <Img
                            fluid={serIcon1}
                            className="index-header"
                      />
                      <div className="divider"></div>
                      <h3 className="category-title">草坪工程</h3>
                      <article className="category-content">
                        <p>Hello World</p>
                      </article>
                      <button className="read-more">Read more.</button>
                    </div>
                    <div className="column is-one-quarter-desktop is-half-tablet">
                      <Img
                            fluid={serIcon1}
                            className="index-header"
                      />
                      <div className="divider"></div>
                      <h3 className="category-title">綠化工程</h3>
                      <article className="category-content">
                        <p>Hello World</p>
                      </article>
                      <button className="read-more">Read more.</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="block-client my-6">
            <div className="container">
              <div className="block-heading has-text-centered mb-4">
                <h5 className="eng mb-4">Our Clients</h5>
                <h3 className="eng mb-2">
                  Serve the best, Make you the best.
                </h3>
                <h2>
                  我哋為各大物業管理公司,院校,屋苑提供各類專業園藝服務,咨詢及施工。
                </h2>
              </div>
              
              <div className="client-list columns is-multiline is-2 is-desktop">
                <div className="column is-half-tablet is-one-quarter-widescreen">
                  <Img
                            fluid={serIcon1}
                            className="index-header"
                      />
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

          <div className="block-info">
            <div className="container is-fullhd info-content">
              <div className="columns is-gapless is-multiline is-tablet">
                <div className="info-1-img column is-half"></div>
                <div className="column is-half">
                  <div className="text-wrapper info-1">
                    <div className="info-title">
                      <h4 className="eng">Shape Safety</h4>
                    </div>
                    <div className="container">
                      <h1 className="eng mb-3">Maintain every details in your garden.</h1>
                      <h2>提供安全可靠綠化環境, 遠離隱藏危險。</h2>
                    </div>
                  </div>
                </div>

                <div className="info-2-img column is-half is-hidden-tablet"></div>
                <div className="column is-half">
                  <div className="text-wrapper info-1">
                    <div className="info-title">
                      <h4 className="eng">Live Green</h4>
                    </div>
                    <div className="container">
                      <h1 className="eng mb-3">Build healthy working &amp; learning place.</h1>
                      <h2>建造更優質的環境, 塑造更健康的生活。</h2>
                    </div>
                  </div>
                </div>
                <div className="info-2-img column is-half is-hidden-mobile"></div>

              </div>
            </div>
          </div>


          <div className="block-message">    
            <div className="container is-max-desktop">
              <div className="message-wrap">
                <div className="msg-heading">
                  <h1 className="eng">Our Commit</h1>
                  <h3 className="heading-chin px-5">信譽第一,品質至上,追求完美,不斷創新,為客戶提供高品質的服務。</h3>
                </div> 
              </div>
            </div>
    
          </div>
    
      
        </Layout>
      )
    }}
  />
)


export default injectIntl(IndexPage)
