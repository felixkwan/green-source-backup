import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Service = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "service-1440.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
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

      <div className="pages-wrapper service-wrapper container clearfix">
        <div className="service-content">
          <div className="container service-details">
            <div className="service-details-wrapper">
              <div className="columns is-multiline">
                <div className="column is-half">
                  <div id="item-1" className="container">
                    <h2 className="service-title">Design & Build</h2>
                    <div className="container service-detail-img">
                      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                    </div>
                    <div className="container text-wrapper">
                      <article>
                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                      </article>
                    </div>
                  </div>
                </div>
                
                <div className="column is-half">
                  <div id="item-2" className="container">
                  <h2 className="service-title">Maintenance</h2>
                    <div className="tile is-ancestor">
                      <div className="tile is-vertical">
                        <div className="tile is-parent">
                          <div className="tile is-child">
                            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                          </div>
                        </div>
                        <div className="tile is-parent">
                          <div className="tile is-child">
                            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                          </div>
                          <div className="tile is-child">
                            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container text-wrapper">
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

        <div className="service-content">
          <div className="container service-details">
            <div className="service-details-wrapper">
              <div className="columns">
                <div className="column is-half">
                  <div id="item-3" className="container">
                    <h2 className="service-title">Water Management</h2>
                    <div className="container service-detail-img">
                        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                    </div>
                    <div className="container text-wrapper">
                      <article>
                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                      </article>
                    </div>
                  </div>

                  <div id="item-3-1" className="container sub-item">
                    <h3 className="service-title">Water Flow Method 1</h3>
                    <div className="container text-wrapper">
                      <article>
                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                      </article>
                    </div>
                  </div>

                  <div id="item-3-2" className="container sub-item">
                    <h3 className="service-title">Water Flow Method 2</h3>
                    <div className="container text-wrapper">
                      <article>
                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                      </article>
                    </div>
                  </div>
                </div>

                <div className="column is-half">
                  <div id="item-4" className="container">
                    <h2 className="service-title">Water Tanks and Irrigation Systems</h2>
                    <div className="container service-detail-img">
                        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                    </div>
                    <div className="container text-wrapper">
                      <article>
                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
                      </article>
                    </div>
                  </div>

                  <div id="item-4-1" className="container sub-item">
                    <h3 className="service-title">System 1</h3>
                    <div className="container text-wrapper">
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
