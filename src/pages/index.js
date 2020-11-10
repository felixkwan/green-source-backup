import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Header from "../components/header"
import Clients from "../components/clients"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "./global-style.scss"
import "./index.scss"

const IndexPage = ({intl}) => (
  
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "desktop.webp" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        ser1Image: file(relativePath: { eq: "icons8-tree-planting-64.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        ser2Image: file(relativePath: { eq: "icons8-worker-64.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        ser3Image: file(relativePath: { eq: "icons8-wheelbarrow-64.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        ser4Image: file(relativePath: { eq: "icons8-lotus-64.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        info1Image: file(relativePath: { eq: "info-1-img.webp" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        info2Image: file(relativePath: { eq: "info-2-img.webp" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}

    render={data => {
      // Set ImageData.
      const desktop = data.desktop.childImageSharp.fluid;
      const serIcon1 = data.ser1Image.childImageSharp.fluid;
      const serIcon2 = data.ser2Image.childImageSharp.fluid;
      const serIcon3 = data.ser3Image.childImageSharp.fluid;
      const serIcon4 = data.ser4Image.childImageSharp.fluid;
      const info1 = data.info1Image.childImageSharp.fluid;
      const info2 = data.info2Image.childImageSharp.fluid;

      return (

        <Layout>
          <SEO title="Home" />

          <div id="home" className="header">
            <section className="hero is-medium is-relative">
              <Img className="top-header-bk header-bk" fluid={desktop}></Img>
              <div className="hero-head">
                <Header />
              </div>
              <div className="hero-body">
                <div className="container">
                  <div className="header-content">
                    <h2 className="heading-chin is-size-3-widescreen is-hidden-touch pr-4">
                      為你提供專業、全面、高品質園藝服務。
                    </h2>
                    <h2 className="heading-chin is-size-4-mobile is-hidden-desktop has-text-white">
                      為你提供專業、全面、高品質園藝服務。
                    </h2>
                    <h1 className="heading-us eng mt-2 mb-6 is-size-1 is-hidden-touch">
                      Professional,Wide Range, High Quality Services.
                    </h1>
                    <h1 className="heading-us eng mt-2 mb-6 is-size-2-mobile is-hidden-desktop has-text-white">
                      Professional,Wide Range, High Quality Services.
                    </h1>
                    <button onClick={() => scrollTo('#service')} className="view-more is-clickable is-size-6 has-text-weight-normal">了解更多</button>
                  </div>
                  
                </div>
              </div> 
            </section>
          </div>        

          <div id="service" className="block-service">
            <div className="hero is-fullHeight">
              <div className="hero-body">
                <div className="container">
                  <div className="block-heading is-max-widescreen has-text-centered-tablet mb-6">
                    <h4 className="eng mb-4 px-1">Four Lines, For Life</h4>
                    <h1 className="eng mb-2 px-1">
                      Experienced, Skilful Teams.
                    </h1>
                    <h3 className="px-1">
                      綠源擁有專業技術顧問及施工團隊, 如樹藝師, 攀樹師,園林設計師,保養技工等等。
                    </h3>
                  </div>
                  
                  <div className="columns is-multiline is-8 is-tablet">
                    <div className="column is-one-quarter-desktop is-half">
                      <div className="card">
                        <header className="card-header-title is-centered">
                          <p className="py-3">
                            <Img
                                  fluid={serIcon1}
                                  className="image is-64x64"
                                  alt=""
                            />
                          </p>
                        </header>
                        <div className="divider"></div>
                        <div className="card-content has-text-centered">
                          
                          <h3 className="category-title">園藝保養</h3>
                          <article className="category-content mb-3">
                            <p>保養服隊由多名專業及有經驗的人員組成，服務對象涵蓋屋苑，校園，公私營機構，公園。</p>
                          </article>
                        </div>
                        <Link to="/services/category1"><h5 className="read-more px-3 py-2 has-text-centered mb-5 mx-5">了解細項</h5></Link>
                      </div>
                    </div>

                    <div className="column is-one-quarter-desktop is-half">
                      <div className="card">
                        <header className="card-header-title is-centered">
                          <p className="py-3">
                            <Img
                                  fluid={serIcon2}
                                  className="image is-64x64"
                                  alt=""
                            />
                          </p>
                        </header>
                        <div className="divider"></div>
                        <div className="card-content has-text-centered">
                      
                          <h3 className="category-title">樹木移除</h3>
                          <article className="category-content mb-3">
                            <p>擁有樹藝師及攀樹師，專門進行任何類型的樹木工程，並配備高空工作平台、專用車輛、安全裝備及機械設備。</p>
                          </article>
                        </div>
                        <Link to="/services/category2"><h5 className="read-more px-3 py-2 has-text-centered mb-5 mx-5">了解細項</h5></Link>
                      </div>
                    </div>

                    <div className="column is-one-quarter-desktop is-half">
                      <div className="card">
                        <header className="card-header-title is-centered">
                          <p className="py-3">
                            <Img
                                  fluid={serIcon3}
                                  className="image is-64x64"
                                  alt=""
                            />
                          </p>
                        </header>
                        <div className="divider"></div>
                        <div className="card-content has-text-centered">
                          
                          <h3 className="category-title">草坪工程</h3>
                          <article className="category-content mb-3">
                            <p>多年的經驗及專業知識，專門為客戶進行各類型的草坪保養及工程。</p>
                          </article>
                        </div>
                        <Link to="/"><h5 className="read-more px-3 py-2 has-text-centered mb-5 mx-5">了解細項</h5></Link>
                      </div>
                    </div>

                    <div className="column is-one-quarter-desktop is-half">
                      <div className="card">
                        <header className="card-header-title is-centered">
                          <p className="py-3">
                            <Img
                                  fluid={serIcon4}
                                  className="image is-64x64"
                                  alt=""
                            />
                          </p>
                        </header>
                        <div className="divider"></div>
                        <div className="card-content has-text-centered">
                          
                          <h3 className="category-title">綠化工程</h3>
                          <article className="category-content mb-3">
                            <p>我們具備多年經驗，專門為客戶進行各類型的綠化工程項目。</p>
                          </article>
                        </div>
                        <Link to="/"><h5 className="read-more px-3 py-2  has-text-centered mb-5 mx-5">了解細項</h5></Link>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <Clients/>

          <div className="block-info">
            <div className="container is-fullhd info-content">
              <div className="columns is-gapless is-multiline is-tablet">
                <div className="info-1-img column is-half">
                <Img
                      fluid={info1}
                      className="image"
                      imgStyle={{ objectFit: 'cover' }}
                      style={{ height: '100%'}}
                      alt=""
                />
                </div>
                <div className="column is-half">
                  <div className="info-1 is-align-self-center is-flex">
                    <div className="container info-1-content is-flex is-flex-direction-column is-justify-content-center">
                      <div className="info-title">
                        <h4 className="eng eng-label">Shape Safety</h4>
                      </div>
                      <h1 className="eng mb-3">Maintain every details in your garden.</h1>
                      <h2>提供安全可靠綠化環境，遠離隱藏危險。</h2>
                    </div>
                  </div>
                </div>

                <div className="info-2-img column is-half is-hidden-tablet">
                <Img
                      fluid={info2}
                      className="image"
                      style={{ height: '100%'}}
                      imgStyle={{ objectFit: 'cover' }}
                      alt=""
                />
                </div>
                <div className="column is-half">
                  <div className="info-2 is-align-self-center is-flex">
                    <div className="container info-2-content is-flex is-flex-direction-column is-justify-content-center">
                      <div className="info-title">
                        <h4 className="eng eng-label">Live Green</h4>
                      </div>
                      <h1 className="eng mb-3">Build healthy working &amp; learning place.</h1>
                      <h2>建造更優質的環境，塑造更健康的生活。</h2>
                    </div>
                  </div>
                </div>
                <div className="info-2-img column is-half is-hidden-mobile">
                <Img
                      fluid={info2}
                      className="image"
                      imgStyle={{ objectFit: 'cover' }}
                      style={{ height: '100%'}}
                      alt=""
                />
                </div>

              </div>
            </div>
          </div>


          <div className="block-message">    
            <div className="container is-max-desktop">
              <div className="message-wrap has-text-centered-tablet">
                <div className="msg-heading">
                  <h1 className="eng is-size-2-mobile">Our Commit</h1>
                  <h3 className="heading-chin is-size-3-desktop is-size-4-mobile">信譽第一,品質至上,追求完美,不斷創新,為客戶提供高品質的服務。</h3>
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
