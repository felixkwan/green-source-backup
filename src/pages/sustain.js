import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"


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
      </div>

      <div className="tab-wrapper">
        <div className="tab-content">
          <div label="People" className="container">
            <div className="container">
                <div className="paragraph-img ppl-img"></div>
            </div> 
            <div className="columns tap-content-inner">
              <div className="column is-offset-4 is-8">
                <div className="tab-title">
                  <h2>個人發展</h2>
                </div>
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
          </div>
        </div>

        <div className="tab-content">
          <div label="Health" className="container">
            <div className="container">
              <div className="paragraph-img health-img"></div>
            </div>
            <div className="columns tap-content-inner">
              <div className="column is-offset-4 is-8">
                <div className="tab-title">
                  <h2 className="health-title">健康與安全</h2>
                </div>
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
          </div>
        </div>

          <div className="tab-content">
            <div label="Society" className="container">
              <div className="container">
                <div className="paragraph-img society-img"></div>
              </div>
              <div className="columns tap-content-inner">
                <div className="column is-offset-4 is-8">
                  <div className="tab-title">
                    <h2>社會責任</h2>
                  </div>
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
            </div>
          </div>

          <div className="container sustain-footer">
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
            <AniLink cover
                  to="/"
                  direction="down"
                  duration={1.5}
                  bg="
                    center / cover   /* position / size */
                    no-repeat        /* repeat */
                    fixed            /* attachment */
                    padding-box      /* origin */
                    content-box      /* clip */
                    white            /* color */
                  "
                  to="/service"
                  className="primary-button button-centered">Check Our Services</AniLink>
          </div>
      </div>

    </div>

  </Layout>
)

export default Sustainability
