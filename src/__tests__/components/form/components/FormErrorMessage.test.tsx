import { screen } from '@testing-library/react';
import LABELS from 'consts/labels';
import FormErrorMessage from 'form/components/FormErrorMessage';
import renderWithProvider from 'testUtils';

describe('FormErrorMessage', () => {
  const renderView = () => renderWithProvider(<FormErrorMessage />);

  beforeEach(() => {
    renderView();
  });

  it('should render the error message correctly', () => {
    expect(screen.getByText(LABELS.notififications.emailError)).toBeInTheDocument();
  });
});

