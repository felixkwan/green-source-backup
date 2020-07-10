import React, { Component } from "react"

import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import Link from "gatsby-plugin-transition-link"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

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
                <AniLink  cover
                          to="/"
                          direction="down"
                          duration={1.5}
                          bg="
                            center / cover   /* position / size */
                            no-repeat        /* repeat */
                            fixed            /* attachment */
                            padding-box      /* origin */
                            content-box      /* clip */
                            white            /* color */
                          "
                          className="navbar-item" to="/">
                            {data.site.siteMetadata.title}</AniLink>
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
                    <AniLink
                      cover
                      to="/"
                      direction="down"
                      duration={1.5}
                      bg="
                        center / cover   /* position / size */
                        no-repeat        /* repeat */
                        fixed            /* attachment */
                        padding-box      /* origin */
                        content-box      /* clip */
                        white            /* color */
                      " to="/client/">
                      <FormattedMessage id="header.clients" />
                    </AniLink>
                  </div>
      
                    <div className="navbar-item has-dropdown is-hoverable">
                      <span className="navbar-link">
                        <FormattedMessage id="header.support" />
                      </span>
      
                      <div className="navbar-dropdown">
                        <Link to="/support#vehicles" className="navbar-item"><FormattedMessage id="support.vehicles" /></Link>
                        <Link to="/support#equipment" className="navbar-item"><FormattedMessage id="support.equipment" /></Link>
                        <Link to="/support#deploy" className="navbar-item"><FormattedMessage id="support.deploy" /></Link>
                        <Link to="/support#human-resource" className="navbar-item"><FormattedMessage id="support.hr" /></Link>
                      </div>
                    </div>

                  <div className="navbar-item"><Link to="/sustain/"><FormattedMessage id="header.sustain" /></Link></div>
                  <div className="navbar-item"><Link to="/about/"><FormattedMessage id="header.about" /></Link></div>
                  <div className="navbar-item"><Language /></div>
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
