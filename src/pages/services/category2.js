import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ser1Icon from "../../images/icons8-tree-planting-64.png"
import ser2Icon from "../../images/icons8-worker-64.png"
import ser3Icon from "../../images/icons8-wheelbarrow-64.png"
import ser4Icon from "../../images/icons8-lotus-64.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Category2 = () => {
  const data = useStaticQuery(graphql`
    query {
      heading: file(relativePath: { eq: "cate2-bk-2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      s1Image: file(relativePath: { eq: "cate2-s1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      s2Image: file(relativePath: { eq: "cate2-s2-2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      s3Image: file(relativePath: { eq: "cate2-s3.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      s4Image: file(relativePath: { eq: "cate2-s4.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  
  return (
    <Layout>

      <div id="cate2" className="header page-header">
        <section className="hero is-medium is-relative">
          <Img className="header-bk" fluid={data.heading.childImageSharp.fluid}></Img>
          <div className="hero-head">
            <Header />
          </div>
          <div className="hero-body">
            <div className="container">
              <h3 className="page-sub-heading eng mb-3">Cleaning</h3>
              <h1 className="page-heading">樹木移除</h1>
              <p className="is-size-5 heading-des">擁有樹藝師及攀樹師，專門進行任何類型的樹木工程，並配備高空工作平台、專用車輛、安全裝備及機械設備。</p>
            </div>
          </div> 
        </section>
      </div>

      <div className="container is-fullhd page-title">
          <span className="page-title-text has-text-weight-bold">Service</span>
      </div>

      <div className="page-body">

        <div className="container page-content">
          <div className="container pb-6">
          <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li><FontAwesomeIcon icon={faHome} className="mr-2" /><Link to="/">主頁</Link></li>
                <li className="is-active"><Link to="/services/category1" aria-current="page">樹木移除</Link></li>
              </ul>
            </nav>

            <div className="service-content">
                <div className="columns is-variable is-3-mobile is-4-tablet is-multiline">
                  <div className="column is-half-tablet is-one-third-desktop">
                    <div className="inner">
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
                  </div>

                  <div className="column is-half-tablet is-one-third-desktop">
                    <div className="inner">
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
                  </div>

                  <div className="column is-half-tablet is-one-third-desktop">
                    <div className="inner">
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
                  </div>

                  <div className="column is-half-tablet is-one-third-desktop">
                    <div className="inner">
                      <div className="card pb-2">
                        <div className="card-image">
                          <Img fluid={data.s4Image.childImageSharp.fluid} className="" alt=""/>
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

                  <div className="column new-service is-half-tablet is-one-third-desktop">
                    <div className="inner">
                      <div className="card pb-2">

                        <div className="card-content">
                          <div className="container card-top-border is-relative"></div>
                          <h2 className="service-title px-4 mb-2">快將更新</h2>
                            <article className="content px-4">
                              <p>即將提供新的高品質服務, 以完善不同需要。</p>
                            </article>
                        </div>
                        <div className="card-footer"></div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="container is-widescreen service-navbar is-hidden-touch">
                  <div className="columns is-desktop is-8 is-centered is-vcentered">
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

export default Category2
