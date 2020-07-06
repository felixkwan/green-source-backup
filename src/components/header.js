import React, { Component } from "react"

import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Link from "gatsby-plugin-transition-link"

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
                    <Link to="/service/">Service</Link>
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
                      Clients
                    </AniLink>
                  </div>
      
                    <div className="navbar-item has-dropdown is-hoverable">
                      <span className="navbar-link">
                        Support
                      </span>
      
                      <div className="navbar-dropdown">
                        <Link to="/support#vehicles" className="navbar-item">Vehicles</Link>
                        <Link to="/support#equipment" className="navbar-item">Equipment</Link>
                        <Link to="/support#deploy" className="navbar-item">Deploy</Link>
                        <Link to="/support#human-resource" className="navbar-item">Human Resources</Link>
                      </div>
                    </div>

                  <div className="navbar-item"><Link to="/sustain/">Sustainability</Link></div>
                  <div className="navbar-item"><Link to="/about/">About</Link></div>
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
