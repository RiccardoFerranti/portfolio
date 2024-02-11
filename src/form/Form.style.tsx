import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledForm = styled('div')`
  height: 100%;

  & > button {
    margin-top: 20px;
  }

  /* textarea { 
    @-moz-document url-prefix() {
      max-width: 327px;
    }

    max-width: 334px;
  } */
`;

export const StyledFormField = styled.div`
  margin-bottom: 15px;
`;

export const StyledToastContainer = styled(ToastContainer)`
.Toastify__toast--success {
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #2ee7e5;

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

  .Toastify__toast-icon {
    display: none;
  }

  .Toastify__progress-bar--error {
    background: rgb(251,145,145);
    background: linear-gradient(90deg, rgba(251,145,145,1) 0%, rgba(255,0,0,1) 50%, rgba(184,0,0,1) 100%);
  }
}
`;
