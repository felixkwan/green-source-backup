import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React, { Component } from "react"

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
                <Link className="navbar-item" to="/">Green Source Gardening</Link>
                <div role="button" onClick={this.Toggle} className={this.state.toggle ? "burger navbar-burger is-active" : "burger navbar-burger"} aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </div>
              </div>
    
              <div className={this.state.toggle ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-end">
                  <div className="navbar-item"><Link to="/service/">Service</Link></div>
                  <div className="navbar-item"><Link to="/client/">Clients</Link></div>
      
                    <div className="navbar-item has-dropdown is-hoverable">
                      <span className="navbar-link">
                        Support
                      </span>
      
                      <div className="navbar-dropdown">
                        <AnchorLink to="/support#vehicles" className="navbar-item">Vehicles</AnchorLink>
                        <AnchorLink to="/support#equipment" className="navbar-item">Equipment</AnchorLink>
                        <AnchorLink to="/support#deploy" className="navbar-item">Deploy</AnchorLink>
                        <AnchorLink to="/support#human-resource" className="navbar-item">Human Resources</AnchorLink>
                      </div>
                    </div>

                  <div className="navbar-item"><Link to="/sustain/">Sustainability</Link></div>
                  <div className="navbar-item"><Link to="/about/">About</Link></div>
                </div>
              </div>

          </div>
        </nav>
      </>
    ); 
  }
}

export default Header
