import StyledInputText from './TextInput.style';
import { StyledLabel, StyledError } from './CommonStyle';

export interface ITextInputProps {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string | null;
  handleOnChange: any;
}

export default function TextInput(props: ITextInputProps) {
  const {
    name, label, value, placeholder, handleOnChange, error,
  } = props;

  return (
    <StyledInputText $error={error}>
      <label htmlFor={name}>
        <StyledLabel>{label}</StyledLabel>
        <input
          id={name}
          data-testid={name}
          name={name}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={(e) => {
            handleOnChange(name, e.target.value.trim());
          }}
        />
        {error ? <StyledError>{error}</StyledError> : null}
      </label>
    </StyledInputText>
  );
}
