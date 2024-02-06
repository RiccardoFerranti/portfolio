import { fireEvent, screen } from '@testing-library/react';
import TextArea, { ITextAreatProps } from 'components/inputs/TextArea';
import renderWithProvider from 'testUtils';

describe('TextArea', () => {
  let mockedProps: ITextAreatProps;
  const mockOnChange = jest.fn();

  const renderView = (props = mockedProps) => renderWithProvider(
    <TextArea
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
      name: 'test-textarea',
      label: 'test label',
      value: '',
      placeholder: 'test placeholder',
      error: 'test error',
      handleOnChange: mockOnChange,
    };
  });

  it('should render the textarea correctly', () => {
    renderView();
    expect(screen.getByTestId('test-textarea')).toBeInTheDocument();
  });

  it('should render the textarea label correctly', () => {
    renderView();
    expect(screen.getByText('test label')).toBeInTheDocument();
  });

  it('should render the placeholder inside the textarea correctly', () => {
    renderView();
    expect(screen.getByPlaceholderText('test placeholder')).toBeInTheDocument();
  });

  it('should render the value inside the textarea and the characters correctly', () => {
    renderView();
    expect(screen.getByText('0 / 300')).toBeInTheDocument();

    mockedProps.value = 'test value';
    renderView();
    expect(screen.getByText('test value')).toBeInTheDocument();
    expect(screen.getByText('10 / 300')).toBeInTheDocument();
  });

  it('should call onChange handler when textarea value changes', () => {
    renderView();

    const textareaElement = screen.getByTestId('test-textarea');
    fireEvent.change(textareaElement, { target: { value: 'new value' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});

