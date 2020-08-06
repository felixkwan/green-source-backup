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
          
          <div  data-sal="zoom-in"
                data-sal-duration="450"
                data-sal-delay="150"
                data-sal-easing="ease"  
                className="header-bk top">
            <BackgroundImage
                fluid={imageData}
                className="header-wrapper index-header">
              <div className="hero is-medium">
                  <div className="hero-body">
                    <h1 data-sal="fade"
                        data-sal-duration="250"
                        data-sal-delay="500"
                        data-sal-easing="ease" 
                        className="heading-title">{intl.formatMessage({ id: "index.heading" })}</h1>
                  </div>
              </div>
            </BackgroundImage>
          </div>
    
          <div className="block-main blocks">
            <div  data-sal="fade"
                  data-sal-delay="150"
                  data-sal-ease="ease"
                  data-sal-duration="250"
                  className="container block-title">
              <h4 className="section-subtitle">{intl.formatMessage({ id: "blockMain.subtitle" })}</h4>
              <h2 className="section-title">{intl.formatMessage({ id: "blockMain.title" })}</h2>
              <div className="divider"></div>
            </div>
    
            <div className="container main-content">
              <div  data-sal="fade"
                    data-sal-duration="350"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    className="main-img"></div>
              <div  data-sal="slide-up"
                    data-sal-duration="350"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    className="container text-wrapper">
                <p>{intl.formatMessage({ id: "blockMain.article" })}</p>
              </div>
            </div>
    
          </div>
    
          <div className="block-info blocks container">
    
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
    
          <div className="block-service blocks container">
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
    
          <div className="block-case section blocks">
            <div  data-sal="fade"
                  data-sal-delay="250"
                  data-sal-easing="ease"  
                  className="container block-title">
              <h4 className="section-subtitle">{intl.formatMessage({ id: "blockCase.subtitle" })}</h4>
              <h2 className="section-title">{intl.formatMessage({ id: "blockCase.title" })}</h2>
              <div className="divider"></div>
            </div>
            
            <div className="showcase">
              <div className="columns is-multiline is-gapless">
                <div  data-sal="fade"
                      data-sal-duration="350"
                      data-sal-delay="300"
                      data-sal-easing="ease" 
                      className="column is-full case-slider">
                        <div className="case-thumb slider">
                            <Carousel />
                        </div>
                </div>
                
                <div  data-sal="fade"
                      data-sal-duration="350"
                      data-sal-delay="350"
                      data-sal-easing="ease" 
                      className="column is-full">
                  <div className="container case">
                    <div className="case-content-wrapper">
                      <div className="case-content columns">
                        <div className="column is-one-third">
                          <h3 className="case-title">{intl.formatMessage({ id: "blockCase.case1" })}</h3>
                          <div className="case-info">
                            <p>{intl.formatMessage({ id: "blockCase.case1-desc" })}</p>
                          </div>
                        </div>
                        <div className="column is-one-third">
                          <h3 className="case-title">{intl.formatMessage({ id: "blockCase.case2" })}</h3>
                          <div className="case-info">
                            <p>{intl.formatMessage({ id: "blockCase.case2-desc" })}</p>
                          </div>
                        </div>
                        <div className="column is-one-third">
                          <h3 className="case-title">{intl.formatMessage({ id: "blockCase.case3" })}</h3>
                          <div className="case-info">
                            <p>{intl.formatMessage({ id: "blockCase.case3-desc" })}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div  data-sal="slide-up"
                  data-sal-duration="350"
                  data-sal-delay="450"
                  data-sal-easing="ease"  
                  className="container text-wrapper">
                <article>
                  <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                </article>
              </div>
    
              <Link data-sal="fade"
                    data-sal-duration="350"
                    data-sal-delay="500"
                    data-sal-easing="ease" 
                    to="/client/" className="primary-button button-centered view-more-button">{intl.formatMessage({ id: "blockCase.btnViewMore" })}</Link>
            </div>

          </div>
        </Layout>
      )
    }}
  />
)


export default injectIntl(IndexPage)
