import { fireEvent, screen } from '@testing-library/react';
import TextInput, { ITextInputProps } from 'components/inputs/TextInput';
import renderWithProvider from 'testUtils';

describe('TextInput', () => {
  let mockedProps: ITextInputProps;
  const mockOnChange = jest.fn();

  const renderView = (props = mockedProps) => renderWithProvider(
    <TextInput
      name={props.name}
      label={props.label}
      value={props.value}
      placeholder={props.placeholder}
      error={props.error}
      handleOnChange={props.handleOnChange}
    />,
  );

  beforeEach(() => {
    mockedProps = {
      name: 'test-textinput',
      label: 'test label',
      value: '',
      placeholder: 'test placeholder',
      error: 'test error',
      handleOnChange: mockOnChange,
    };
  });

  it('should render the textinput correctly', () => {
    renderView();
    expect(screen.getByTestId('test-textinput')).toBeInTheDocument();
  });

  it('should render the textinput label correctly', () => {
    renderView();
    expect(screen.getByText('test label')).toBeInTheDocument();
  });

  it('should render the placeholder inside the textinput correctly', () => {
    renderView();
    expect(screen.getByPlaceholderText('test placeholder')).toBeInTheDocument();
  });

  it('should render the value inside the textinput correctly', () => {
    mockedProps.value = 'test value';
    renderView();
    expect(screen.getByTestId('test-textinput')).toHaveValue('test value');
  });

  it('should call onChange handler when textinput value changes', () => {
    renderView();

    const textinputElement = screen.getByTestId('test-textinput');
    fireEvent.change(textinputElement, { target: { value: 'new value' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});

