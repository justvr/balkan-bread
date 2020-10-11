/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle='data.site.siteMetadata.title' />
      <div
        style={{
          maxWidth: 860,
          padding: `1.45rem 1.0875rem`,
          textAlign: `center`,
        }}
      >
        <main>{children}</main>
        <footer>
          copyright ©️ Balkan Bread 2020
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
