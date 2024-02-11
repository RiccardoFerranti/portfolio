import { screen } from '@testing-library/react';
import CardBack from 'components/card/CardBack';
import renderWithProvider from 'testUtils';

describe('CardBack', () => {
  it('should render the form correctly', () => {
    renderWithProvider(<CardBack flip={false} />);
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });
});
