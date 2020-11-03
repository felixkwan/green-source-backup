import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ser1Icon from "../../images/icons8-tree-planting-64.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Category2 = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "health-1200.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <Layout>
      <Header/>
      <div className="container">
        <div className="page-header">
          <div className="hero is-medium">
            <div className="hero-body">
              <h3 className="page-sub-heading eng mb-3">Cleaning</h3>
              <h1 className="page-heading">樹木移除</h1>
              <p className="is-size-5 service-des">擁有樹藝師及攀樹師，專門進行任何類型的樹木工程，並配備高空工作平台、專用車輛、安全裝備及機械設備。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container is-max-widescreen page-title">
          <span className="page-title-text has-text-weight-bold">Service</span>
      </div>

      <div className="page-body has-background-white-bis">
        <div className="container">
          <div className="container pb-6">
          <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li><FontAwesomeIcon icon={faHome} className="mr-2" /><Link to="/">主頁</Link></li>
                <li className="is-active"><Link to="/services/category1" aria-current="page">樹木移除</Link></li>
              </ul>
            </nav>

            <div className="service-content is-clearfix">
                <div className="columns is-variable is-3-mobile is-4-tablet is-multiline is-clearfix">
                  <div className="column is-half-tablet is-one-third-widescreen">
                    <div className="card pb-4">
                      <div className="card-image">
                        <Img fluid={data.aboutImage.childImageSharp.fluid} className="" alt=""/>
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
                        <Img fluid={data.aboutImage.childImageSharp.fluid} className="" alt=""/>
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
                        <Img fluid={data.aboutImage.childImageSharp.fluid} className="" alt=""/>
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
                      <div className="service-nav-item has-background-white">
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
                      <div className="service-nav-item has-background-white is-active">
                        <Link to="/services/category2" className="has-text-centered">
                          <figure>
                            <img src={ser1Icon} className="image is-64x64 service-icon" alt="" />
                          </figure>
                          <div className="divider"></div>
                          <h5 className="">樹木移除</h5>
                        </Link>
                      </div>
                    </div>

                    <div className="column is-one-quarter">
                      <div className="service-nav-item has-background-white">
                        <Link to="/services/category1" className="has-text-centered">
                          <figure>
                            <img src={ser1Icon} className="image is-64x64 service-icon" alt="" />
                          </figure>
                          <div className="divider"></div>
                          <h5 className="">草坪工程</h5>
                        </Link>
                      </div>
                    </div>

                    <div className="column is-one-quarter">
                      <div className="service-nav-item has-background-white">
                        <Link to="/services/category1" className="has-text-centered">
                          <figure>
                            <img src={ser1Icon} className="image is-64x64 service-icon" alt="" />
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

export default Category2
