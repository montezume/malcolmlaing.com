import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';
import { getGlobalStyles, getSiteStyles } from './layout.styles';
import Header from '../header';
import Footer from '../footer';

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
      <React.Fragment>
        <Global styles={getGlobalStyles()} />
        <div css={getSiteStyles()}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            css={css`
              flex-grow: 1;
            `}
          >
            {children}
          </div>
          <Footer />
        </div>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
