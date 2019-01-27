import React from 'react';
import { css } from '@emotion/core';

const Footer = () => (
  <footer
    css={css`
      width: 100%;
      height: 4rem;
      display: flex;
      background: teal;
      color: white;
      align-items: center;
      justify-content: center;
    `}
  >
    © Malcolm Laing | {new Date().getFullYear()}
  </footer>
);

export default Footer;
