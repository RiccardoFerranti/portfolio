import { screen } from '@testing-library/react';
import Map from 'components/map/Map';
import { MAP_URL } from 'components/map/consts';
import renderWithProvider from 'testUtils';

describe('Map', () => {
  const address = 'test address';
  const renderView = () => renderWithProvider(<Map address={address} />);

  beforeEach(() => {
    renderView();
  });

  it('should render the Map correctly', () => {
    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute(
      'href',
      `${MAP_URL}${encodeURIComponent(address)}`,
    );
  });
});

