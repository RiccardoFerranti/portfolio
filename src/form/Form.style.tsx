import styled, { keyframes } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import BREAKPOINTS from 'consts/breakpoints';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledSpinnerWrapper = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 20px;
`;

export const StyledSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff; /* Blue color for the spinner */
  border-radius: 50%;
  width: 100%;
  height: 100%;
  animation: ${spin} 1s linear infinite;
`;

export const StyledForm = styled('div')`
  height: 100%;

  & > button {
    margin-top: 20px;
  }
`;

export const StyledFormField = styled.div`
  margin-bottom: 15px;
`;

export const StyledToastContainer = styled(ToastContainer)`
  @media screen and (max-width: ${BREAKPOINTS.mobile}) {
    width: 335px;
    right: 0;
    margin: 0 auto;
  }

  .Toastify__toast--success {
    background-color: rgba(0, 0, 0, 0.8);
    border: ${({ theme }) => `1px solid ${theme.colors.aquaLight1}`};
    border-radius: 6px;

    .Toastify__toast-icon {
      display: none;
    }

    .Toastify__progress-bar--success {
      background: rgb(46,231,229);
      background: linear-gradient(90deg, rgba(68,244,251,1) 0%, rgba(16,203,201,1) 50%, rgba(3,182,180,1) 100%);
    }
  }

  .Toastify__toast--error {
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid ${({ theme }) => theme.colors.red};
    border-radius: 6px;

    .Toastify__toast-icon {
      display: none;
    }

    .Toastify__progress-bar--error {
      background: rgb(251,145,145);
      background: linear-gradient(90deg, rgba(251,145,145,1) 0%, rgba(255,0,0,1) 50%, rgba(184,0,0,1) 100%);
    }
  }
`;
