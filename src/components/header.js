import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar is-fixed-top">

        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">{siteTitle}</Link>
          </div>

          <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
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
                <AnchorLink to="/support#human-resources" className="navbar-item">Human Resources</AnchorLink>
              </div>
            </div>

            <div className="navbar-item"><Link to="/sustain/">Sustainability</Link></div>
            <div className="navbar-item"><Link to="/contact/">Contact</Link></div>
          </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
