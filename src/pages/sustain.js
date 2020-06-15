import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

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

    <div className="sustain-wrapper pages-wrapper container">
      <div className="tab-wrapper">
        <Tabs>

        <div label="People" className="container">
          <div className="columns tap-content-inner">
            <div className="column">
                <h2>People Development</h2>
            </div>
            <div className="column">
              <div className="paragraph">
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

          <div className="container">
            <div className="paragraph-img ppl-img"></div>
          </div>

        </div>


          <div label="Health" className="container">
            <div className="columns tap-content-inner">
              <div className="column">
                  <h2>Health & Events</h2>
              </div>
              <div className="column">
                <div className="paragraph">
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

            <div className="container">
              <div className="paragraph-img health-img"></div>
            </div>

          </div>

          <div label="Society" className="container">
            <div className="columns tap-content-inner">
              <div className="column">
                  <h2>Social Responsibility</h2>
              </div>
              <div className="column">
                <div className="paragraph">
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

            <div className="container">
              <div className="paragraph-img society-img"></div>
            </div>

          </div>

        </Tabs>
      </div>

      <div className="container block-title">
        <h2 className="section-title sustain-footer-title">Combine 3 Elements</h2>
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
          <div className="container sustain-footer">
            <div className="columns is-gapless">
              <div className="column">
                  <div className="sustain-img sustain-img-1"></div>
              </div>
              <div className="column">
                  <div className="sustain-img sustain-img-2"></div>
              </div>
              <div className="column">
                  <div className="sustain-img sustain-img-3"></div>
              </div>
            </div>

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
            <Link to="/service" className="primary-button button-centered">Check Our Services</Link>
          </div>
      </div>

    </div>

  </Layout>
)

export default Sustainability
