import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="header-bk top">
      <div className="header-wrapper contact-header">
        <div className="section">
          <h1 className="heading-title">Contact</h1>
        </div>
      </div>
    </div>

    <div className="contact-wrapper container">
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
            <article>
              <p>
              僕はこの50年の間、Greenから飛び立っていった多くのデザイナーたちが、

社会と戦う姿を見てきました。
僕がそしてDRAFTが歩んできた道のりは、意味のあることだったと信じることができます。
彼らと共に、どこまで社会とつながりを持つことができるのか？
これから先の活動が楽しみでなりません。
              </p>
            </article>
          </div>
        </div>

        <div className="contact-list">
            <table className="table contact-table">
              <tbody>
              <tr>
                <th>Company</th>
                <td>Green Source Gardening Art Co.LTD</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>G/f, No.8, Wilson Road, Jardine's Lookout </td>
              </tr>
              <tr>
                <th>Tel</th>
                <td>2670 0378 / 2697 6456</td>
              </tr>
              <tr>
                <th>Fax</th>
                <td>2696 9016</td>
              </tr>
              <tr>
                <th>Manager</th>
                <td>Nic Yip</td>
              </tr>
              <tr>
                <th>Mobile</th>
                <td>9585 3845</td>
              </tr>
              <tr>
                <th>Mail</th>
                <td>GreenSource@artiuminfo.com</td>
              </tr>

              </tbody>
            </table>
        </div>

        <div className="contact-footer container">
        </div>
    </div>

  </Layout>
)

export default Contact
