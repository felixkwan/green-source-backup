import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Tabs from "../tabs/tabs"


const Sustainability = () => (

  <Layout>
    <SEO title="Sustainability" />
    <div className="header-bk top">
      <div className="header-wrapper sustain-header">
        <div className="section">
          <h1 className="heading-title">Sustainability</h1>
        </div>
      </div>
    </div>

    <div className="pages-wrapper container">
      <div className="tab-wrapper">
        <Tabs>

          <div label="People Development">
            People Development
          </div>


          <div label="Events">
            <div className="columns">
              <div className="column">
              </div>
              <div className="column">
                <div className="">
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
          </div>

          <div label="Social Responsibility">Social Responsibility</div>

        </Tabs>
      </div>
    </div>

  </Layout>
)

export default Sustainability
