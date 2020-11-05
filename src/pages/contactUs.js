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
          fluid(quality: 100, maxWidth: 1440) {
            ...GatsbyImageSharpFluid
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

        <div className="page-body container">
          <div className="page-content">
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
                <div className="hero-body">
                  <table className="table is-fullwidth">
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Address Chinese</th>
                        <td className="is-hidden-mobile">Team</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>Team</td>
                      </tr>
                      <tr>
                        <th>Address English</th>
                        <td className="is-hidden-mobile">Maintenance</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>Maintenance</td>
                      </tr>
                      <tr>
                        <th>Contact</th>
                        <td>Nic Yip</td>
                        <th className="is-hidden-mobile">Number</th>
                        <td className="is-hidden-mobile">9585-3845</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <th>Number</th>
                        <td>9585-3845</td>
                      </tr>
                      <tr>
                        <th>Contact</th>
                        <td>Jay Cheung</td>
                        <th className="is-hidden-mobile">Number</th>
                        <td className="is-hidden-mobile">6996-5240</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <th>Number</th>
                        <td>6996-5240</td>
                      </tr>
                    
                      <tr>
                        <th>Mail</th>
                        <td className="is-hidden-mobile">gsgardening@yahoo.com</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>gsgardening@yahoo.com</td>
                      </tr>

                      <tr>
                        <th>Tel</th>
                        <td>2670-0378</td>
                        <th className="is-hidden-mobile">Fax</th>
                        <td className="is-hidden-mobile">2670-9016</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <th>Fax</th>
                        <td>2670-9016</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

          </div>
        </div>
        
    </Layout>
  )
}

export default ContactUs
