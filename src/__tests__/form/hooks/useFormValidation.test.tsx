import { render } from '@testing-library/react';
import { SET_FORM_STATE } from 'form/formReducer';
import useFormValidation from 'form/hooks/useFormValidation';

describe('useFormValidation', () => {
  it('should call dispatch with correct arguments when activeFields change', () => {
    // Mock form state and dispatch function
    const formState = {
      form: {
        fields: {
          from_name: { value: 'John Doe', error: null },
          from_email: { value: 'john@example.com', error: null },
          message: { value: 'Test message', error: null },
        },
      },
    };

    const activeFields = ['from_name', 'from_email'];
    const dispatch = jest.fn();

    // Create a mock component to use the hook
    function TestComponent() {
      useFormValidation(formState, activeFields, dispatch);
      return null;
    }

    // Render the mock component
    render(<TestComponent />);

    // Assert that dispatch is called with the correct arguments
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_FORM_STATE,
      payload: { value: 'John Doe', name: 'from_name' },
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_FORM_STATE,
      payload: { value: 'john@example.com', name: 'from_email' },
    });
  });

  it('should not call dispatch if activeFields is null', () => {
    // Mock form state and dispatch function
    const formState = {
      form: {
        fields: {
          from_name: { value: 'John Doe', error: null },
          from_email: { value: 'john@example.com', error: null },
          message: { value: 'Test message', error: null },
        },
      },
    };

    const activeFields = null;
    const dispatch = jest.fn();

    // Create a mock component to use the hook with null activeFields
    function TestComponent() {
      useFormValidation(formState, activeFields, dispatch);
      return null;
    }

    // Render the mock component
    render(<TestComponent />);

    // Assert that dispatch is not called
    expect(dispatch).not.toHaveBeenCalled();
  });
});
