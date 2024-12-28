import { fireEvent, screen } from '@testing-library/react';
import LABELS from 'consts/labels';
import FormOverlayButtons from 'form/components/FormOverlayButtons';
import renderWithProvider from 'testUtils';

describe('FormOverlayButtons', () => {
  let setShowMessageMock: jest.Mock;
  let leaveFormMock: jest.Mock;

  beforeEach(() => {
    // Mock the functions passed as props
    setShowMessageMock = jest.fn();
    leaveFormMock = jest.fn();

    // Render the component
    renderWithProvider(
      <FormOverlayButtons
        setShowMessage={setShowMessageMock}
        leaveForm={leaveFormMock}
      />,
    );
  });

  it('should render the "no" and "yes" buttons correctly', () => {
    expect(screen.getByTestId('button-no')).toBeInTheDocument();
    expect(screen.getByTestId('button-yes')).toBeInTheDocument();

    expect(screen.getByText(LABELS.buttons.no)).toBeInTheDocument();
    expect(screen.getByText(LABELS.buttons.yes)).toBeInTheDocument();
  });

  it('should call correctly setShowMessage with false when "no" button is clicked', () => {
    fireEvent.click(screen.getByTestId('button-no'));
    expect(setShowMessageMock).toHaveBeenCalledWith(false);
  });

  it('should call correctly leaveForm when "yes" button is clicked', () => {
    fireEvent.click(screen.getByTestId('button-yes'));
    expect(leaveFormMock).toHaveBeenCalled();
  });
});
