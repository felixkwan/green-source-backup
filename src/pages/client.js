import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Clients from "../components/clients"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"


const Client = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ppl-1200.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      },
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
                <h3 className="page-sub-heading eng mb-3">For Our Society</h3>
                <h1 className="page-heading">客戶</h1>
                <p className="is-size-5 service-des">公司客戶包括仲量聯行 ,香港大學,世邦魏理仕有限公司 ,置邦物業管理有限公司 , 富城物業管理有限公司 和記黃埔及眾多屋苑,院校 提供園藝服務。</p>
                </div>
            </div>
            </div>
        </div>

        <div className="container is-fullhd page-title">
          <span className="page-title-text has-text-weight-bold">Connect</span>
      </div>

        <div className="page-body container is-fullhd">
          <div className="container is-widescreen">
            <nav className="breadcrumb px-3 " aria-label="breadcrumbs">
              <ul>
                <li><Link to="/">主頁</Link></li>
                <li className="is-active"><Link to="/client" aria-current="page">客戶</Link></li>
              </ul>
            </nav>

            <Clients/>
          </div>
        </div>

    </Layout>
  )
}

export default Client
