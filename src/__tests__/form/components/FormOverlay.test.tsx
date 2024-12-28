import { screen } from '@testing-library/react';
import FormOverlay from 'form/components/FormOverlay';
import renderWithProvider from 'testUtils';

describe('FormOverlay', () => {
  const message = 'test message';

  const renderView = (children?: React.ReactNode) => renderWithProvider(<FormOverlay message={message}>{children}</FormOverlay>);

  beforeEach(() => {
    renderView();
  });

  it('should render the message correctly in the form overlay', () => {
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('should render children correctly when passed', () => {
    const children = 'test children';
    renderView(children);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});

