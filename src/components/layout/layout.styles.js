import { css } from '@emotion/core';
import * as customProperties from '../../theme/custom-properties';

export const getGlobalStyles = () => css`
  html {
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    color: ${customProperties.colorForText};
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
`;

export const getSiteStyles = () => css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
