import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ser1Icon from "../../images/icons8-tree-planting-64.png"
import BackgroundImage from 'gatsby-background-image-es5'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Category3 = () => {
  const data = useStaticQuery(graphql`
    query {
      heading: file(relativePath: { eq: "cate2-bk.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      s1Image: file(relativePath: { eq: "cate2-s1.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      s2Image: file(relativePath: { eq: "cate2-s2.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      s3Image: file(relativePath: { eq: "cate2-s3.webp" }) {
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
      <div id="cate2" className="header page-header">
        <BackgroundImage className="hero is-medium has-background-desktop" fluid={data.heading.childImageSharp.fluid}>
          <div className="hero-head">
            <Header />
          </div>
          <div className="hero-body">
            <div className="container">
              <h3 className="page-sub-heading eng mb-3 has-text-white">Cleaning</h3>
              <h1 className="page-heading has-text-white">樹木移除</h1>
              <p className="is-size-5 service-des has-text-white">擁有樹藝師及攀樹師，專門進行任何類型的樹木工程，並配備高空工作平台、專用車輛、安全裝備及機械設備。</p>
            </div>
          </div>     
        </BackgroundImage>
      </div>

      <div className="page-body has-background-white-bis">

      <div className="container page-title">
          <span className="page-title-text has-text-weight-bold">Service</span>
      </div>

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
                        <Img fluid={data.s1Image.childImageSharp.fluid} className="" alt=""/>
                      </div>

                      <div className="card-content">
                        <h2 className="service-title px-4 mb-2">危樹移除</h2>
                          <article className="content px-4">
                            <p>經驗豐富的專業人員，並配備相關的機械設備專門負責移除危險樹木。</p>
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
                        <h2 className="service-title px-4 mb-2">林木保養</h2>
                          <article className="content px-4">
                            <p>定期為樹木修剪樹冠及疏枝，令其勻稱得宜、外觀自然優美。</p>
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
                        <h2 className="service-title px-4 mb-2">高空砍伐</h2>
                          <article className="content px-4">
                            <p>使用高空工作台、升降車等器具處理較高林木。除外，亦有專業而富有經驗的攀樹師負責高空伐樹。</p>
                          </article>
                      </div>
                      <div className="card-footer"></div>
                    </div>
                  </div>

                  <div className="column is-half-tablet is-one-third-widescreen">
                    <div className="card pb-2">
                      <div className="card-image">
                        <Img fluid={data.heading.childImageSharp.fluid} className="" alt=""/>
                      </div>

                      <div className="card-content">
                        <h2 className="service-title px-4 mb-2">樹木評估</h2>
                          <article className="content px-4">
                            <p>配備評估樹木相關的儀器和工具，為客戶測量及為樹木進行專業評估。</p>
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

export default Category3
