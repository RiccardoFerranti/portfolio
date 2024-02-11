import { fireEvent, screen } from '@testing-library/react';
import Button from 'components/buttons/Button';
import useTabs from 'hooks/useTabs';
import renderWithProvider from 'testUtils';

function TestComponent() {
  const { tabSelected, setTabSelected } = useTabs(1);

  return (
    <div>
      <p>
        Selected Tab:
        {tabSelected}
      </p>
      <Button onClick={() => setTabSelected(2)} text="Change Tab" />
    </div>
  );
}

describe('useTabs', () => {
  beforeEach(() => {
    renderWithProvider(<TestComponent />);
  });

  it('should render with initial tab value', () => {
    expect(screen.getByText('Selected Tab:1')).toBeInTheDocument();
  });

  it('should update tab value when button is clicked', () => {
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(screen.getByText('Selected Tab:2')).toBeInTheDocument();
  });
});
