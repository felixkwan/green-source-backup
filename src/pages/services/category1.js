import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faMobile, faFax, faPhoneAlt, faMapMarkedAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Category1 = () => {
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
  const intl = useIntl();
  
  return (
    <Layout>
      <div className="container">
        <div className="page-header">
          <div className="hero is-medium">
            <div className="hero-body">
              <h1 className="page-title">Service</h1>
              <h3>信譽第一,品質至上,追求完美,不斷創新,為客戶提供高品質的服務。</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="page-body mt-6 container">

        <nav class="breadcrumb px-3" aria-label="breadcrumbs">
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </nav>

        <div className="service-content pb-5 is-clearfix">
            <div className="columns is-3 is-multiline">
              <div className="column is-half-tablet is-one-third-widescreen">
                <div className="service-thumb">
                  <Img fluid={data.aboutImage.childImageSharp.fluid} />
                </div>
                <div className="container mt-2 px-4 py-3 section-text">
                  <h2 className="service-title mb-5">Service 1</h2>
                    <article className="mb-3">
                      <p>Hello world</p>
                    </article>
                </div>
              </div>

              <div className="column is-half-tablet is-one-third-widescreen">
                <div className="service-thumb">
                  <Img fluid={data.aboutImage.childImageSharp.fluid} />
                </div>
                <div className="container mt-2 px-4 py-3 section-text">
                  <h2 className="service-title mb-5">Service 1</h2>
                    <article className="mb-3">
                      <p>Hello world</p>
                    </article>
                </div>
              </div>

              <div className="column is-half-tablet is-one-third-widescreen">
                <div className="service-thumb">
                  <Img fluid={data.aboutImage.childImageSharp.fluid} />
                </div>
                <div className="container mt-2 px-4 py-3 section-text">
                  <h2 className="service-title mb-5">Service 1</h2>
                    <article className="mb-3">
                      <p>Hello world</p>
                    </article>
                </div>
              </div>
              
            </div>
        </div>
      
        <div className="about-content my-5 pb-6 is-clearfix">
          <div className="container contact-details">
            <div className="">
                    <Link to="https://www.google.com" className="contact-link py-5" >
                      GreenSource@artiuminfo.com 
                      <FontAwesomeIcon icon={faChevronRight} className="arrow ml-1 pt-1" />
                    </Link>
            </div>
          </div>
        </div>

      </div>

    </Layout>
  )
}

export default Category1
