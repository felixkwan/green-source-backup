import React, { Component } from "react"

import Link from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Header extends Component {
  state = {
    toggle:false
  }
  Toggle = () => {
      this.setState({toggle:!this.state.toggle})
  }

  render() {

    return (
      <>
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
                className="navbar-item" to="/">Green Source Gardening</AniLink>
                <div role="button" onClick={this.Toggle} className={this.state.toggle ? "burger navbar-burger is-active" : "burger navbar-burger"} aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </div>
              </div>
    
              <div className={this.state.toggle ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <AniLink fade to="/service/">Service</AniLink>
                    </div>
                  <div className="navbar-item"><AniLink fade to="/client/">Clients</AniLink></div>
      
                    <div className="navbar-item has-dropdown is-hoverable">
                      <span className="navbar-link">
                        Support
                      </span>
      
                      <div className="navbar-dropdown">
                        <AniLink fade to="/support#vehicles" className="navbar-item">Vehicles</AniLink>
                        <AniLink fade to="/support#equipment" className="navbar-item">Equipment</AniLink>
                        <AniLink fade to="/support#deploy" className="navbar-item">Deploy</AniLink>
                        <AniLink fade to="/support#human-resource" className="navbar-item">Human Resources</AniLink>
                      </div>
                    </div>

                  <div className="navbar-item"><AniLink fade to="/sustain/">Sustainability</AniLink></div>
                  <div className="navbar-item"><AniLink fade to="/about/">About</AniLink></div>
                </div>
              </div>

          </div>
        </nav>
      </>
    ); 
  }
}

export default Header
