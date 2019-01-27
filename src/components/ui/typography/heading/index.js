import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const getFontSize = elementType => {
  switch (elementType) {
    case 'h1':
      return '2.5rem';
    case 'h2':
      return '2 rem';
    case 'h3':
      return '1.5rem';
    default:
      return '';
  }
};

const Heading = ({ children, elementType }) => {
  const Element = elementType;
  return (
    <Element
      css={css`
        margin: 0;
        font-size: ${getFontSize(elementType)};
      `}
    >
      {children}
    </Element>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  elementType: PropTypes.oneOf(['h1', 'h2', 'h3']),
};

export default Heading;
