import { StyledMessageLength, StyledTextArea, StyledTextAreaFooter } from './TextArea.style';
import { StyledLabel, StyledError } from './CommonStyle';
import MAX_LENGTH_TEXTAREA from './const';

export interface ITextAreatProps {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string | null;
  handleOnChange: any
}

export default function TextArea(props: ITextAreatProps) {
  const {
    name, label, value, placeholder, handleOnChange, error,
  } = props;

  return (
    <StyledTextArea $error={error}>
      <label htmlFor={name}>
        <StyledLabel>{label}</StyledLabel>
        <textarea
          id={name}
          data-testid={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            handleOnChange(name, e.target.value.trim());
          }}
        />
        <StyledTextAreaFooter>
          <StyledError>{error || null}</StyledError>
          <StyledMessageLength>{`${value.length} / ${MAX_LENGTH_TEXTAREA}`}</StyledMessageLength>
        </StyledTextAreaFooter>
      </label>
    </StyledTextArea>
  );
}
