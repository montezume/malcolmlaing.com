import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const getInsetStyles = ({ direction, scale }) => {
  let padding;
  switch (scale) {
    case 'xs':
      padding = '0.25rem';
      break;
    case 's':
      padding = '0.5rem';
      break;
    case 'm':
      padding = '1rem';
      break;
    case 'l':
      padding = '1.5rem';
      break;
    case 'xl':
      padding = '2rem';
      break;
    default:
      padding = 0;
  }
  if (direction === 'horizontal') {
    return css`
      padding: 0 ${padding};
    `;
  }
  if (direction === 'vertical') {
    return css`
      padding: ${padding} 0;
    `;
  }
  return css`
    padding: ${padding};
  `;
};

const Inset = ({ children, scale, direction }) => (
  <div css={getInsetStyles({ direction, scale })}>{children}</div>
);

Inset.displayName = 'Inset';

Inset.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  scale: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
};

export default Inset;
