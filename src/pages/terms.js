import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Clients from "../components/clients"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Terms = () => {

  
  return (
    <Layout>

      <div id="terms" className="header page-header">
        <section className="hero is-relative has-background-gradient-green">
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

        <div className="page-body has-background-white">
      
          <div className="page-content container">
            <div className="container">
              <nav className="breadcrumb px-3 " aria-label="breadcrumbs">
                <ul>
                  <li><Link to="/"><FontAwesomeIcon icon={faHome} className="mr-2" />主頁</Link></li>
                  <li className="is-active"><Link to="/terms" aria-current="page">條款及細則</Link></li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Terms