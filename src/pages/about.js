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
      placeholderImage: file(relativePath: { eq: "water-640-2.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      aboutImage: file(relativePath: { eq: "hongkong-1920-21-9.jpg" }) {
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
      <SEO title="About" />
      <div className="header-bk top">
        <div className="header-wrapper contact-header">
          <div className="section">
            <h1 className="heading-title">About Us</h1>
          </div>
        </div>
      </div>

      <div className="about-wrapper pages-wrapper mt-6 container">

        <div className="about-content my-5 pb-5 is-clearfix">
            <div className="columns is-multiline mb-6">
              <div className="column is-12">
                <div className="container mt-2 px-3 py-3 section-text">
                  <h2 className="about-title mb-5">Green Source Gardening Art Co.LTD</h2>
                    <article class="mb-3">
                      <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                    </article>
                </div>
              </div>
              <div className="column is-12">
                <div className="about-img-thumb mx-2 px-4">
                  <Img fluid={data.aboutImage.childImageSharp.fluid} />
                </div>
              </div>
              <div className="column is-half">
                <div className="about-details-wrapper mx-2 px-4 py-4">
                  <h3 className="about-title mb-5">What we make</h3>
                  <article class="mb-3">
                    <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                  </article>
                </div>
              </div>
              <div className="column is-half">
                <div className="about-details-wrapper mx-2 px-4 py-4">
                  <h3 className="about-title mb-5">What gardening means</h3>
                  <article class="mb-3">
                    <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                  </article>
                </div>
              </div>
            </div>
        </div>
      
        <div className="about-content my-5 pb-6 is-clearfix">
          <div className="container contact-details">
            <div className="about-details-wrapper">
             <div className="columns">
                <div className="column is-half">
                  <div className="about-img-thumb mx-2 px-4">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                  </div>
                </div>
                <div className="column is-half">
                  <div className="container text-wrapper mx-2 mt-4 px-4">
                    <h2 className="about-title mb-5">Hong Kong</h2>
                    <article class="mb-5 pr-6">
                      <p>Contact our client team to talk about Gardening products and services.</p>
                    </article>
                    <div className="columns is-mobile address is-gapless mb-2 pb-2">
                      <div className="column is-1 table-icon"><FontAwesomeIcon icon={faMapMarkedAlt} /></div>
                      <div className="column is-10">G/f, No.8, Wilson Road, Jardine's Lookout </div>
                    </div>
                    <div className="columns is-mobile tel is-gapless mb-2 pb-2">
                      <div className="column is-1 table-icon"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                      <div className="column is-10">2670 0378 / 2697 6456</div>
                    </div>
                    <div className="columns is-mobile fax is-gapless mb-2 pb-2">
                      <div className="column is-1 table-icon"><FontAwesomeIcon icon={faFax} /></div>
                      <div className="column is-10">2696 9016</div>
                    </div>

                    <div className="columns is-mobile manager is-gapless mb-2 pb-2">
                      <div className="column is-1 table-icon"><FontAwesomeIcon icon={faAddressCard} /></div>
                      <div className="column is-10">Nic Yip</div>
                    </div>

                    <div className="columns is-mobile mobile is-gapless mb-2 pb-2">
                      <div className="column is-1 table-icon"><FontAwesomeIcon icon={faMobile} /></div>
                      <div className="column is-10">9585 3845</div>
                    </div>

                    <Link to="https://www.google.com" className="contact-link py-5" >
                      GreenSource@artiuminfo.com 
                      <FontAwesomeIcon icon={faChevronRight} className="arrow ml-1 pt-1" />
                    </Link>
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

export default About
