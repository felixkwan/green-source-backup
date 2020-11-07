import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Clients from "../components/clients"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Terms = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "manson-yim-6yS7w6HN8hY-unsplash.jpg" }) {
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

      <div id="client" className="header page-header">
        <section className="hero is-relative">
          <div className="hero-head">
            <Header />
          </div>
          <div className="hero-body">
            <div className="container">
              <h3 className="page-sub-heading eng mb-3">Terms and Condition</h3>
              <h1 className="page-heading">條款及細則</h1>
              <p className="is-size-5 heading-des">條款及細則只有英文版本, 並以英文為準。</p>
            </div>
          </div> 
        </section>
      </div>

        <div className="container is-fullhd page-title is-hidden-touch">
          <span className="page-title-text has-text-weight-bold">Connect</span>
        </div>

        <div className="page-body has-background-white">
      
          <div className="page-content container">
            <div className="container">
              <nav className="breadcrumb px-3 " aria-label="breadcrumbs">
                <ul>
                  <li><Link to="/"><FontAwesomeIcon icon={faHome} className="mr-2" />主頁</Link></li>
                  <li className="is-active"><Link to="/client" aria-current="page">客戶</Link></li>
                </ul>
              </nav>

              <Clients/>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Terms