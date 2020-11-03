import React, { Component } from "react"

import { StaticQuery, graphql, Link } from "gatsby"
import brandLogo from "../images/logo-gs-fine.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


class Header extends Component {
  state = {
    toggle:false
  }
  Toggle = () => {
      this.setState({toggle:!this.state.toggle})
  }

  render() {

    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <nav id="navbar" className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
              <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                  <img src={brandLogo} alt="" />
                </Link>
                <button onClick={this.Toggle} className={this.state.toggle ? "burger navbar-burger is-active" : "burger navbar-burger"} aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </button>
              </div>
    
              <div className={this.state.toggle ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable is-hidden-touch">
                      <span className="navbar-link">
                        服務項目
                      </span>
      
                      <div className="navbar-dropdown">
                        <Link to="/services/category1" className="navbar-item">園藝保養</Link>
                        <Link to="/services/category2" className="navbar-item">樹木移除</Link>
                        <Link to="/services/category3" className="navbar-item">草坪工程</Link>
                        <Link to="/services/category4" className="navbar-item">綠化工程</Link>
                      </div>
                    </div>

                    <div className="navbar-item">
                      <Link
                        to="/client/">
                        客戶
                      </Link>
                    </div>

                    <div className="navbar-item">
                      <Link
                        to="/recruit/">
                        人才招聘
                      </Link>
                    </div>

                    <div className="navbar-item">
                      <Link
                        to="/contactUs/">
                        聯絡我們
                      </Link>
                    </div>

                    <div className="navbar-item">
                      <Link className="whatsapp-btn is-size-6"
                        to="https://wa.me/85269965240">
                          <FontAwesomeIcon icon={faWhatsapp} className="ml-2 mr-2 is-size-5" />
                        立即查詢
                      </Link>
                    </div>
                </div>
              </div>

          </div>
        </nav>
        )}
    />

    ); 
  }
}

export default Header
