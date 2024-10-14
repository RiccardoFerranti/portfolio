import { screen } from '@testing-library/react';
import LABELS from 'consts/labels';
import FormErrorMessage from 'form/components/FormErrorMessage';
import renderWithProvider from 'testUtils';

describe('FormErrorMessage', () => {
  it('should render the `default` error message correctly', () => {
    renderWithProvider(<FormErrorMessage />);
    expect(screen.getByText(LABELS.notififications.emailError)).toBeInTheDocument();
  });

  it('should render the error message provided correctly', () => {
    const errorMessage = 'test error message';
    renderWithProvider(<FormErrorMessage error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});

