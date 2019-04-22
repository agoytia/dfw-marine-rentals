import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { StaticQuery, graphql } from 'gatsby';

import favicon from '../../../static/img/favicon-32x32.png';

const Layout = ({ children, data }) => (
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Boat rentals, jetski rentals' },
            { name: 'keywords', content: 'boat, jetski, rentals, dfw, dallas, fort worth, jetski rental, boat rental' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div id="wrapper" className="divided">
          {children}
          <footer className="wrapper style1 align-center">
            <div className="inner">
              <ul className="icons">
                <li><a href="/" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="/" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="/" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="/" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="/" className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
              </ul>
              <p>&copy; DFW Marine Rentals</p>
            </div>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;