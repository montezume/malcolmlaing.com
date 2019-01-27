import React from 'react';
import { css } from '@emotion/core';
import Layout from '../../components/layout';
import Text from '../../components/ui/typography/text';
import ExternalLink from '../../components/ui/external-link';
import Spacings from '../../components/ui/spacings';
// import CTLogo from '../../components/ui/icons/ct-logo';
// import * as customProperties from '../../theme/custom-properties';
import SEO from '../../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`malcolmlaing`, `malcolm laing`, `react`, `javascript`]}
    />
    <div>
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
    </div>
    <Spacings.Inset scale="l" direction="horizontal">
      <Spacings.Stack scale="m">
        <div>
          <Text.Body>
            I make the web a more interactive and exciting place by creating
            applications for the modern world. I love working with the latest
            technologies to create modular, testable projects.
          </Text.Body>
        </div>
        <div>
          <Text.Body>
            {`
            I was born in Vancouver, went to university in Victoria, lived in
            Montréal after university, and moved to Berlin in 2018. I'm
            passionate about food, travel and photography, and can't wait to see
            what the future has in store.`}
          </Text.Body>
        </div>
      </Spacings.Stack>
    </Spacings.Inset>
  </Layout>
);

export default IndexPage;
