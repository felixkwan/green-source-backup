import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


const Recruit = () => {
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
              <h3 className="page-sub-heading eng mb-3">Recruit</h3>
              <h1 className="page-heading">人才招聘</h1>
              <p className="is-size-5 service-des">綠源園藝有限公司成立多年；積極尋找專業技術顧問及施工人才。期待你的加入</p>
              </div>
          </div>
        </div>
      </div>

        <div className="container is-fullhd page-title ">
          <span className="page-title-text has-text-weight-bold">Opportunities</span>
        </div>

        <div className="page-body recruit-body container">

          <nav className="breadcrumb px-3 " aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">主頁</Link></li>
              <li className="is-active"><Link to="/recruit" aria-current="page">人才招聘</Link></li>
            </ul>
          </nav>

          <div className="table-section">
            <div className="table-title px-3 py-2 has-text-centered">
              <h3 className="eng is-inline-block">Open</h3>
            </div>
            <section className="hero">
              <div className="hero-body">
                <table className="table is-fullwidth">
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Position</th>
                      <td className="is-hidden-mobile">Team</td>
                    </tr>
                    <tr className="is-hidden-tablet">
                      <td>Team</td>
                    </tr>
                    <tr>
                      <th>Work</th>
                      <td className="is-hidden-mobile">Maintenance</td>
                    </tr>
                    <tr className="is-hidden-tablet">
                      <td>Maintenance</td>
                    </tr>
                    <tr>
                      <th>Requirement</th>
                      <td className="is-hidden-mobile">Onsite work</td>
                    </tr>
                    <tr className="is-hidden-tablet">
                      <td>Onsite work</td>
                    </tr>
                    <tr>
                      <th>Duty Type</th>
                      <td className="is-hidden-mobile">Full Time / Part Time</td>
                    </tr>
                    <tr className="is-hidden-tablet">
                      <td>Full Time / Part Time</td>
                    </tr>
                    <tr>
                      <th>Time</th>
                      <td className="is-hidden-mobile">From 0900 to 1700</td>
                    </tr>
                    <tr className="is-hidden-tablet">
                      <td>From 0900 to 1700</td>
                    </tr>
                    <tr>
                      <th>Salary</th>
                      <td className="is-hidden-mobile">Discuss at interview</td>
                    </tr>
                    <tr className="is-hidden-tablet">
                      <td>Discuss at interview</td>
                    </tr>
                  </tbody>
                  <tfoot>
                  </tfoot>
                </table>
              </div>
            </section>
            <div className="table-bottom has-text-centered">
              <button className="recruit-btn is-size-5 has-text-weight-medium px-5">Apply Now</button>
            </div>
          </div>  
        </div>

    </Layout>
  )
}

export default Recruit
