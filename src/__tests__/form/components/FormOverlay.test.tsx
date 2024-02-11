import { screen } from '@testing-library/react';
import LABELS from 'consts/labels';
import FormOverlay from 'form/components/FormOverlay';
import renderWithProvider from 'testUtils';

describe('FormOverlay', () => {
  const message = 'test message';

  const renderView = () => renderWithProvider(
    <FormOverlay
      message={message}
      setShowMessage={() => null}
      leaveForm={() => null}
    />,
  );

  beforeEach(() => {
    renderView();
  });

  it('should render the message in the form overlay correctly', () => {
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('should render the buttons in the form overlay correctly', () => {
    screen.getAllByRole('button').forEach((button, index) => {
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(index === 0 ? LABELS.buttons.no : LABELS.buttons.yes);
    });
  });
});

