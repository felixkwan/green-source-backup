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


const Category3 = () => {
  const data = useStaticQuery(graphql`
    query {
      heading: file(relativePath: { eq: "cate3-bk.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      s1Image: file(relativePath: { eq: "cate3-s1.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      s2Image: file(relativePath: { eq: "cate3-s2.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      s3Image: file(relativePath: { eq: "cate3-s3.webp" }) {
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
      <div id="cate3" className="header page-header">
        <section className="hero is-medium is-relative">
          <Img className="header-bk" fluid={data.heading.childImageSharp.fluid}></Img>
          <div className="hero-head">
            <Header />
          </div>
          <div className="hero-body">
            <div className="container">
              <h3 className="page-sub-heading eng mb-3 ">Grass Pitch, Slope</h3>
              <h1 className="page-heading">草坪工程</h1>
              <p className="is-size-5 service-des">多年的經驗及專業知識，專門為客戶進行各類型的草坪保養及工程。</p>
            </div>
          </div> 
        </section>
      </div>

      <div className="container is-fullhd page-title">
          <span className="page-title-text has-text-weight-bold">Service</span>
      </div>

      <div className="page-body has-background-white-bis">

        <div className="container page-content">
          <div className="container pb-6">
          <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li><FontAwesomeIcon icon={faHome} className="mr-2" /><Link to="/">主頁</Link></li>
                <li className="is-active"><Link to="/services/category1" aria-current="page">草坪工程</Link></li>
              </ul>
            </nav>

            <div className="service-content is-clearfix">
                <div className="columns is-variable is-3-mobile is-4-tablet is-multiline is-clearfix">
                  <div className="column is-half-tablet is-one-third-desktop">
                    <div className="card pb-4">
                      <div className="card-image">
                        <Img fluid={data.s1Image.childImageSharp.fluid} className="" alt=""/>
                      </div>

                      <div className="card-content">
                        <h2 className="service-title px-4 mb-2">草地修剪</h2>
                          <article className="content px-4">
                            <p>配備相關工具及安全設施，如剪草機及護面罩，為客戶以最快捷又安全的情況進行草地修剪。</p>
                          </article>
                      </div>

                      <div className="card-footer"></div>
                    </div>
                  </div>

                  <div className="column is-half-tablet is-one-third-desktop">
                    <div className="card pb-4">
                      <div className="card-image">
                        <Img fluid={data.s2Image.childImageSharp.fluid} className="" alt=""/>
                      </div>

                      <div className="card-content">
                        <h2 className="service-title px-4 mb-2">舖設草皮</h2>
                          <article className="content px-4">
                            <p>網球場，足球場，公園，各類大小型花園等由具經驗技工使用相關專門設備進行架設。</p>
                          </article>
                      </div>

                      <div className="card-footer"></div>
                    </div>
                  </div>

                  <div className="column is-half-tablet is-one-third-desktop">
                    <div className="card pb-2">
                      <div className="card-image">
                        <Img fluid={data.s3Image.childImageSharp.fluid} className="" alt=""/>
                      </div>

                      <div className="card-content">
                        <h2 className="service-title px-4 mb-2">斜坡割草</h2>
                          <article className="content px-4">
                            <p>具經驗且配備安全設備的專業人員，專為客戶在陡峭斜坡上進行除草。</p>
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

export default Category3
