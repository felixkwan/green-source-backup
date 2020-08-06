import React, { Component } from "react"

import { StaticQuery, graphql, Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"

import Language from "./language"


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
                <Link
                          className="navbar-item" to="/">
                            {data.site.siteMetadata.title}</Link>
                <button onClick={this.Toggle} className={this.state.toggle ? "burger navbar-burger is-active" : "burger navbar-burger"} aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </button>
              </div>
    
              <div className={this.state.toggle ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <Link to="/service/"><FormattedMessage id="header.service" /></Link>
                  </div>
                  <div className="navbar-item">
                    <Link
                       to="/client/">
                      <FormattedMessage id="header.clients" />
                    </Link>
                  </div>
      
                    <div className="navbar-item has-dropdown is-hoverable">
                      <span className="navbar-link">
                        <FormattedMessage id="header.support" />
                      </span>
      
                      <div className="navbar-dropdown">
                        <Link to="/support#equipment" className="navbar-item"><FormattedMessage id="support.equipment" /></Link>
                        <Link to="/support#deploy" className="navbar-item"><FormattedMessage id="support.deploy" /></Link>
                        <Link to="/support#human-resource" className="navbar-item"><FormattedMessage id="support.hr" /></Link>
                      </div>
                    </div>

                  <div className="navbar-item"><Link to="/sustain/"><FormattedMessage id="header.sustain" /></Link></div>
                  <div className="navbar-item"><Link to="/about/"><FormattedMessage id="header.about" /></Link></div>
                  <Language />
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
