import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image-es5'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const ContactUs = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "contact-bk.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  
  return (
    <Layout>
      
      <div id="contactUs" className="header contact-header">
        <BackgroundImage className="hero is-medium has-background-contact" fluid={data.desktop.childImageSharp.fluid}>
          <div className="hero-head">
            <Header />
          </div>
          <div className="hero-body">
            <div className="container">
            <h4 className="heading-chin has-text-weight-semibold">
              品質至上，
            </h4>
            <h4 className="heading-chin has-text-weight-semibold">
              提供安全、綠化環境。
            </h4>
            <h1 className="heading-us eng mt-2 is-size-3-mobile">
                Professional,
            </h1>
            <h1 className="heading-us eng mt-2 is-size-3-mobile">
              Feel Safe,Live Green.
            </h1>
            </div>
          </div>     
        </BackgroundImage>
      </div>

        <div className="page-body has-background-white">
          <div className="page-content container">
            <nav className="breadcrumb px-3 " aria-label="breadcrumbs">
              <ul>
                <li><Link to="/"><FontAwesomeIcon icon={faHome} className="mr-2" />主頁</Link></li>
                <li className="is-active"><Link to="/contactUs" aria-current="page">聯絡我們</Link></li>
              </ul>
            </nav>
      
            <div className="table-section">
              <div className="table-title px-3 py-2 has-text-centered">
                <h3 className="eng is-inline-block">Company Information</h3>
              </div>
              <section className="hero">
                <div className="hero-body table-wrapper">
                  <table className="table">
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="has-text-left">公司地址</th>
                        <td className="is-hidden-mobile">渣甸山衛信道8號地下</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>渣甸山衛信道8號地下</td>
                      </tr>
                      <tr>
                        <th className="has-text-left">Address</th>
                        <td className="is-hidden-mobile">G/f No.8 Wilson Road Jardine's Lookout</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>G/f No.8 Wilson Road Jardine's Lookout</td>
                      </tr>
                      <tr className="is-hidden-mobile">
                        <th className="has-text-left">聯絡人電話</th>
                        <td>9585-3845</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <th className="has-text-left">聯絡人電話</th>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>9585-3845</td>
                      </tr>

                      <tr className="is-hidden-mobile">
                        <th className="has-text-left">聯絡人電話</th>
                        <td>6996-5240</td>
                      </tr>

                      <tr className="is-hidden-tablet">
                        <th className="has-text-left">聯絡人電話</th>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>6996-5240</td>
                      </tr>
                    
                      <tr>
                        <th className="has-text-left">電郵地址</th>
                        <td className="is-hidden-mobile">gsgardening@yahoo.com</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>gsgardening@yahoo.com</td>
                      </tr>

                      <tr className="is-hidden-mobile">
                        <th className="has-text-left">電話</th>
                        <td>2670-0378</td>
                        <th className="has-text-left">Fax</th>
                        <td>2670-9016</td>
                      </tr>

                      <tr className="is-hidden-tablet">
                        <th className="has-text-left">電話</th>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>2670-0378</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <th className="has-text-left">Fax</th>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>2670-9016</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="contact-pding-bottom container"></div>
            </div>

          </div>
        </div>
        
    </Layout>
  )
}

export default ContactUs
