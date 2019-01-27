import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import * as customProperties from '../../../theme/custom-properties';

const ExternalLink = ({ children, href, target, rel, title, className }) => (
  <a
    css={css`
      color: ${customProperties.accentColor};
      text-decoration: none;
      &:hover,
      &:active,
      &:focus {
        color: ${customProperties.colorForText};
      }
    `}
    href={href}
    target={target}
    title={title}
    rel={rel}
    className={className}
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  title: PropTypes.string,
  rel: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ExternalLink.defaultProps = {
  target: '_BLANK',
  rel: 'noopener noreferrer',
};
export default ExternalLink;
