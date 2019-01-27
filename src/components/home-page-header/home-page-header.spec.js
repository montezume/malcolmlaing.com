import React from 'react';
import { render } from 'react-testing-library';
import HomePageHeader from './home-page-header';

describe('HomePageHeader', () => {
  it('should display header text', () => {
    const { getByText } = render(<HomePageHeader />);
    expect(getByText(/Malcolm Laing/)).toBeTruthy();
  });
});
