import styled from 'styled-components';

export const StyledCardCLip = styled.div`
  width: 82px;
  height: 33px;
  margin: 8px auto 0;
  border: ${({ theme }) => `4px solid  ${theme.colors.aqua}`};
  background-color: ${({ theme }) => theme.colors.greyDark3};
  border-radius: 16px;
  display: flex;
  align-self: flex-start;
  position: relative;
  z-index: 3;
`;

interface IStyledCardBadgeCord {
  $flip: boolean;
}

export const StyledCardBadgeCord = styled('div')<IStyledCardBadgeCord>`
  width: 54px;
  height: 69px;
  background: ${({ theme }) => theme.colors.black};
  transform: ${({ $flip }) => (!$flip ? 'skew(25deg)' : 'skew(-25deg)')};
  position: absolute;
  top: -15px;
  left: ${({ $flip }) => (!$flip ? 'calc(50% - 44px)' : 'calc(50% - 10px)')};
  box-shadow: ${({ theme }) => `0px -3px 3px  ${theme.colors.black}`};
  z-index: 4;
`;

export const StyledCardBody = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`;
