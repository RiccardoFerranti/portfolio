import Button from 'components/buttons/Button';

import {
  StyledFormMessage,
  StyledFormOverlay,
  StyledFormOverlayBackgropund,
  StyledFormOverlayButtonsWrapper,
} from './FormOverlay.style';

interface IFormOverlayProps {
  message: string | React.ReactElement
  setShowMessage: (x: boolean) => void;
  leaveForm: () => void;
}

export default function FormOverlay(props: IFormOverlayProps) {
  const { message, setShowMessage, leaveForm } = props;

  return (
    <StyledFormOverlayBackgropund>
      <StyledFormOverlay>
        <StyledFormMessage>
          {message}
        </StyledFormMessage>
        <StyledFormOverlayButtonsWrapper>
          <Button text="NO" onClick={() => setShowMessage(false)} />
          <Button text="YES" onClick={() => leaveForm()} bgDark />
        </StyledFormOverlayButtonsWrapper>
      </StyledFormOverlay>
    </StyledFormOverlayBackgropund>
  );
}
