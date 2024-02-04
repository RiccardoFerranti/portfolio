import styled from 'styled-components';

export const StyledFormOverlayBackgropund = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  width: 100%;
  height: 100dvh;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; 
  backdrop-filter: blur(50px);
`;

export const StyledFormOverlay = styled.div`
  width: 300px;
  height: 150px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledFormMessage = styled.div`
 display: flex;
 flex-direction: column;
 color: white;
 text-align: center;
 font-size: 18px;
`;

export const StyledFormOverlayButtonsWrapper = styled.div`
  display: flex;

  button {
    margin: 10px;
  }
`;
