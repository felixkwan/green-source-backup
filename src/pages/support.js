import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Support = () => {

  const data = useStaticQuery(graphql`
    query {
      vehicleImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
  <Layout>
    <SEO title="Support" />
    <div className="header-bk top">
      <div className="header-wrapper sustain-header">
        <div className="section">
          <h1 className="heading-title">Support</h1>
        </div>
      </div>
    </div>

    <div className="pages-wrapper support-wrapper">

    <div className="container block-title">
        <h2 className="section-title sustain-footer-title">Equipment Support</h2>
        <div className="paragraph section-text">
            <article>
              <p>
              たくさんのこだわりと人の手をかけた我が家のアスパラガス。
香り高いアスパラガスはシャキシャキと歯ざわりがよく、噛むほどに甘みが広がります。
一本そのまま茹でるだけでも美味しくお召し上がりいただける自信作です。ぜひご賞味ください。
ひとつひとつ人の手で選別し、丁寧に包装して皆さんの食卓にお届けします。
              </p>
            </article>
        </div>
        <div className="divider"></div>
      </div>


       <div id="vehicles" className="section row-1">
        <div className="hero">
          <div className="hero-body">
            <div className="columns">
                <div className="column is-one-third">
                 <Img fluid={data.vehicleImage.childImageSharp.fluid} />
                </div>

                <div className="column support-content vehicle-img">
                  <div className="support-content-text">
                    <div className="container">
                      <div className="bk-icon vehicle-icon"></div>
                      <h3 className="section-title align-left">Vehicles</h3>
                      <article>
                        <p>
                          高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
       </div>

       <div id="equipment" className="section row-2">
        <div className="hero">
          <div className="hero-body">
            <div className="columns">
                <div className="column is-one-third">
                 <Img fluid={data.vehicleImage.childImageSharp.fluid} />
                </div>

                <div className="column support-content vehicle-img">
                  <div className="support-content-text">
                    <div className="container">
                      <div className="bk-icon equip-icon"></div>
                      <h3 className="section-title align-left">Equipment</h3>
                      <article>
                        <p>
                          高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
       </div>

       <div id="deploy" className="section row-3">
        <div className="hero">
          <div className="hero-body">
            <div className="columns">
                <div className="column is-one-third">
                 <Img fluid={data.vehicleImage.childImageSharp.fluid} />
                </div>

                <div className="column support-content vehicle-img">
                  <div className="support-content-text">
                    <div className="container">
                      <div className="bk-icon deploy-icon"></div>
                      <h3 className="section-title align-left">Deploy</h3>
                      <article>
                        <p>
                          高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
       </div>

       <div id="human-resource" className="section row-4">
        <div className="hero">
          <div className="hero-body">
            <div className="columns">
                <div className="column is-one-third">
                 <Img fluid={data.vehicleImage.childImageSharp.fluid} />
                </div>

                <div className="column support-content vehicle-img">
                  <div className="support-content-text">
                    <div className="container">
                      <div className="bk-icon society-icon"></div>
                      <h3 className="section-title align-left">Human Resources</h3>
                      <article>
                        <p>
                          高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。
                        </p>
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

export default Support
