import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          {children}
          <footer className="footer">
            <div className="footer__wrapper">
              <div className="footer__author">
                Разработано &nbsp;
                <a
                  href="https://marselgabdulov.github.io/personal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="контакты разработчика"
                >
                  MG
                </a>
              </div>

              <div className="footer__copy">
                © {new Date().getFullYear()} &nbsp;
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
