/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./template.scss"

const Template = ({ children }) => {

  return (
    <>
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Template
