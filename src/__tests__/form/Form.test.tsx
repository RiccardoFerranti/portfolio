import { fireEvent, screen } from '@testing-library/react';
import LABELS from 'consts/labels';
import Form from 'form/Form';
import renderWithProvider from 'testUtils';

describe('Form', () => {
  const renderView = () => renderWithProvider(<Form />);

  beforeEach(() => {
    renderView();
  });

  it('should render the input `from_name` correctly', () => {
    expect(screen.getByTestId(LABELS.form.name.field)).toBeInTheDocument();
  });

  it('should render the input `from_email` correctly', () => {
    expect(screen.getByTestId(LABELS.form.email.field)).toBeInTheDocument();
  });

  it('should render the textarea `message` correctly', () => {
    expect(screen.getByTestId(LABELS.form.message.field)).toBeInTheDocument();
  });

  it('should render the 2 buttons correctly', () => {
    const formButtons = screen.getAllByRole('button');

    expect(formButtons.length).toBe(2);
    expect(formButtons[0]).toHaveTextContent(LABELS.buttons.submit);
    expect(formButtons[1]).toHaveTextContent(LABELS.buttons.back);
  });

  it('should show the input errors when the form is submitted with empty values', () => {
    expect(screen.queryByText(LABELS.form.name.error.empty)).not.toBeInTheDocument();
    expect(screen.queryByText(LABELS.form.email.error.empty)).not.toBeInTheDocument();
    expect(screen.queryByText(LABELS.form.message.error.empty)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('button-submit'));
    expect(screen.getByText(LABELS.form.name.error.empty)).toBeInTheDocument();
    expect(screen.getByText(LABELS.form.email.error.empty)).toBeInTheDocument();
    expect(screen.getByText(LABELS.form.message.error.empty)).toBeInTheDocument();
  });

  it('should show the overlay message to leave the form when the `back` button is clicked'
  + 'and inputs are all filled and valid', () => {
    const nameField = screen.getByTestId(LABELS.form.name.field);
    const emailField = screen.getByTestId(LABELS.form.email.field);
    const messageField = screen.getByTestId(LABELS.form.message.field);

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageField, { target: { value: 'Test valid message' } });

    fireEvent.click(screen.getByTestId('button-back'));

    expect(screen.getByText(LABELS.notififications.leaveForm)).toBeInTheDocument();
    expect(screen.getByTestId('button-no')).toHaveTextContent(LABELS.buttons.no);
    expect(screen.getByTestId('button-yes')).toHaveTextContent(LABELS.buttons.yes);

    fireEvent.click(screen.getByTestId('button-no'));

    expect(screen.queryByTestId('form-leave-overlay')).not.toBeInTheDocument();
  });
});

