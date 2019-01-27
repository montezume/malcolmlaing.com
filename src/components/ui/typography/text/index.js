import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Inline = ({ children }) => (
  <span
    css={css`
      margin: 0;
    `}
  >
    {children}
  </span>
);

Inline.propTypes = {
  children: PropTypes.node.isRequired,
};

Inline.displayName = 'Inline';

const Body = ({ children }) => (
  <p
    css={css`
      margin: 0;
    `}
  >
    {children}
  </p>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

Body.displayName = 'Body';

export default {
  Body,
  Inline,
};
