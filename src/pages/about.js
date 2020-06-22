import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="header-bk top">
      <div className="header-wrapper contact-header">
        <div className="section">
          <h1 className="heading-title">About Us</h1>
        </div>
      </div>
    </div>

    <div className="about-wrapper pages-wrapper container">
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
            <table className="table contact-table is-striped">
              <tbody>
              <tr>
                <th className="table-title">Company</th>
                <td className="table-icon"><i className="fi fi-asterisk"></i></td>
                <td>Green Source Gardening Art Co.LTD</td>
              </tr>
              <tr>
                <th className="table-title">Address</th>
                <td className="table-icon"><i className="fi fi-map"></i></td>
                <td>G/f, No.8, Wilson Road, Jardine's Lookout </td>
              </tr>
              <tr>
                <th className="table-title">Tel</th>
                <td className="table-icon"><i className="fi fi-phone"></i></td>
                <td>2670 0378 / 2697 6456</td>
              </tr>
              <tr>
                <th className="table-title">Fax</th>
                <td className="table-icon"><i className="fi fi-export"></i></td>
                <td>2696 9016</td>
              </tr>
              <tr>
                <th className="table-title">Manager</th>
                <td className="table-icon"><i className="fi fi-person"></i></td>
                <td>Nic Yip</td>
              </tr>
              <tr>
                <th className="table-title">Mobile</th>
                <td className="table-icon"><i className="fi fi-mobile-alt"></i></td>
                <td>9585 3845</td>
              </tr>
              <tr>
                <th className="table-title">Mail</th>
                <td className="table-icon"><i className="fi fi-comments"></i></td>
                <td>GreenSource@artiuminfo.com</td>
              </tr>

              </tbody>
            </table>
        </div>

        <div className="about-footer container">
        </div>
    </div>

  </Layout>
)

export default About
