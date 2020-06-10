import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar is-fixed-top">

        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">{siteTitle}</Link>
          </div>
        </div>

          <div className="navbar-menu navbar-end">

            <div className="navbar-item"><Link to="/service/">Service</Link></div>
            <div className="navbar-item"><Link to="/client/">Clients</Link></div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link class="navbar-link">
                Support
              </Link>

              <div className="navbar-dropdown">
                <Link to="/" className="navbar-item">Vehicles</Link>
                <Link to="/" className="navbar-item">Equipment</Link>
                <Link to="/" className="navbar-item">Deploy</Link>
                <Link to="/" className="navbar-item">Human Resources</Link>
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
