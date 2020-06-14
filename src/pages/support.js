import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Support = () => (
  <Layout>
    <SEO title="Support" />
    <div className="header-bk top">
      <div className="header-wrapper sustain-header">
        <div className="section">
          <h1 className="heading-title">Support</h1>
        </div>
      </div>
    </div>

    <div className="pages-wrapper support-wrapper">
       <div className="columns row-1">

        <div className="column">
          <div className="support-content vehicle-img">
            <div className="support-content-text">
               <div id="vehicles" className="container">
                 <p>Vehicles</p>
               </div>
             </div>
           </div>
        </div>

        <div className="column">
          <div className="support-content equip-img">
            <div className="support-content-text">
                <div id="equipment" className="container">
                  <p>Equipment</p>
                </div>
            </div>
          </div>
        </div>

       </div>

       <div className="columns row-2">

        <div className="column">
          <div className="support-content deploy-img">
            <div className="support-content-text">
               <div id="deploy" className="container">
                 <p>Vehicles</p>
               </div>
             </div>
           </div>
        </div>

        <div className="column">
          <div className="support-content human-img">
            <div className="support-content-text">
              <div id="human-resources" className="container">
                <h2>Human resources</h2>
              </div>
            </div>
          </div>
        </div>

       </div>
    </div>

  </Layout>
)

export default Support
