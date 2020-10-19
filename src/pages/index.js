import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Carousel from "../components/carousel"
import { StaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image-es5"

import "./global-style.scss"

const IndexPage = ({intl}) => (
  
  <StaticQuery
    query={graphql`
      query {
        indexHeader: file(relativePath: { eq: "bk-heading-1920.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
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
          
          <div id="home" className="header top">
            <div className="hero is-large">
              <div className="hero-body">
                <div className="container">
                  <div className="columns is-gapless is-desktop">
                    <div className="column is-half">
                      <h2 className="sub-heading">
                        為你提供專業、全面、高品質園藝服務。
                      </h2>
                      <h1 className="heading">
                        Professional,Wide Range, High Quality Services.
                      </h1>
                    </div>
                    <div className="column is-half">
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
      
          <div className="block-info blocks container clearfix">
    
            <div  data-sal="fade"
                  data-sal-duration="250"
                  data-sal-delay="100"
                  data-sal-easing="ease" 
                  className="container block-title">
              <h4 className="section-subtitle">{intl.formatMessage({ id: "blockInfo.subtitle" })}</h4>
              <h2 className="section-title">{intl.formatMessage({ id: "blockInfo.title" })}</h2>
              <div className="divider"></div>
            </div>
    
            <div className="info-content info info-1">
              <div  data-sal="fade"
                    data-sal-duration="350"
                    data-sal-delay="150"
                    data-sal-easing="ease"
                    className="img-wrapper on-right"></div>
              <div className="columns is-gapless">
    
                <div  data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-delay="200"
                      data-sal-easing="ease"
                      className="column is-half">
                  <div className="text-wrapper">
                    <div className="info-title">
                      <div className="title-number"><h2>01.</h2></div>
                      <div className="title-text"><h3>{intl.formatMessage({ id: "blockInfo.character1" })}</h3></div>
                    </div>
                    <article>
                      <p>
                        {intl.formatMessage({ id: "blockInfo.article1" })}
                      </p>
                    </article>
                  </div>      
                </div>
              </div>
            </div>
    
            <div className="info-content info info-2">
              <div  data-sal="fade"
                    data-sal-duration="350"
                    data-sal-delay="150"
                    data-sal-easing="ease"
                    className="img-wrapper on-left"></div>
              <div className="columns is-gapless">
                <div className="space column is-half"></div>
                <div  data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-delay="200"
                      data-sal-easing="ease" 
                      className="column is-half">
                  <div className="text-wrapper">
                    <div className="info-title">
                      <div className="title-number"><h2>02.</h2></div>
                      <div className="title-text"><h3>{intl.formatMessage({ id: "blockInfo.character2" })}</h3></div>
                    </div>
                    <article>
                      <p>
                        {intl.formatMessage({ id: "blockInfo.article2" })}
                      </p>
                    </article>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
    
          <div className="block-service blocks container clearfix">
            <div  data-sal="fade"
                  data-sal-duration="250"
                  data-sal-delay="100"
                  data-sal-easing="ease"  
                  className="container block-title">
              <h4 className="section-subtitle">{intl.formatMessage({ id: "blockService.subtitle" })}</h4>
              <h2 className="section-title">{intl.formatMessage({ id: "blockService.title" })}</h2>
              <div className="divider"></div>
            </div>
    
            <div className="service-content">
              <div className="columns is-gapless">
                <div  data-sal="fade"
                      data-sal-duration="350"
                      data-sal-delay="200"
                      data-sal-easing="ease"
                      className="service-img column is-half"></div>
                <div  data-sal="fade"
                      data-sal-duration="350"
                      data-sal-delay="300"
                      data-sal-easing="ease" 
                      className="column is-half">
    
                  <div className="text-wrapper">
                    <div className="service-title">
                      <h4>{intl.formatMessage({ id: "blockService.character" })}</h4>
                    </div>
                    <div className="container">
                      <article>
                        <p>
                          {intl.formatMessage({ id: "blockService.article" })}
                        </p>
                      </article>
                    </div>
                    <Link 
                    to="/service/" className="primary-button">{intl.formatMessage({ id: "index.btnService" })}</Link>
                  </div>    
                
                </div>
              </div>
            </div>
    
          </div>

          <div className="block-message blocks clearfix">    
            <div className="container message-wrap">
              <div className="block-heading">
                <h2>Our Commit</h2>
              </div>
              <div  data-sal="slide-up"
                    data-sal-duration="350"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    className="container text-wrapper">
                <h3>信譽第一,品質至上,追求完美,不斷創新,為客戶提供高端的品質服務。</h3>
              </div>
            </div>
    
          </div>
    
      
        </Layout>
      )
    }}
  />
)


export default injectIntl(IndexPage)
