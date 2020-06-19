import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

import "./global-style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="header-bk top">
      <div className="header-wrapper index-header">
        <div className="section is-medium">
          <h1 className="heading-title">Create and maintain a Clean & Green environment for the society</h1>
        </div>
      </div>
    </div>

    <div className="block-main blocks">
      <div className="container block-title">
        <h4 className="section-subtitle">Showcases</h4>
        <h2 className="section-title">About Our Garden</h2>
        <div className="divider"></div>
      </div>

      <div className="container main-content">
        <div className="main-img"></div>
        <div className="container text-wrapper">
          <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。</p>
        </div>
      </div>

    </div>

    <div className="block-info blocks container">

      <div className="container block-title">
        <h4 className="section-subtitle">Info</h4>
        <h2 className="section-title">How We Create</h2>
        <div className="divider"></div>
      </div>

      <div className="info-content info info-1">
        <div className="img-wrapper on-right"></div>
        <div className="columns">

          <div className="text-wrapper column is-half">
            <div className="info-title">
              <div className="title-number"><h2>01.</h2></div>
              <div className="title-text"><h3>Our Land</h3></div>
            </div>
            <article>
              <p>
                高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。
              </p>
            </article>
          </div>
          <div className="container space column is-half"></div>
        </div>

      </div>

      <div className="info-content info info-2">
        <div className="img-wrapper on-left"></div>
        <div className="columns">
          <div className="space column is-half"></div>
          <div className="text-wrapper column is-half">
            <div className="info-title">
              <div className="title-number"><h2>02.</h2></div>
              <div className="title-text"><h3>Water</h3></div>
            </div>
            <article>
              <p>
                高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。
              </p>
            </article>
          </div>
        </div>

      </div>
    </div>

    <div className="block-service blocks container">
      <div className="container block-title">
        <h4 className="section-subtitle">自然意向</h4>
        <h2 className="section-title">新的園藝樣貌出現</h2>
        <div className="divider"></div>
      </div>

      <div className="service-content">
        <div className="columns">
          <div className="service-img column is-half"></div>
          <div className="text-wrapper column is-half">
            <div className="service-title">
              <h4>四季有著截然不同的風情</h4>
            </div>
            <div className="container">
            <article>
              <p>
                高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。真面目にアスパラガスと向き合うのは、それぞれライフスタイルが異なるたくさんのスタッフ。おいしいアスパラガスをつくることは地域で雇用を生み出すことにもつながりました。
              </p>
            </article>
            </div>
            <Link to="/service/" className="primary-button">Check Our Services</Link>
          </div>
        </div>
      </div>

    </div>

    <div className="block-case section blocks">
      <div className="container block-title">
        <h4 className="section-subtitle">Showcases</h4>
        <h2 className="section-title">About Our Garden</h2>
        <div className="divider"></div>
      </div>
      
      <div className="showcase">
        <div className="columns is-gapless">
          <div className="column">
            <div className="container case">
              <div className="case-content-wrapper">
                <div className="case-content">
                  <h3 className="case-title">School</h3>
                  <div className="case-info">
                    <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="column">
            <div className="container case">
              <div className="case-content-wrapper">
                <div className="case-content">
                  <h3 className="case-title">School</h3>
                  <div className="case-info">
                    <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="showcase">
        <div className="columns is-gapless">
          <div className="column">
            <div className="container case">
              <div className="case-content-wrapper">
                <div className="case-content">
                  <h3 className="case-title">School</h3>
                  <div className="case-info">
                    <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="column">
            <div className="container case">
              <div className="case-content-wrapper">
                <div className="case-content">
                  <h3 className="case-title">School</h3>
                  <div className="case-info">
                    <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/client/" className="primary-button button-centered">View More</Link>
    </div>

    <div className="block-contact">
      <div className="container">

      </div>
    </div>

  </Layout>
)

export default IndexPage
