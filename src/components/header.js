import React, { Component } from "react"

import { StaticQuery, graphql, Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import Img from "gatsby-image";
import brandLogo from "../images/logo-gs-fine.svg";

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
          <nav id="navbar" className="navbar clearfix" role="navigation" aria-label="main navigation">
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
                    <div className="navbar-item has-dropdown is-hoverable">
                      <span className="navbar-link">
                        Services
                      </span>
      
                      <div className="navbar-dropdown">
                        <Link to="/services/category1" className="navbar-item">Category1</Link>
                        <Link to="/services/category1" className="navbar-item">Category1</Link>
                        <Link to="/services/category1" className="navbar-item">Category1</Link>
                      </div>
                    </div>

                    <div className="navbar-item">
                      <Link
                        to="/client/">
                        <FormattedMessage id="header.clients" />
                      </Link>
                    </div>

                    <div className="navbar-item">
                      <Link
                        to="/recruit/">
                        Recruit
                      </Link>
                    </div>

                    <div className="navbar-item">
                      <Link
                        to="/contact/">
                        Contact Us
                      </Link>
                    </div>

                    <div className="navbar-item whatsapp-btn">
                      <Link
                        to="https://wa.me/85269965240">
                        Whatsapp
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
