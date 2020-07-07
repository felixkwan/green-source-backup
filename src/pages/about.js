import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Link from "gatsby-plugin-transition-link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faMobile, faFax, faPhoneAlt, faMapMarkedAlt, faEnvelopeOpen, faGlobeAsia, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const About = () => {


  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "flower-1920.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 512) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <Layout>
      <SEO title="About" />
      <div className="header-bk top">
        <div className="header-wrapper contact-header">
          <div className="section">
            <h1 className="heading-title">About Us</h1>
          </div>
        </div>
      </div>

      <div className="about-wrapper pages-wrapper container">

        <div className="about-content my-5 pb-5 is-clearfix">

        </div>
      
        <div className="about-content my-5 pb-5 is-clearfix">
          <div className="container contact-details">
            <div className="about-details-wrapper">
             <div className="columns">
                <div className="column is-half">
                  <div className="about-img-thumb px-4">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                  </div>
                </div>
                <div className="column is-half">
                  <div className="container text-wrapper mt-4 px-4">
                    <h2 className="about-title mb-4">Maintenance</h2>
                    <article class="mb-5">
                      <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                    </article>
                    <Link to="https://www.google.com" className="contact-link py-2" >
                      GreenSource@artiuminfo.com 
                      <FontAwesomeIcon icon={faChevronRight} className="arrow ml-1 pt-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="contact-list">
            <div className="container py-5 px-5 mb-6">
              <table className="table contact-table is-striped">
                <tbody>
                <tr>
                  <th className="table-title">Company</th>
                  <td className="table-icon"><FontAwesomeIcon icon={faGlobeAsia} /></td>
                  <td>Green Source Gardening Art Co.LTD</td>
                </tr>
                <tr>
                  <th className="table-title">Address</th>
                  <td className="table-icon"><FontAwesomeIcon icon={faMapMarkedAlt} /></td>
                  <td>G/f, No.8, Wilson Road, Jardine's Lookout </td>
                </tr>
                <tr>
                  <th className="table-title">Tel</th>
                  <td className="table-icon"><FontAwesomeIcon icon={faPhoneAlt} /></td>
                  <td>2670 0378 / 2697 6456</td>
                </tr>
                <tr>
                  <th className="table-title">Fax</th>
                  <td className="table-icon"><FontAwesomeIcon icon={faFax} /></td>
                  <td>2696 9016</td>
                </tr>
                <tr>
                  <th className="table-title">Manager</th>
                  <td className="table-icon"><FontAwesomeIcon icon={faAddressCard} /></td>
                  <td>Nic Yip</td>
                </tr>
                <tr>
                  <th className="table-title">Mobile</th>
                  <td className="table-icon"><FontAwesomeIcon icon={faMobile} /></td>
                  <td>9585 3845</td>
                </tr>
                </tbody>
              </table>
            </div>   
          </div>

      </div>

    </Layout>
  )
}

export default About
