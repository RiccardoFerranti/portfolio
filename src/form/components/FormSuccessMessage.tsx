import LABELS from 'consts/labels';

import { StyledFormSuccessMessage } from './FormSuccessMessage.style';

export default function FormSuccessMessage() {
  return (
    <StyledFormSuccessMessage>
      {LABELS.notififications.emailSuccess}
    </StyledFormSuccessMessage>
  );
}
