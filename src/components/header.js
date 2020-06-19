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
        <header>
          <div className="navbar is-fixed-top">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">
                    <Link to="/">Green Source Gardening</Link>
                </div>
    
                <div role="button" onClick={this.Toggle} className={this.state.toggle ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </div>
              </div>

              <div className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                <div className="navbar-mobile container">
                  <div className="navbar-item"><Link to="/service/">Service</Link></div>
                  <div className="navbar-item"><Link to="/client/">Clients</Link></div>
                  <div className="navbar-item"><Link to="/support/">Support</Link></div>
                  <div className="navbar-item"><Link to="/sustain/">Sustainability</Link></div>
                  <div className="navbar-item"><Link to="/contact/">Contact</Link></div>
                </div>
              </div>
    
              <div className="navbar-menu navbar-end">
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
        </header>
      </>
    ); 
  }
}

export default Header
