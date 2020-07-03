import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cases from "../components/cases"

const Clients = () => (
  <Layout>
    <SEO title="Clients" />

    <div className="header-bk top">
      <div className="header-wrapper client-header">
        <div className="section">
          <h1 className="heading-title">Clients</h1>
        </div>
      </div>
    </div>

    <div className="pages-wrapper client-wrapper container">
      <div className="paragraph section-text">
        <div className="container">
          <article>
            <p>
              たくさんのこだわりと人の手をかけた我が家のアスパラガス。
              香り高いアスパラガスはシャキシャキと歯ざわりがよく、噛むほどに甘みが広がります。
              一本そのまま茹でるだけでも美味しくお召し上がりいただける自信作です。ぜひご賞味ください。
              ひとつひとつ人の手で選別し、丁寧に包装して皆さんの食卓にお届けします。
            </p>
          </article>
        </div>
      </div>
    </div>
    <Cases></Cases>

  </Layout>
)

export default Clients
