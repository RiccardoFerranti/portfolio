import { ReactElement, ReactNode } from 'react';

import {
  StyledFormMessage,
  StyledFormOverlay,
  StyledFormOverlayBackgropund,
  StyledFormOverlayButtonsWrapper,
} from './FormOverlay.style';

interface IFormOverlayProps {
  message: string | ReactElement;
  children?: ReactNode;
}

export default function FormOverlay(props: IFormOverlayProps) {
  const { message, children } = props;

  const buttons = children && (
    <StyledFormOverlayButtonsWrapper>
      {children}
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
