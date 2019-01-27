import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const getStyles = ({ scale }) => {
  let margin;
  switch (scale) {
    case 'xs':
      margin = '0.25rem';
      break;
    case 's':
      margin = '0.5rem';
      break;
    case 'm':
      margin = '0.5rem';
      break;
    case 'l':
      margin = '0.5rem';
      break;
    case 'xl':
      margin = '0.5rem';
      break;
    default:
      margin = 0;
  }
  return css`
    > * + * {
      margin: ${margin} 0 0 0;
    }
  `;
};

const Stack = ({ children, scale }) => (
  <div css={getStyles({ scale })}>{children}</div>
);

Stack.propTypes = {
  children: PropTypes.node.isRequired,
  scale: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
};

export default Stack;
