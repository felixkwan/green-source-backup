import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import { useStaticQuery, graphql, Link } from "gatsby"

import BackgroundImage from 'gatsby-background-image-es5'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Recruit = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "recruit-bk.webp" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  
  return (
    <Layout>

      <div id="recruit" className="header page-header">
        <BackgroundImage className="hero is-medium has-background-desktop" fluid={data.desktop.childImageSharp.fluid}>
          <div className="hero-head">
            <Header />
          </div>
          <div className="hero-body">
            <div className="container">
              <h3 className="page-sub-heading eng mb-3 has-text-white">Recruit</h3>
              <h1 className="page-heading has-text-white">人才招聘</h1>
              <p className="is-size-5 service-des has-text-white">綠源園藝有限公司成立多年；積極尋找專業技術顧問及施工人才。期待你的加入。</p>
            </div>
          </div>     
        </BackgroundImage>
      </div>

        
        <div className="page-body container">

          <div className="container page-title">
            <span className="page-title-text has-text-weight-bold">Opportunities</span>
          </div>

          <div className="page-content">
            <nav className="breadcrumb px-3 " aria-label="breadcrumbs">
              <ul>
                <li><Link to="/"><FontAwesomeIcon icon={faHome} className="mr-2" />主頁</Link></li>
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
                <button className="recruit-btn is-size-5 has-text-weight-bold px-5">馬上應徵</button>
              </div>
            </div>  
          </div>
        </div>

    </Layout>
  )
}

export default Recruit
