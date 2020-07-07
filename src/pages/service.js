import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Service = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "water-640.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 512, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Service" />
      <div className="header-bk top">
        <div className="header-wrapper service-header">
          <div className="section">
            <h1 className="heading-title">Services</h1>
          </div>
        </div>
      </div>

      <div className="pages-wrapper service-wrapper mt-4 py-4 container clearfix">
        <div className="service-content my-5 pb-5 is-clearfix">
          <div className="container service-details">
            <div className="service-details-wrapper">
              <div className="columns">
                <div className="column is-half is-hidden-tablet">
                  <div className="service-img-thumb px-4">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                  </div>
                </div>

                <div className="column is-half">
                  <div className="container text-wrapper mt-4 px-4">
                    <h5 className="service-tag mb-2">Gardening</h5>
                    <h2 className="service-title">Maintenance</h2>
                    <article>
                      <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                    </article>
                  </div>
                </div>
                
                <div className="column is-half is-hidden-mobile">
                  <div className="service-img-thumb px-4">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-content my-5 pb-5 is-clearfix">
          <div className="container service-details">
            <div className="service-details-wrapper">
              <div className="columns is-multiline">
                <div className="column is-half">
                  <div className="container">
                    <div className="container service-img-tumb px-4">
                      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                    </div>
                  </div>
                </div>
                
                <div className="column is-half">
                  <div className="container">  
                    <div className="container text-wrapper mt-4 px-4">
                      <h5 className="service-tag mb-2">Gardening</h5>
                      <h2 className="service-title">Maintenance</h2>
                      <article>
                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-content my-5 pb-5 is-clearfix">
          <div className="container service-details">
            <div className="service-details-wrapper">
              <div className="columns">
                <div className="column is-half is-hidden-tablet">
                  <div className="service-img-thumb px-4">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                  </div>
                </div>
                
                <div className="column is-half">
                  <div className="container text-wrapper mt-4 px-4">
                    <h5 className="service-tag mb-2">Gardening</h5>
                    <h2 className="service-title">Maintenance</h2>
                    <article>
                      <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                    </article>
                  </div>
                </div>
                
                <div className="column is-half is-hidden-mobile">
                  <div className="service-img-thumb px-4">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-content my-5 pb-5 is-clearfix">
          <div className="container service-details">
            <div className="service-details-wrapper">
              <div className="columns is-multiline">
                <div className="column is-half">
                  <div className="container">
                    <div className="container service-img-thumb px-4">
                      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                    </div>
                  </div>
                </div>
                
                <div className="column is-half">
                  <div className="container">  
                    <div className="container text-wrapper mt-4 px-4">
                      <h5 className="service-tag mb-2">Gardening</h5>
                      <h2 className="service-title">Maintenance</h2>
                      <article>
                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                      </article>
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

export default Service
