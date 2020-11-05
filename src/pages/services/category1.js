import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ser1Icon from "../../images/icons8-tree-planting-64.png"
import ser2Icon from "../../images/icons8-worker-64.png"
import ser3Icon from "../../images/icons8-wheelbarrow-64.png"
import ser4Icon from "../../images/icons8-lotus-64.png"
import BackgroundImage from 'gatsby-background-image-es5'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Category1 = () => {
  const data = useStaticQuery(graphql`
    query {
      heading: file(relativePath: { eq: "cate1-bk.webp" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      s1Image: file(relativePath: { eq: "cate1-s1.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      s2Image: file(relativePath: { eq: "cate1-s2.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      s3Image: file(relativePath: { eq: "cate1-s3.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <Layout>

      <div id="cate1" className="header page-header">
        <section className="hero is-medium is-relative">
          <Img className="header-bk" fluid={data.heading.childImageSharp.fluid}></Img>
          <div className="hero-head">
            <Header />
          </div>
          <div className="hero-body">
            <div className="container">
              <h3 className="page-sub-heading eng mb-3 ">Maintenance</h3>
              <h1 className="page-heading">園藝保養</h1>
              <p className="is-size-5 service-des">保養服隊由多名專業及有經驗的人員組成，服務對象涵蓋屋苑，校園，公私營機構，公園。</p>
            </div>
          </div> 
        </section>
      </div>

      <div className="page-body has-background-white-bis">

      <div className="container is-widescreen page-title">
          <span className="page-title-text has-text-weight-bold">Service</span>
      </div>

        <div className="container page-content">
          <div className="container pb-6">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li><FontAwesomeIcon icon={faHome} className="mr-2" /><Link to="/">主頁</Link></li>
                <li className="is-active"><Link to="/services/category1" aria-current="page">園藝保養</Link></li>
              </ul>
            </nav>

            <div className="service-content is-clearfix">
                <div className="columns is-variable is-3-mobile is-4-tablet is-multiline is-clearfix">
                  <div className="column is-half-tablet is-one-third-widescreen">
                    <div className="card pb-4">
                      <div className="card-image">
                        <Img fluid={data.s1Image.childImageSharp.fluid} className="" alt=""/>
                      </div>

                      <div className="card-content">
                        <h2 className="service-title px-4 mb-2">園林設計</h2>
                          <article className="content px-4">
                            <p>為客戶創造更好的綠化環境。</p>
                          </article>
                      </div>

                      <div className="card-footer"></div>
                    </div>
                  </div>

                  <div className="column is-half-tablet is-one-third-widescreen">
                    <div className="card pb-4">
                      <div className="card-image">
                        <Img fluid={data.s2Image.childImageSharp.fluid} className="" alt=""/>
                      </div>

                      <div className="card-content">
                        <h2 className="service-title px-4 mb-2">種植及修剪</h2>
                          <article className="content px-4">
                            <p>擁有多名經驗豐富的人員，負責種植植物及修剪，為各戶提供綠化保養。</p>
                          </article>
                      </div>

                      <div className="card-footer"></div>
                    </div>
                  </div>

                  <div className="column is-half-tablet is-one-third-widescreen">
                    <div className="card pb-2">
                      <div className="card-image">
                        <Img fluid={data.s3Image.childImageSharp.fluid} className="" alt=""/>
                      </div>

                      <div className="card-content">
                        <h2 className="service-title px-4 mb-2">清理渠道</h2>
                          <article className="content px-4">
                            <p>清潔團隊專門負責清理由泥土、枯枝及枯葉造成的堵塞問題，以保持環境潔淨及渠道暢通。</p>
                          </article>
                      </div>
                      <div className="card-footer"></div>
                    </div>
                  </div>
                </div>

                <div className="container is-widescreen service-navbar">

                  <div className="columns is-desktop is-8 is-centered is-vcentered is-hidden-touch">
                    <div className="column is-one-quarter">
                      <div className="service-nav-item has-background-white is-active">
                        <Link to="/services/category1" className="has-text-centered" aria-current="page">
                          <figure>
                            <img src={ser1Icon} className="image is-64x64 service-icon" alt="" />
                          </figure>
                          <div className="divider"></div>
                          <h5 className="">園藝保養</h5>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="column is-one-quarter">
                      <div className="service-nav-item has-background-white">
                        <Link to="/services/category1" className="has-text-centered">
                          <figure>
                            <img src={ser2Icon} className="image is-64x64 service-icon" alt="" />
                          </figure>
                          <div className="divider"></div>
                          <h5 className="">樹木移除</h5>
                        </Link>
                      </div>
                    </div>

                    <div className="column is-one-quarter">
                      <div className="service-nav-item has-background-white">
                        <Link to="/services/category3" className="has-text-centered">
                          <figure>
                            <img src={ser3Icon} className="image is-64x64 service-icon" alt="" />
                          </figure>
                          <div className="divider"></div>
                          <h5 className="">草坪工程</h5>
                        </Link>
                      </div>
                    </div>

                    <div className="column is-one-quarter">
                      <div className="service-nav-item has-background-white">
                        <Link to="/services/category4" className="has-text-centered">
                          <figure>
                            <img src={ser4Icon} className="image is-64x64 service-icon" alt="" />
                          </figure>
                          <div className="divider"></div>
                          <h5 className="">綠化工程</h5>
                        </Link>
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

export default Category1
