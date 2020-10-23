import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


const ContactUs = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ppl-1200.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      aboutImage: file(relativePath: { eq: "health-1200.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <Layout>
      <Header/>
        <div className="container">
            <div className="page-header">
            <div className="hero is-medium">
                <div className="hero-body">
                <h1 className="page-sub-heading">Recuit</h1>
                <h3 className="page-heading chin">信譽第一,品質至上,追求完美,不斷創新,為客戶提供高品質的服務。</h3>
                <p>保養服隊由多名專業及有經驗的人員組成，服務對象涵蓋屋苑，校園，公私營機構，公園</p>
                </div>
            </div>
            </div>
            <div className="page-title">
            <span>Opportunities</span>
            </div>
        </div>

        <div className="page-body contact-body container">
          <div className="table-title">
            <h3>Company Info</h3>
          </div>
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <th><abbr title="AddressChin">Address Chinese</abbr></th>
                <td>Team</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
              <th><abbr title="AddressEng">Address English</abbr></th>
                <td>Team</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th><abbr title="Contact1">Contact</abbr></th>
                <td>Nic Yip</td>
                <th><abbr title="Number1">Number</abbr></th>
                <td>9585-3845</td>
              </tr>
              <tr>
                <th><abbr title="Contact2">Contact</abbr></th>
                <td>Jay Cheung</td>
                <th><abbr title="Number2">Number</abbr></th>
                <td>6996-5240</td>
              </tr>
              <tr>
                <th><abbr title="Mail">Mail</abbr></th>
                <td>gsgardening@yahoo.com</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th><abbr title="Tel">Tel</abbr></th>
                <td>2670-0378</td>
                <th><abbr title="Fax">Fax</abbr></th>
                <td>2670-9016</td>
              </tr>
            </tbody>
          </table>
        </div>

    </Layout>
  )
}

export default ContactUs
