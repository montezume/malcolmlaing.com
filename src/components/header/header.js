import { Link } from 'gatsby';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Heading from '../ui/typography/heading';

const Header = ({ siteTitle }) => (
  <div
    css={css`
      background: rebeccapurple;
      margin-bottom: 1.45rem;
    `}
  >
    <div>
      <Heading elementType="h1">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `test`,
};

export default Header;
