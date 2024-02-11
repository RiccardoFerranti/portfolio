import { render, act } from '@testing-library/react';
import useDelayedFlip from 'hooks/useDelayedFlip';

interface ITestComponentProps {
  flip?: boolean;
}

function TestComponent(props: ITestComponentProps) {
  const { flip = true } = props;
  const { flipDelayed } = useDelayedFlip(flip);

  return <div>{flipDelayed ? 'True' : 'False'}</div>;
}

describe('useDelayedFlip', () => {
  it('should update flip state after delay', async () => {
    const { container, rerender } = render(<TestComponent />);

    expect(container.textContent).toBe('True'); // Initial state is true

    rerender(<TestComponent flip={false} />);

    await act(async () => {
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });

    expect(container.textContent).toBe('False'); // After 2000ms, state should be false
  });
});
