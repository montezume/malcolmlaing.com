import React from 'react';
import { css } from '@emotion/core';
import ExternalLink from '../ui/external-link';
import Spacings from '../ui/spacings';

const IndexPage = () => (
  <Spacings.Inset scale="l" direction="horizontal">
    <h1
      css={css`
        margin: 0;
        font-size: 2.8rem;
        font-weight: 100;
        line-height: 1.7;
        letter-spacing: -1px;
        max-width: 50rem;
      `}
    >
      {`I'm Malcolm Laing, a `}
      <ExternalLink href="https://github.com/montezume">
        front end developer
      </ExternalLink>
      {` living in Berlin, working for `}
      <ExternalLink href="https://commercetools.com">
        commercetools
      </ExternalLink>
      .
    </h1>
  </Spacings.Inset>
);

export default IndexPage;
