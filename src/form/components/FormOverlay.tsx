import Button from 'components/buttons/Button';
import LABELS from 'consts/labels';

import {
  StyledFormMessage,
  StyledFormOverlay,
  StyledFormOverlayBackgropund,
  StyledFormOverlayButtonsWrapper,
} from './FormOverlay.style';

interface IFormOverlayProps {
  message: string | React.ReactElement
  setShowMessage?: (x: boolean) => void;
  leaveForm?: () => void;
}

export default function FormOverlay(props: IFormOverlayProps) {
  const { message, setShowMessage, leaveForm } = props;

  const areBussonsVisible = setShowMessage && leaveForm;

  const buttons = areBussonsVisible && (
    <StyledFormOverlayButtonsWrapper>
      <Button
        dataTestid="button-no"
        text={LABELS.buttons.no}
        onClick={() => setShowMessage(false)}
      />
      <Button
        dataTestid="button-yes"
        text={LABELS.buttons.yes}
        onClick={() => leaveForm()}
        bgDark
      />
    </StyledFormOverlayButtonsWrapper>
  );

  return (
    <StyledFormOverlayBackgropund>
      <StyledFormOverlay dataTestid="form-leave-overlay">
        <StyledFormMessage>
          {message}
        </StyledFormMessage>
        {buttons}
      </StyledFormOverlay>
    </StyledFormOverlayBackgropund>
  );
}
