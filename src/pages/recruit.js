import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
        <section className="hero is-medium is-relative">
          <Img className="header-bk" fluid={data.desktop.childImageSharp.fluid}></Img>
          <div className="hero-head">
            <Header />
          </div>
          <div className="hero-body">
            <div className="container">
              <h3 className="page-sub-heading eng mb-3">Recruit</h3>
              <h1 className="page-heading">人才招聘</h1>
              <p className="is-size-5 heading-des">綠源園藝有限公司成立多年；積極尋找專業技術顧問及施工人才。期待你的加入。</p>
            </div>
          </div> 
        </section>
      </div>

        <div className="container is-fullhd page-title is-hidden-touch">
            <span className="page-title-text has-text-weight-bold">Opportunities</span>
        </div>
 
        <div className="page-body has-background-white">

          <div className="page-content container">
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
                  <table className="table">
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="has-text-left">職位</th>
                        <td className="is-hidden-mobile">園藝技工</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>園藝技工</td>
                      </tr>
                      <tr>
                        <th className="has-text-left">工作內容</th>
                        <td className="is-hidden-mobile">園藝保養 ,修剪植物、清理枯葉 、灌溉</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>園藝保養 ,修剪植物、清理枯葉 、灌溉</td>
                      </tr>
                      <tr>
                        <th className="has-text-left">要求條件</th>
                        <td className="is-hidden-mobile">具責任心，戶外工作 ,操作簡單設備如割草機</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>具責任心，戶外工作 ,操作簡單設備如割草機</td>
                      </tr>
                      <tr>
                        <th className="has-text-left">工作類型</th>
                        <td className="is-hidden-mobile">全職, 兼職</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>全職, 兼職</td>
                      </tr>
                      <tr>
                        <th className="has-text-left">工作時間</th>
                        <td className="is-hidden-mobile">早上9時 至 下午5時</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>早上9時 至 下午5時</td>
                      </tr>
                      <tr>
                        <th className="has-text-left">薪酬</th>
                        <td className="is-hidden-mobile">面議</td>
                      </tr>
                      <tr className="is-hidden-tablet">
                        <td>面議</td>
                      </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                  </table>
                </div>
              </section>
              <div className="table-bottom has-text-centered">
                <Link to="https://wa.me/85269965240" className="recruit-btn is-size-5 has-text-weight-bold px-5">馬上應徵</Link>
              </div>
            </div>

            <section className="container caption">
              <small className="has-text-grey pl-5">&#10040; 所有個人資料只會用於招聘用途。</small>
            </section>

          </div>
        </div>

    </Layout>
  )
}

export default Recruit
