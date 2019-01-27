import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Spacings from '../ui/spacings';

const Li = styled.li`
  display: inline-block;
  padding: 0 3rem;
`;

const Header = () => (
  <Spacings.Inset scale="l" direction="horizontal">
    <nav
      css={css`
        display: flex;
        height: 6rem;
        align-items: center;
      `}
    >
      <div
        css={css`
          flex: 1;
        `}
      >
        Malcolm Laing
      </div>
      <ul
        css={css`
          list-style: none;
          margin: 0;
          padding: 0;
        `}
      >
        <Li>Writing</Li>
        <Li>Contact</Li>
      </ul>
    </nav>
  </Spacings.Inset>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `test`,
};

export default Header;
