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

        <div className="page-body recruit-body container">

          <nav className="breadcrumb px-3 " aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><Link to="/services/category1" aria-current="page">Service 1</Link></li>
            </ul>
          </nav>

          <div className="recruit-post">
            <div className="table-title">
              <h3>Open</h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <th><abbr title="Position">Position</abbr></th>
                  <th>Team</th>
                </tr>
                <tr>
                  <th><abbr title="Work">Work</abbr></th>
                  <th>Maintenance</th>
                </tr>
                <tr>
                  <th><abbr title="Requirement">Requirement</abbr></th>
                  <th>Onsite work</th>
                </tr>
                <tr>
                  <th><abbr title="Type">Duty Type</abbr></th>
                  <th>Full Time / Part Time</th>
                </tr>
                <tr>
                  <th><abbr title="Time">Time</abbr></th>
                  <th>From 0900 to 1700</th>
                </tr>
                <tr>
                  <th><abbr title="Salary">Salary</abbr></th>
                  <th>Discuss at interview</th>
                </tr>
              </tbody>
            </table>
            <div className="recruit-btn">
              <button>Apply Now</button>
            </div>
          </div>  
        </div>

    </Layout>
  )
}

export default Recruit
