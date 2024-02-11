import { screen } from '@testing-library/react';
import CardFront from 'components/card/CardFront';
import renderWithProvider from 'testUtils';

describe('CardFront', () => {
  it('should render the tabs correctly', () => {
    renderWithProvider(<CardFront flip={false} />);

    // Ensure that the card content is rendered
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contacts')).toBeInTheDocument();
  });
});
