import { screen } from '@testing-library/react';
import LABELS from 'consts/labels';
import FormSuccessMessage from 'form/components/FormSuccessMessage';
import renderWithProvider from 'testUtils';

describe('FormSuccessMessage', () => {
  const renderView = () => renderWithProvider(<FormSuccessMessage />);

  beforeEach(() => {
    renderView();
  });

  it('should render the success message correctly', () => {
    expect(screen.getByText(LABELS.notififications.emailSuccess)).toBeInTheDocument();
  });
});

