import React from 'react';
import { css } from '@emotion/core';
import * as customProperties from '../../../../theme/custom-properties';
import { ReactComponent as Star } from '../../../../images/logos/ct-logo.svg';

const Logo = () => (
  <Star
    css={css`
      height: 50px;
      g {
        fill: ${customProperties.colorForText};
      }
    `}
  />
);

export default Logo;
