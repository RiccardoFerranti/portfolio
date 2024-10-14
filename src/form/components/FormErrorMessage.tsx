import LABELS from 'consts/labels';

import { StyledFormErrorMessage } from './FormErrorMessage.style';

export interface IFormErrorMessageProps {
  error?: string;
}

export default function FormErrorMessage(props: IFormErrorMessageProps) {
  const { error } = props;

  const errorMessage = error || LABELS.notififications.emailError;

  return (
    <StyledFormErrorMessage>
      {errorMessage}
    </StyledFormErrorMessage>
  );
}
