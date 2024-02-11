import { render, fireEvent } from '@testing-library/react';
import LABELS from 'consts/labels';
import useFormGoBack from 'form/hooks/useFormGoBack';

describe('useFormGoBack', () => {
  it('should show message and prevent leaving form if form is dirty', () => {
    // Mock form state and onLeaveForm function
    const formState = {
      form: {
        fields: {
          from_name: { value: 'John Doe', error: null },
          from_email: { value: 'john@example.com', error: null },
          message: { value: 'Test valid message', error: null },
        },
      },
    };
    const onLeaveForm = jest.fn();

    // Render a component that utilizes the hook
    function TestComponent() {
      const { showMessage, handleSetShowMessage } = useFormGoBack(formState, onLeaveForm);

      return (
        <div>
          {showMessage && <div data-testid="message">{LABELS.notififications.leaveForm}</div>}
          <button type="button" onClick={handleSetShowMessage}>Leave</button>
        </div>
      );
    }

    const { getByText, getByTestId } = render(<TestComponent />);

    // Click the button to trigger handleSetShowMessage
    fireEvent.click(getByText('Leave'));

    // Assert that the message is shown and onLeaveForm is not called
    expect(getByTestId('message')).toBeInTheDocument();
    expect(onLeaveForm).not.toHaveBeenCalled();
  });

  it('should not show message and call onLeaveForm if form is clean', () => {
    // Mock form state and onLeaveForm function
    const formState = {
      form: {
        fields: {
          from_name: { value: '', error: null },
          from_email: { value: '', error: null },
          message: { value: '', error: null },
        },
      },
    };
    const onLeaveForm = jest.fn();

    // Render a component that utilizes the hook
    function TestComponent() {
      const { showMessage, handleSetShowMessage } = useFormGoBack(formState, onLeaveForm);

      return (
        <div>
          {showMessage && <div data-testid="message">{LABELS.notififications.leaveForm}</div>}
          <button type="button" onClick={handleSetShowMessage}>Leave</button>
        </div>
      );
    }

    const { queryByTestId, getByText } = render(<TestComponent />);

    // Click the button to trigger handleSetShowMessage
    fireEvent.click(getByText('Leave'));

    // Assert that the message is not shown and onLeaveForm is called
    expect(queryByTestId('message')).not.toBeInTheDocument();
    expect(onLeaveForm).toHaveBeenCalled();
  });
});
