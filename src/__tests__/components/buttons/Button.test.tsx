import { fireEvent, screen } from '@testing-library/react';
import Button from 'components/buttons/Button';
import renderWithProvider from 'testUtils';

describe('Button', () => {
  const mockOnClick = jest.fn();

  const renderView = () => renderWithProvider(<Button text="test title" onClick={mockOnClick} />);

  beforeEach(() => {
    renderView();
  });

  it('should render the button correctly', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the text in the button correctly', () => {
    expect(screen.getByText('test title')).toBeInTheDocument();
  });

  it('should fire the function correctly when the button is clicked', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

