import LABELS from 'consts/labels';

import { StyledFormErrorMessage } from './FormErrorMessage.style';

export default function FormErrorMessage() {
  return (
    <StyledFormErrorMessage>
      {LABELS.notififications.emailError}
    </StyledFormErrorMessage>
  );
}
